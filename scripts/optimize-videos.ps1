# Video Optimization Script for ZHH Website
# This script compresses videos to web-optimized format (1080p max, optimized bitrate)
# Requires FFmpeg to be installed and available in PATH

param(
    [string]$InputDir = "public\assets",
    [int]$MaxWidth = 1920,
    [int]$MaxHeight = 1080,
    [int]$Crf = 23,  # Quality: 18-28, lower = better quality but larger file
    [string]$AudioBitrate = "128k"
)

Write-Host "=== ZHH Website Video Optimization Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if FFmpeg is available
try {
    $ffmpegVersion = ffmpeg -version 2>&1 | Select-Object -First 1
    Write-Host "FFmpeg found: $ffmpegVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: FFmpeg not found. Please install FFmpeg first." -ForegroundColor Red
    Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Find all MP4 files
$videoFiles = Get-ChildItem -Path $InputDir -Recurse -Filter "*.mp4" | Where-Object { $_.Name -notlike "*optimized*" }

if ($videoFiles.Count -eq 0) {
    Write-Host "No MP4 files found in $InputDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($videoFiles.Count) video file(s) to optimize:" -ForegroundColor Cyan
$videoFiles | ForEach-Object { Write-Host "  - $($_.FullName)" }

Write-Host ""
$confirm = Read-Host "Do you want to create optimized versions? (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Operation cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Starting optimization..." -ForegroundColor Cyan
Write-Host ""

$optimizedCount = 0
$totalOriginalSize = 0
$totalOptimizedSize = 0

foreach ($video in $videoFiles) {
    $originalSize = [math]::Round($video.Length / 1MB, 2)
    $totalOriginalSize += $originalSize
    
    $outputPath = $video.FullName -replace '\.mp4$', '-optimized.mp4'
    $outputPath = $outputPath -replace '\\', '\'
    
    Write-Host "Processing: $($video.Name) ($originalSize MB)..." -ForegroundColor Yellow
    
    # FFmpeg command for web optimization
    $ffmpegArgs = @(
        "-i", "`"$($video.FullName)`"",
        "-vf", "scale=$MaxWidth`:$MaxHeight`:force_original_aspect_ratio=decrease",
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", $Crf.ToString(),
        "-c:a", "aac",
        "-b:a", $AudioBitrate,
        "-movflags", "+faststart",
        "-y",
        "`"$outputPath`""
    )
    
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -NoNewWindow -Wait -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $outputPath)) {
        $optimizedSize = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
        $totalOptimizedSize += $optimizedSize
        $savings = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 1)
        
        Write-Host "  ✓ Optimized: $optimizedSize MB (saved $savings%)" -ForegroundColor Green
        $optimizedCount++
    } else {
        Write-Host "  ✗ Failed to optimize" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "=== Optimization Complete ===" -ForegroundColor Cyan
Write-Host "Processed: $optimizedCount / $($videoFiles.Count) files" -ForegroundColor Green
Write-Host "Original total size: $([math]::Round($totalOriginalSize, 2)) MB" -ForegroundColor Yellow
Write-Host "Optimized total size: $([math]::Round($totalOptimizedSize, 2)) MB" -ForegroundColor Green
Write-Host "Total savings: $([math]::Round($totalOriginalSize - $totalOptimizedSize, 2)) MB ($([math]::Round((($totalOriginalSize - $totalOptimizedSize) / $totalOriginalSize) * 100, 1))%)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review the optimized files (*-optimized.mp4)" -ForegroundColor White
Write-Host "2. Test them in your browser" -ForegroundColor White
Write-Host "3. If satisfied, replace originals with optimized versions" -ForegroundColor White
Write-Host "4. Update code references if filenames changed" -ForegroundColor White

