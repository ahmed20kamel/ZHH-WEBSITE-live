# ZHH Group Holding Website - Developer Brief

## 📋 Overview

This document outlines the complete requirements for unifying the frontend design system and implementing a professional, consistent website matching the Mubadala-style design, based on the **ZHH NEW WEBSITE.pptx** presentation file.

---

## 🎯 Primary Focus: Home Page First

We will focus on completing the **Home Page** first, then apply the same system to all other pages.

---

## 1️⃣ Unified Layout & Design System

### 1.1 Typography System

**Requirements:**
- Same font family across all pages
- Consistent heading sizes (H1, H2, H3) everywhere
- Same paragraph text size
- Use CSS variables or a unified class system

**Implementation:**
- Use the unified design system classes: `h1-unified`, `h2-unified`, `h3-unified`, `body-regular-unified`
- All defined in `app/design-system.css`

### 1.2 Color System

**Requirements:**
- Same primary and secondary colors from the PPT file
- Consistent color usage across all pages
- Use CSS variables for easy updates

**Colors from PPT:**
- Primary Dark Blue: `#032D46`
- Primary Teal: `#01B2B2`
- Gold Accent: `#D4AF37`
- Text Primary: `#1A1A1A`
- Text Secondary: `#4A4A4A`

### 1.3 Spacing System

**Requirements:**
- Same top/bottom padding for all sections (80-100px)
- Same max-width for content (1320px, centered)
- Consistent gaps between elements

**Implementation:**
- Use `section-unified` class for sections
- Use `container-unified` class for containers
- Use spacing utilities: `mb-section`, `mb-content`, `gap-unified`

### 1.4 Buttons

**Requirements:**
- Unified button styles (size, border-radius, hover effects, font)
- Primary and Secondary button variants
- Consistent across all pages

**Implementation:**
- Use `btn-primary-unified` and `btn-secondary-unified` classes

---

## 2️⃣ Navbar - Fixed & Unified Across All Pages

### 2.1 Navbar Structure (Mubadala-style)

**Layout:**
- **Left Side:** Logo + "ZHH GROUP HOLDING" text
- **Right Side:** Language button (EN) + Search icon + Menu icon

**Requirements:**
- Fixed position (`position: fixed`)
- Always visible at the top
- Full width
- High z-index (stays above all content)
- Same appearance on ALL pages

### 2.2 Background Behavior

**Two Modes:**

1. **Transparent Mode:**
   - Used when page starts with hero image/video
   - White text and icons
   - No background

2. **Solid White Mode:**
   - Used for standard white pages
   - Dark text and icons
   - White background with subtle shadow

**Implementation:**
- Automatically detects if page has hero section
- Switches to solid when scrolled past hero
- Always solid for pages without hero

### 2.3 Reusable Component

**Requirements:**
- Single `<Header />` component
- Included in `RootLayout` (already done)
- Automatically appears on all pages
- No manual insertion needed

---

## 3️⃣ Fix Menu Duplication Issue

### 3.1 Menu Structure

**Left Column:**
- Main navigation titles (large):
  - WHO WE ARE
  - WHAT WE DO
  - OUR IMPACT
  - INVESTORS

**Right Column (when item clicked):**
- Submenu items appear **ONCE** below the active main item
- No duplication
- Clean, organized structure

### 3.2 Navigation Links

**WHO WE ARE:**
- About ZHH Group Holding
- A Journey of Excellence
- Board of Directors
- Our Structure

**WHAT WE DO:**
- ZHH Construction
- ZHH Real Estate
- ZHH General Trading
- Jewelust

**OUR IMPACT:**
- Overview
- Environment
- Community
- Responsible Gold

**INVESTORS:**
- For Investors
- Key Highlights
- Strategic Gold Mining Investments

### 3.3 Remove Duplication

**Requirements:**
- Each link appears only once
- No repeated text in different columns
- Clear visual hierarchy
- Active state indication

---

## 4️⃣ Apply PowerPoint Content to Home Page

### 4.1 Hero Section

**Background:**
- Current video background (keep as is)

**Text Content (from PPT):**
- **Title:** `ZHH Group Holding – Building a Legacy of Trust and Growth`
- **Subtitle:** `ZHH Group Holding is a sovereign-style Emirati investor managing a diversified portfolio.`
- **3 Stats:**
  - `AED 100M+` – Assets Under Management
  - `20+` – Years of Growth
  - `10+` – Countries of Operations

