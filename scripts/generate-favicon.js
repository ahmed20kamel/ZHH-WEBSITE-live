const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/assets/logos/ZHH Group Holding Logo.svg');
  const outputPath = path.join(__dirname, '../public/favicon.ico');
  
  try {
    // قراءة SVG وتحويله إلى PNG بمقاس 512x512
    const pngBuffer = await sharp(svgPath)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // إنشاء عدة مقاسات من PNG
    const sizes = [16, 32, 48, 64, 128, 256];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(svgPath)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    );
    
    // تحويل PNG إلى ICO
    const icoBuffer = await toIco(pngBuffers);
    
    // حفظ favicon.ico
    fs.writeFileSync(outputPath, icoBuffer);
    
    console.log('✅ تم إنشاء favicon.ico بنجاح في:', outputPath);
    console.log('📏 المقاس: 512×512 بكسل');
    
    // نسخ إلى app/ أيضاً (لـ Next.js App Router)
    const appFaviconPath = path.join(__dirname, '../app/favicon.ico');
    fs.copyFileSync(outputPath, appFaviconPath);
    console.log('✅ تم نسخ favicon.ico إلى:', appFaviconPath);
    
  } catch (error) {
    console.error('❌ خطأ في إنشاء favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
