# ZHH Group Holding - Unified Design System

## 📋 Overview

This document outlines the unified design system for the ZHH Group Holding website. All pages must follow this system to ensure consistency across the entire site.

## 🎨 1. Global Layout System

### Container
```tsx
<div className="container-unified">
  {/* Content */}
</div>
```

- **Max Width**: 1320px
- **Padding**: 
  - Mobile: 20px
  - Tablet: 40px
  - Desktop: 60px

### Section Wrapper
```tsx
<section className="section-unified bg-unified-white">
  {/* Content */}
</section>
```

- **Spacing**: 
  - Mobile: 60px top/bottom
  - Desktop: 80px top/bottom

## 📝 2. Typography System

### Headings
```tsx
<h1 className="h1-unified text-primary">Title</h1>
<h2 className="h2-unified text-primary">Section Title</h2>
<h3 className="h3-unified text-primary">Subsection Title</h3>
<h4 className="h4-unified text-primary">Card Title</h4>
```

### Body Text
```tsx
<p className="body-large-unified text-secondary">Large body text</p>
<p className="body-regular-unified text-secondary">Regular body text</p>
<p className="body-small-unified text-secondary">Small body text</p>
```

### Section Title Wrapper
```tsx
<div className="section-title-wrapper">
  <h2 className="h2-unified text-primary">Section Title</h2>
  <p className="body-large-unified text-secondary">Description</p>
</div>
```

## 🎨 3. Color System

### Text Colors
- `text-primary` - #1A1A1A (Main headings)
- `text-secondary` - #4A4A4A (Body text)
- `text-tertiary` - #666666 (Secondary text)
- `text-teal` - #01B2B2 (Accent text)
- `text-gold` - #D4AF37 (Gold accent)

### Background Colors
- `bg-unified-white` - #FFFFFF
- `bg-unified-light` - #F5F5F5
- `bg-unified-off-white` - #F9F9F9
- `bg-unified-dark` - #032D46

## 🃏 4. Card System

```tsx
<div className="card-unified">
  {/* Card content */}
</div>
```

**Properties:**
- Padding: 24px (mobile) / 32px (desktop)
- Border Radius: 12px
- Shadow: Subtle shadow with hover effect
- Hover: Lifts up 4px with enhanced shadow

## 🖼️ 5. Image + Text Layout

```tsx
<div className="image-text-layout">
  <div className="content-wrapper">
    {/* Text content */}
  </div>
  <div className="image-wrapper">
    <img src="..." alt="..." />
  </div>
</div>
```

**Reverse Layout:**
```tsx
<div className="image-text-layout reverse">
  {/* Same structure */}
</div>
```

## 🔘 6. Button System

### Primary Button
```tsx
<a href="#" className="btn-primary-unified">Button Text</a>
```

### Secondary Button
```tsx
<a href="#" className="btn-secondary-unified">Button Text</a>
```

## ✅ 7. Feature List

```tsx
<ul className="feature-list-unified">
  <li className="body-regular-unified text-secondary">Feature 1</li>
  <li className="body-regular-unified text-secondary">Feature 2</li>
</ul>
```

## 📐 8. Spacing Utilities

- `mb-section` - Margin bottom for sections (40px)
- `mb-content` - Margin bottom for content (24px)
- `gap-unified` - Gap between items (24px)

## 🎯 9. Complete Page Template

```tsx
export default function ExamplePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-unified bg-unified-dark text-white">
        <div className="container-unified">
          <div className="section-title-wrapper">
            <h1 className="h1-unified text-white">Page Title</h1>
            <p className="body-large-unified text-white/80">Description</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <div className="section-title-wrapper">
            <h2 className="h2-unified text-primary">Section Title</h2>
            <p className="body-large-unified text-secondary">Description</p>
          </div>
          
          {/* Content */}
        </div>
      </section>
    </div>
  );
}
```

## ⚠️ Important Rules

1. **Always use unified classes** - Never use inline styles for spacing, colors, or typography
2. **Consistent spacing** - Use the spacing system (mb-section, mb-content, etc.)
3. **Same container** - Always use `container-unified` for page content
4. **Same section spacing** - Always use `section-unified` for sections
5. **Typography hierarchy** - Use h1-unified, h2-unified, etc. consistently
6. **Color consistency** - Use the color classes (text-primary, text-secondary, etc.)

## 🔄 Migration Checklist

When updating existing pages:

- [ ] Replace custom containers with `container-unified`
- [ ] Replace custom section padding with `section-unified`
- [ ] Replace custom headings with `h1-unified`, `h2-unified`, etc.
- [ ] Replace custom text with `body-regular-unified`, etc.
- [ ] Replace custom colors with unified color classes
- [ ] Replace custom cards with `card-unified`
- [ ] Replace custom buttons with `btn-primary-unified` or `btn-secondary-unified`
- [ ] Replace custom feature lists with `feature-list-unified`
- [ ] Remove all inline styles for spacing, colors, and typography