**Styling:**
- No blur effects
- No heavy shadows
- No gradient overlay that affects video clarity
- Clean white typography
- Subtle animations (fade-in, slide-up)

### 4.2 Key Highlights Section

**Title:** "Our Global Footprint in Numbers"

**8 Statistics:**
1. AED 100M+ AUM
2. 70+ Completed Projects
3. 12B+ AED Total Project Value
4. 300+ Direct Employees / 1,200+ Indirect
5. 1.2 Tons Gold Traded
6. 180+ Trade Contracts Executed
7. 24 Major Construction Projects
8. Presence in 10+ Countries

**Design:**
- White background
- Grid layout
- Counter animations
- Same typography and spacing

### 4.3 Private Equity Section

**3 Cards:**
1. **Private Equity Overview**
   - Strategic investments in UAE and global markets
   - Focus areas: Real Estate, Gold Mining, Global Trading

2. **Investment Strategy**
   - Target high-growth sectors
   - Governance & transparency
   - Regional expansion
   - Responsible, long-term value creation

3. **UAE Investments**
   - Premium residential & commercial
   - Dubai gold ecosystem

### 4.4 Our Portfolio (4 Divisions)

**4 Cards with Logos:**
1. **ZHH Construction**
   - Logo: `/assets/logos/zhh-construction-logo.svg`
   - Description: "Delivering sustainable, world-class infrastructure."

2. **ZHH Real Estate**
   - Logo: `/assets/logos/zhh-real-estate-logo.svg`
   - Description: "Creating long-term value through visionary real-estate projects."

3. **ZHH General Trading**
   - Logo: `/assets/logos/zhh-general-trading-logo.svg`
   - Description: "Connecting markets with transparency and compliance."

4. **Jewelust**
   - Logo: `/assets/logos/jewelust-logo.svg`
   - Description: "Where wealth becomes legacy. Responsible, transparent gold trading."

**Card Design:**
- Same border-radius (12px)
- Same padding (32px)
- Same hover effect (lift + shadow)
- Gold accent border on hover

### 4.5 Animations & Interactions

**Requirements:**
- Light, professional animations only
- Hover effects on cards
- Fade-in or slide-up when section appears in viewport
- No excessive animations (performance priority)

---

## 5️⃣ Unified Style for Internal Pages (Later)

After Home Page is complete, apply the same system to:
- Who We Are (About, Journey, Board, Structure)
- Our Portfolio (Construction, Real Estate, Trading, Jewelust)
- Our Impact
- Investors

**Same Elements:**
- Navbar
- Container
- Typography
- Buttons
- Spacing

---

## 📁 File Structure

```
components/
  ├── Header.tsx (Unified Navbar - already updated)
  ├── Hero.tsx (Hero Section - needs PPT content)
  ├── GlobalFootprintSection.tsx (Key Highlights - needs update)
  ├── PrivateEquitySection.tsx (3 Cards - needs update)
  ├── DivisionsSection.tsx (4 Cards - already has logos)
  └── ...

app/
  ├── design-system.css (Unified design system)
  ├── globals.css (Imports design-system.css)
  └── layout.tsx (Includes Header globally)
```

---

## ✅ Checklist

### Home Page
- [x] Unified Navbar (fixed, appears on all pages)
- [x] Design System CSS created
- [ ] Hero Section matches PPT content exactly
- [ ] Key Highlights section with 8 stats
- [ ] Private Equity 3 cards
- [ ] Portfolio 4 cards with logos
- [ ] Animations (light, professional)

### Menu
- [x] Fixed duplication issue
- [x] Clean structure (main items left, submenu appears below)
- [x] No repeated links

### Design System
- [x] Unified typography classes
- [x] Unified color system
- [x] Unified spacing system
- [x] Unified button styles
- [x] Unified card styles

---

## 🎨 Design Reference

**Primary Reference:** `ZHH NEW WEBSITE.pptx`

**Style Inspiration:** Mubadala.com

**Key Principles:**
- Clean, professional, corporate
- Consistent across all pages
- Premium feel
- Smooth animations
- Performance optimized

---

## 📝 Notes

- All text should be in English (no Arabic)
- Use the unified design system classes
- Ensure responsive design on all devices
- Test on multiple browsers
- Optimize for performance

---

## 🚀 Next Steps

1. Update Hero Section with exact PPT content
2. Ensure all sections use unified classes
3. Test menu functionality (no duplication)
4. Verify Navbar appears on all pages
5. Apply same system to internal pages

---

**Questions?** Refer to the PPT file or ask for clarification on any design element.

