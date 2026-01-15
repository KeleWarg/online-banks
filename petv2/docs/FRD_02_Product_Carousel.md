# Functional Requirements Document (FRD): Product Carousel Component

**Owner(s):** Kele Ibekwe
**Design:** [Design Lead]
**Engineering:** [Engineering Lead]
**Tracking:** [Analytics Lead]
**Publishing:** [Content Lead]
**Figma Link:** [To be added]
**Date:** 2025-01-10
**Version:** 1.0

---

## Overview

The purpose of this FRD is to outline the requirements for developing an interactive product carousel that showcases the top 5 pet insurance providers of 2025. This component serves as the primary product discovery interface on the pet insurance comparison page, presenting each provider with visual branding, category positioning, value propositions, and editorial credibility markers.

The carousel is designed with both desktop and mobile experiences in mind, featuring smooth horizontal scrolling, navigation controls, pagination indicators, and responsive card layouts. Each card follows a consistent design system while accommodating unique provider branding and pet imagery.

---

## Scope

This document covers the functional and non-functional requirements, user stories, technical specifications, and design guidelines for the Product Carousel Component.

**In Scope:**
- Carousel container with 5 insurance provider cards
- Card design with provider branding, categories, and descriptions
- Navigation controls (arrow buttons, pagination dots)
- Touch/swipe gestures for mobile
- Author attribution section
- Responsive layouts for all device sizes
- Smooth scroll animations
- Accessibility features

**Out of Scope:**
- Detailed provider pages (links only)
- Dynamic card addition via CMS (fixed to 5 cards initially)
- Video content within cards
- User reviews/ratings display
- Comparison checkboxes

---

## Functionality & Design

### User Stories

**As a Website Visitor**
- I want to quickly browse top insurance providers without scrolling the entire page
- I need clear visual differentiation between provider categories (Best Overall, Best for Wellness, etc.)
- I want to understand each provider's value proposition at a glance
- I need the carousel to work smoothly on my mobile device with touch gestures
- I want visual confirmation of which card I'm viewing via pagination

**As a Content Editor**
- I need to update provider descriptions and categories easily
- I want to mark providers as "Popular" with a badge
- I need to swap provider order based on editorial priorities
- I want to update provider logos and pet images
- I need to modify the expert reviewer attribution

**As a Business Stakeholder**
- I need to feature top-performing providers prominently
- I want to track which providers get the most engagement
- I need the carousel to load quickly and not impact page performance
- I want flexibility to A/B test card order
- I need the component to drive clicks to provider detail pages

**As a Mobile User**
- I want smooth swipe gestures to browse cards
- I need cards to be fully visible without overlapping
- I want navigation controls that don't obscure content
- I need the carousel to work in portrait and landscape modes

---

### Objectives, Scope, and Development

**Purpose**
The Product Carousel serves as the primary product discovery tool, showcasing curated insurance providers in an engaging, scannable format. By presenting key differentiators upfront, we reduce cognitive load and help users identify relevant options quickly.

**Scope**
- Full-width responsive carousel with 5 cards
- Individual card components with consistent structure
- Navigation system (arrows + pagination)
- Author/expert attribution section
- Performance optimizations for smooth scrolling

**Goals and KPIs**

**Goals:**
- Increase provider detail page views by 40%
- Reduce time-to-click on provider cards by highlighting key differentiators
- Improve mobile engagement through intuitive swipe navigation
- Build trust through expert reviewer attribution
- Create a memorable, branded experience

**KPIs:**
- Card click-through rate (target: >30%)
- Navigation method usage (arrows vs swipe vs dots)
- Average cards viewed per session (target: >3)
- Time spent on carousel (target: >20 seconds)
- Mobile vs desktop engagement rates
- "Popular" badge impact on clicks

---

## Features and Functional Requirements

### Component Architecture

The Product Carousel is organized into three hierarchical levels:

1. **Carousel Container** - Section wrapper with grid layout
2. **Card Collection** - Scrollable container with 5 product cards
3. **Navigation Controls** - Arrows, pagination, and author attribution

---

## Component Breakdown

### 1. Carousel Section Container

**Section Identifier:** best-pets-carousel

**Container Configuration:**
- **Background:** White (#FFFFFF)
- **Padding:**
  - Top: 32px (mobile), 48px (tablet), 56px (desktop)
  - Bottom: 24px (mobile), 32px (desktop)
- **Max Width:** 1440px
- **Min Width:** 378px
- **Margin:** 0 auto (centered)
- **Responsive Padding Horizontal:**
  - Mobile: 20px
  - Small: 24px
  - Medium: 32px
  - Large: 90px

---

### 2. Header Section

**Field Group Name:** Carousel Header

**2.1 Section Title**
- **Field Name:** Section Title
- **Type:** Single-line text
- **Font:** Work Sans, 700 (bold)
- **Font Sizes (Responsive):**
  - Mobile (378-639px): 32px
  - Small (640-767px): 32px
  - Medium (768-1023px): 32px
  - Large (1024px+): 40px
- **Line Heights:**
  - Mobile: 39px
  - Large: 48px
- **Color:** Black (#000000)
- **Character Limit:** 80 characters
- **Default Text:** "The Best Pet Insurance Plans of 2025"
- **Editable:** Yes (CMS)
- **Margin Bottom:** 8px

**2.2 Section Description**
- **Field Name:** Section Description
- **Type:** Multi-line text
- **Font:** Work Sans, 400 (normal)
- **Font Sizes:**
  - Mobile: 14px
  - Small: 16px
- **Line Height:** 1.6 (relative)
- **Color:** #606F7F (gray)
- **Character Limit:** 200 characters
- **Default Text:** "Understanding what each provider is best at is essential in choosing the best plan for your pet."
- **Editable:** Yes (CMS)
- **Margin Bottom:** 12px (mobile), 16px (tablet), 20px (desktop)

---

### 3. Scrollable Cards Container

**Field Group Name:** Cards Container

**Container Configuration:**
- **Display:** Flex row
- **Overflow-X:** Auto (horizontal scroll)
- **Overflow-Y:** Hidden
- **Gap:** 12px (mobile), 16px (tablet), 20px (desktop)
- **Scroll Behavior:** Smooth
- **Scrollbar:** Hidden (custom CSS)
  - `scrollbar-width: none` (Firefox)
  - `::-webkit-scrollbar { display: none }` (Chrome/Safari)
- **Touch Scrolling:** `-webkit-overflow-scrolling: touch`
- **Padding:** 24px vertical, 24px horizontal (for shadow visibility)
- **Margin:** -24px horizontal (negative to offset padding)
- **Snap Type:** x mandatory (CSS scroll snap)
- **Snap Align:** start

**Card Count:**
- Fixed: 5 cards
- Order (current):
  1. Card 4 (Pets Best)
  2. Card 6 (Figo)
  3. Card 3 (Chewy - Popular)
  4. Card 1 (Pets Best duplicate)
  5. Card 5 (Figo duplicate)
- Configurable: Yes (CMS can reorder)

---

### 4. Individual Product Card

**Field Group Name:** Product Card

Each card has a consistent structure with variable content.

**Card Configuration:**
- **Width:** 312px (fixed)
- **Min-Width:** 312px
- **Max-Width:** 312px
- **Min-Height:** 480px
- **Flex:** 0 0 auto (no grow/shrink)
- **Background:** #F8F8FA (light gray)
- **Border-radius:** 24px
- **Padding:** 12px 8px 8px (top, horizontal, bottom)
- **Position:** Relative (for absolute-positioned pet images)
- **Overflow:** Hidden
- **Scroll Snap Align:** start
- **Shadow:** 0px 2px 8px rgba(0,0,0,0.08)
- **Hover State (Desktop):**
  - Transform: scale(1.02)
  - Shadow: 0px 8px 24px rgba(0,0,0,0.12)
  - Transition: 300ms ease-in-out
- **Cursor:** Pointer

---

**Card Content Structure:**

**4.1 Popular Badge (Conditional)**

- **Field Name:** Popular Badge
- **Type:** Badge element
- **Display Condition:** isPopular === true
- **Position:** Absolute top-left
- **Coordinates:** Top 16px, Left 16px
- **Background:** Linear gradient (45deg, #FF6B6B 0%, #FF8E53 100%)
- **Color:** White
- **Font:** Work Sans, 12px, font-weight 600
- **Padding:** 6px 12px
- **Border-radius:** 16px
- **Text:** "POPULAR"
- **Z-index:** 10
- **Toggle:** Yes (per card in CMS)
- **Shadow:** 0px 2px 4px rgba(255, 107, 107, 0.3)

---

**4.2 Provider Category Badge**

- **Field Name:** Category Badge
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, font-weight 400, line-height 22px
- **Color:** Black (#000000)
- **Background:** White (#FFFFFF)
- **Padding:** 8px 12px
- **Border-radius:** 12px
- **Position:** Top of card content area
- **Alignment:** Center
- **Character Limit:** 40 characters
- **Line Break Support:** Yes (preserves \n)
- **Examples:**
  - "Best\noverall"
  - "Best for all-round\ncoverage"
  - "Best for\nwellness"
- **Editable:** Yes (CMS)
- **Shadow:** 0px 1px 3px rgba(0,0,0,0.1)
- **Margin Bottom:** 12px

---

**4.3 Provider Description**

- **Field Name:** Card Description
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, font-weight 400, line-height 24px
- **Color:** #606F7F (gray)
- **Character Limit:** 200 characters
- **Text Alignment:** Left
- **Padding:** 16px
- **Examples:**
  - "If you care about getting it right without over-optimizing, then this pick balances price, coverage, and support for a no-regrets choice."
  - "If you care about fewer exclusions and higher ceilings, then this plan offers high limits and options like dental/orthopedic."
- **Editable:** Yes (CMS)
- **Text Overflow:** Wrap with ellipsis if exceeds space
- **Margin Bottom:** 20px

---

**4.4 Provider Logo**

- **Field Name:** Provider Logo
- **Type:** Image upload
- **Position:** Bottom-left of card content
- **Max Dimensions:** 120px x 60px
- **Object-fit:** Contain
- **Alt Text:** "[Provider Name] logo"
- **Background:** White
- **Padding:** 8px
- **Border-radius:** 8px
- **Shadow:** 0px 2px 4px rgba(0,0,0,0.08)
- **Examples:**
  - /image-10-3.png (Pets Best)
  - /LogoFigo.png (Figo)
  - /LogoChewy.png (Chewy)
- **Editable:** Yes (CMS upload)

---

**4.5 Pet Image (Optional)**

- **Field Name:** Pet Image
- **Type:** Image upload
- **Position:** Absolute (varies per card design)
- **Display:** Conditional (can be toggled off)
- **Object-fit:** Cover
- **Z-index:** 5 (behind badge, above background)
- **Alt Text:** "[Pet type] image"

**Position Configurations (per card):**

| Card | Pet Image Source | Position Classes | Dimensions |
|------|-----------------|-----------------|-----------|
| Pets Best | /shutterstock-2324170407-1.png | Top: -10px, Left: 206px | 106x146px |
| Figo | /Dog2.png | Top: -10px, Left: 206px | 106x146px |
| Chewy | /shutterstock-2397244269.png | Top: 4px, Right: 8px | 85x91px |
| Duplicate 1 | /shutterstock-2324170407-1-2.png | Top: -10px, Left: 206px | 106x146px |
| Duplicate 2 | /Dog2.png | Top: -10px, Left: 206px | 106x146px |

- **Editable:** Yes (upload + position adjustments in CMS)
- **Toggle:** Yes (can hide pet images globally)
- **Note:** Current implementation allows hiding via CSS class

---

**4.6 Card Click Target**

- **Behavior:** Entire card is clickable
- **Link Type:** Internal (React Router Link)
- **Destination:** Provider detail page (e.g., /providers/pets-best)
- **Link Field Name:** Detail Page URL
- **Character Limit:** 100 characters
- **Editable:** Yes (CMS)
- **Tracking:** Click event fires with provider name
- **Accessibility:** ARIA label: "View details for [Provider Name]"

---

### 5. Navigation Controls

**Field Group Name:** Carousel Navigation

Navigation consists of three elements: left arrow, pagination dots, right arrow.

---

**5.1 Arrow Buttons**

**Left Arrow Button:**
- **Field Name:** Previous Button
- **Type:** Icon button
- **Icon:** ChevronLeft (Lucide React)
- **Icon Size:** 20px (mobile), 24px (desktop)
- **Button Size:** 40px (mobile), 50px (desktop) - circle
- **Background:** #F4F5F8 (light gray)
- **Color:** Black (#000000)
- **Border:** None
- **Border-radius:** 50% (circle)
- **Backdrop Filter:** blur(12px) brightness(100%)
- **Position:** Left side of navigation group
- **Disabled State:**
  - Condition: currentIndex === 0
  - Opacity: 0.5
  - Cursor: not-allowed
  - No hover effects
- **Enabled Hover:**
  - Background: #E0E0E0
  - Color: White
  - Transition: 200ms ease
- **Click Behavior:**
  - Scrolls carousel left by CARD_WIDTH (332px including gap)
  - Decrements currentIndex
  - Smooth scroll animation

**Right Arrow Button:**
- Same configuration as Left Arrow
- **Icon:** ChevronRight (Lucide React)
- **Position:** Right side of navigation group
- **Disabled State:**
  - Condition: currentIndex >= maxScrollIndex
  - maxScrollIndex = TOTAL_CARDS - cards visible on screen
- **Click Behavior:**
  - Scrolls carousel right by CARD_WIDTH
  - Increments currentIndex
  - Smooth scroll animation

---

**5.2 Pagination Dots**

**Container Configuration:**
- **Display:** Inline-flex
- **Height:** 40px (mobile), 50px (desktop)
- **Padding:** 12px 16px
- **Background:** #F4F5F8 (light gray)
- **Border-radius:** 40px (pill shape)
- **Gap:** 8px between dots
- **Backdrop Filter:** blur(12px) brightness(100%)
- **Position:** Center of navigation group

**Dot Configuration:**
- **Count:** 5 dots (one per card)
- **Size:** 6px (mobile), 8px (desktop) - circle
- **Border-radius:** 50%
- **Active Dot:**
  - Background: Black (#000000)
- **Inactive Dot:**
  - Background: #D1D5DB (light gray)
- **Transition:** Background-color 300ms ease
- **Click Behavior:** Not clickable (visual indicator only)

**Dot State Logic:**
- Active dot index = currentIndex
- Updates on scroll or arrow click
- Smooth color transition

---

**5.3 Navigation Container**

**Container Configuration:**
- **Display:** Flex row
- **Justify:** Space-between (on mobile/tablet), Center (on desktop)
- **Align:** Center
- **Gap:** 12px (mobile), 16px (desktop)
- **Padding:** 16px 0
- **Margin Top:** 24px (after carousel)
- **Responsive Layout:**
  - Mobile: Stack vertically if needed
  - Tablet: Horizontal row
  - Desktop: Horizontal row, centered

---

### 6. Author Attribution Section

**Field Group Name:** Author Attribution

Located below the navigation controls, provides editorial credibility.

---

**6.1 Writer Profile**

**Container Configuration:**
- **Display:** Flex row
- **Align:** Center
- **Gap:** 12px
- **Padding:** 22px vertical
- **Border-top:** 1px solid #E5E7EB
- **Margin-top:** 24px

**Author Avatar:**
- **Field Name:** Author Image
- **Type:** Image upload
- **Dimensions:** 40x40px (circle)
- **Border-radius:** 50%
- **Object-fit:** Cover
- **Alt Text:** "[Author Name] headshot"
- **Default Source:** https://placehold.co/40x40 (placeholder)
- **Editable:** Yes (CMS upload)

**Author Name:**
- **Field Name:** Author Name
- **Type:** Single-line text
- **Font:** Work Sans, 16px, font-weight 600, line-height 26px
- **Color:** #333333 (dark gray)
- **Text Decoration:** Underline
- **Character Limit:** 50 characters
- **Default Text:** "Dr. Maya Chen, DVM"
- **Editable:** Yes (CMS)
- **Link:** Optional (links to author bio page)

**Author Title:**
- **Field Name:** Author Title
- **Type:** Single-line text
- **Font:** Work Sans, 14px, font-weight 400, line-height 24px
- **Color:** #333333
- **Character Limit:** 60 characters
- **Default Text:** "Emergency Veterinarian"
- **Editable:** Yes (CMS)
- **Display:** Below author name

---

**6.2 Data Verification Statement**

**Container Configuration:**
- **Margin-top:** 24px
- **Padding-top:** 0
- **Border:** None

**Statement Text:**
- **Field Name:** Data Verified Statement
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, font-weight 400, line-height 26px
- **Color:** #383C43 (dark gray)
- **Character Limit:** 150 characters
- **Default Text:** "Data Verified: Oct 2025 | Source: Forbes Advisor proprietary analysis"
- **Editable:** Yes (CMS)
- **Supports:** Bold formatting for date and source
- **Alignment:** Left

---

### 7. Carousel Behavior & Interaction

**7.1 Scroll Mechanics**

**Desktop Scroll:**
- **Method:** Arrow button clicks
- **Distance:** One full card width (332px)
- **Animation:** Smooth scroll (CSS: scroll-behavior: smooth)
- **Duration:** ~400ms
- **Easing:** Ease-out

**Mobile/Touch Scroll:**
- **Method:** Touch drag (native browser scroll)
- **Snap Points:** Each card aligns to left edge
- **Momentum:** Native iOS/Android momentum scrolling
- **Bounce:** Native browser bounce effect
- **Friction:** Native (adjustable via CSS if needed)

**Keyboard Navigation:**
- **Left Arrow Key:** Scroll to previous card
- **Right Arrow Key:** Scroll to next card
- **Tab Key:** Focus navigation buttons
- **Enter Key:** Activate focused button
- **Home Key:** Scroll to first card
- **End Key:** Scroll to last card

---

**7.2 Current Index Tracking**

**State Management:**
- **Hook:** useCarousel custom hook
- **State:** currentIndex (0-based)
- **Initial Value:** 0 (first card)
- **Update Triggers:**
  - Arrow button clicks
  - Touch scroll (via scroll event listener)
  - Direct dot clicks (if implemented)

**Scroll Event Listener:**
- **Listens to:** Carousel container scroll event
- **Throttle:** 100ms (debounced for performance)
- **Calculation:**
  ```
  currentIndex = Math.round(scrollLeft / CARD_WIDTH)
  ```
- **Updates:** Pagination dots, button disabled states

**Max Scroll Index:**
- **Calculation:**
  ```
  maxScrollIndex = TOTAL_CARDS - cardsVisibleOnScreen
  ```
- **Cards Visible Calculation:**
  ```
  cardsVisible = Math.floor(containerWidth / CARD_WIDTH)
  ```
- **Usage:** Determines when right arrow should be disabled

---

**7.3 Auto-Scroll (Optional Future Feature)**

- **Enabled:** No (current implementation)
- **Interval:** N/A
- **Pause on Hover:** N/A
- **Resume on Mouse Leave:** N/A
- **Future Consideration:** Add toggle in CMS

---

### 8. Responsive Design Specifications

**Breakpoint Behavior:**

**Mobile (378-639px):**
- **Cards Visible:** 1 card + 20% of next card
- **Card Width:** 312px (fixed)
- **Padding Horizontal:** 20px
- **Gap:** 12px
- **Navigation:**
  - Arrow size: 40px
  - Dot size: 6px
  - Stack author section vertically if needed
- **Scroll:** Touch drag primary method
- **Hover Effects:** Disabled

**Small Tablet (640-767px):**
- **Cards Visible:** 1.5-2 cards
- **Card Width:** 312px (fixed)
- **Padding Horizontal:** 24px
- **Gap:** 16px
- **Navigation:** Same as mobile but slightly larger
- **Scroll:** Touch or arrow buttons

**Tablet (768-1023px):**
- **Cards Visible:** 2-2.5 cards
- **Card Width:** 312px (fixed)
- **Padding Horizontal:** 32px
- **Gap:** 20px
- **Navigation:** Desktop-sized buttons
- **Hover Effects:** Enabled

**Desktop (1024px+):**
- **Cards Visible:** 3 cards fully visible
- **Card Width:** 312px (fixed)
- **Container Max Width:** 1440px
- **Padding Horizontal:** 90px
- **Gap:** 20px
- **Navigation:** Full desktop size
- **Hover Effects:** Enabled with all animations

**Large Desktop (1440px+):**
- **Cards Visible:** 3+ cards
- **Container:** Centered with max-width constraint
- **All cards may be visible:** Arrows disabled if all visible

---

### 9. Performance Optimizations

**Lazy Loading:**
- **Current Implementation:** Lazy loading via React.lazy()
- **Module:** BestPetsCarousel wrapped in Suspense
- **Fallback:** Loading message (customizable)
- **Trigger:** On viewport intersection (loaded when user scrolls near)

**Image Optimization:**
- **Format:** Use WebP with JPEG fallback
- **Compression:** 80% quality
- **Sizes:** Provide srcset for different screen densities
- **Lazy Load:** Use loading="lazy" attribute
- **Dimensions:** Explicit width/height to prevent layout shift

**Scroll Performance:**
- **CSS:** `will-change: transform` on cards
- **GPU Acceleration:** `transform: translateZ(0)`
- **Scroll Listener:** Passive event listener
- **Debounce:** Scroll calculations throttled to 100ms

**Bundle Size:**
- **Target:** <30KB gzipped for carousel component
- **Icons:** Import only used icons from Lucide
- **CSS:** Purge unused Tailwind classes

---

### 10. Accessibility Requirements

**ARIA Labels:**
- Section: `aria-label="Best pet insurance plans carousel"`
- Navigation: `role="navigation"` with `aria-label="Carousel navigation"`
- Cards: `role="group"` with `aria-labelledby="[card title]"`
- Arrows: `aria-label="Previous/Next card"` with `aria-disabled` state
- Pagination: `role="status"` with `aria-live="polite"` for screen reader updates

**Keyboard Navigation:**
- All interactive elements reachable via Tab
- Arrow keys functional
- Focus indicators visible (2px blue outline)
- Logical tab order (header → cards → navigation → author)

**Screen Reader Support:**
- Card content structure (heading hierarchy)
- Image alt text descriptive
- "Popular" badge announced
- Current slide number announced on scroll
  - "Slide 2 of 5, Figo - Best for all-round coverage"

**Focus Management:**
- Focus trap not required (component doesn't modal)
- Focus visible on all interactive elements
- Skip links not required (standard page nav handles)

**Color Contrast:**
- All text meets WCAG AA (4.5:1 minimum)
- Button icons meet contrast requirements
- Popular badge: verify contrast (orange on white)

**Motion Reduction:**
- Respect `prefers-reduced-motion`
- Disable smooth scroll animations if preferred
- Disable hover scale effects if preferred

---

## CMS Integration

**Editable Fields (via CMS):**

1. **Section Header**
   - Title (80 char limit)
   - Description (200 char limit)

2. **Per Card (5 Cards):**
   - Provider Name (50 char)
   - Category Badge text (40 char, multiline supported)
   - Description (200 char)
   - Logo image (upload, 120x60px max)
   - Pet image (upload, dimensions vary)
   - Pet image position (dropdown: top-left, top-right, bottom-left, bottom-right)
   - "Popular" badge toggle (boolean)
   - Detail page URL (100 char)
   - Display order (drag-and-drop reordering)

3. **Author Section:**
   - Author name (50 char)
   - Author title (60 char)
   - Author image (upload, 40x40px circle crop)
   - Author bio link (optional URL)
   - Data verification statement (150 char)

**Global Toggles:**
- Enable/disable entire carousel
- Enable/disable pet images globally
- Enable/disable popular badges globally
- Enable/disable author section

**Card Management:**
- Minimum cards: 3
- Maximum cards: 8 (current: 5)
- Add new card: Duplicate template
- Delete card: Confirm dialog
- Reorder: Drag-and-drop interface

---

## Tracking & Analytics

**Event Tracking Requirements:**

**Widget Identifier:**
- All events tagged with: `widgetName: "product_carousel"`

**Events to Track:**

1. **Carousel Viewed**
   - Event: `carousel_viewed`
   - Properties:
     - `cards_count`: 5
     - `viewport_width`: pixels
     - `device_type`: "mobile" | "tablet" | "desktop"

2. **Card Viewed**
   - Event: `card_viewed`
   - Properties:
     - `provider_name`: provider name
     - `card_position`: 1-5
     - `is_popular`: boolean
     - `view_method`: "scroll" | "arrow_click"

3. **Card Clicked**
   - Event: `card_clicked`
   - Properties:
     - `provider_name`: provider name
     - `card_position`: 1-5
     - `category`: category text
     - `is_popular`: boolean
     - `time_to_click`: seconds from carousel view

4. **Navigation Used**
   - Event: `navigation_clicked`
   - Properties:
     - `navigation_type`: "left_arrow" | "right_arrow"
     - `from_index`: previous card index
     - `to_index`: new card index
     - `device_type`: "mobile" | "tablet" | "desktop"

5. **Swipe Gesture**
   - Event: `carousel_swiped`
   - Properties:
     - `direction`: "left" | "right"
     - `from_index`: starting card
     - `to_index`: ending card
     - `device_type`: (mobile only)

6. **Author Link Clicked**
   - Event: `author_clicked`
   - Properties:
     - `author_name`: author name
     - `link_type`: "name" | "image"

**Engagement Metrics:**
- Average cards viewed per session
- Click-through rate by card position
- Popular badge impact on CTR
- Mobile swipe vs desktop arrow usage
- Time spent on carousel section

---

## Technical SEO and Performance

**SEO Requirements:**

1. **Structured Data:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "ItemList",
     "itemListElement": [
       {
         "@type": "ListItem",
         "position": 1,
         "name": "Pets Best",
         "description": "Best overall pet insurance",
         "url": "https://example.com/providers/pets-best"
       }
     ]
   }
   ```

2. **Heading Hierarchy:**
   - Section title: H2
   - Card titles: H3
   - Maintain semantic structure

3. **Alt Text:**
   - Descriptive alt text for all images
   - Include provider name and context

4. **Link Optimization:**
   - Descriptive anchor text (not "click here")
   - Internal links to provider pages
   - No broken links

**Performance Targets:**

1. **Load Time:**
   - Initial carousel render: <500ms
   - Images: Lazy load below fold
   - Critical CSS inlined

2. **Core Web Vitals:**
   - LCP (Largest Contentful Paint): <2.5s
   - FID (First Input Delay): <100ms
   - CLS (Cumulative Layout Shift): <0.1
     - Reserve space for images (explicit dimensions)
     - Avoid layout shift on carousel load

3. **Bundle Size:**
   - Carousel component: <30KB gzipped
   - Images: Optimized WebP format
   - Icons: Tree-shaken from Lucide

4. **Rendering:**
   - Server-side rendering compatible (Next.js ready)
   - No blocking JavaScript for initial paint
   - Progressive enhancement approach

---

## Design System Specifications

**Color Palette:**

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Card Background | Light Gray | #F8F8FA | Card fill |
| Section Background | White | #FFFFFF | Section |
| Popular Badge BG | Gradient | #FF6B6B → #FF8E53 | Popular indicator |
| Category Badge BG | White | #FFFFFF | Badge background |
| Text Primary | Black | #000000 | Titles |
| Text Secondary | Dark Gray | #606F7F | Descriptions |
| Navigation BG | Light Gray | #F4F5F8 | Buttons, dots |
| Dot Active | Black | #000000 | Active indicator |
| Dot Inactive | Gray | #D1D5DB | Inactive dots |
| Border | Gray | #E5E7EB | Separators |

**Typography:**

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Section Title | Work Sans | 32-40px | 700 | 39-48px |
| Section Desc | Work Sans | 14-16px | 400 | 1.6 |
| Category Badge | Work Sans | 16px | 400 | 22px |
| Card Description | Work Sans | 16px | 400 | 24px |
| Author Name | Work Sans | 16px | 600 | 26px |
| Author Title | Work Sans | 14px | 400 | 24px |
| Data Statement | Work Sans | 16px | 400 | 26px |
| Popular Badge | Work Sans | 12px | 600 | 16px |

**Spacing:**
- Card gap: 12px (mobile), 16px (tablet), 20px (desktop)
- Section padding: 20px (mobile), 90px (desktop) horizontal
- Card padding: 12px 8px 8px
- Navigation gap: 12px (mobile), 16px (desktop)
- Margin between sections: 24px

**Shadows:**
- Card default: 0px 2px 8px rgba(0,0,0,0.08)
- Card hover: 0px 8px 24px rgba(0,0,0,0.12)
- Category badge: 0px 1px 3px rgba(0,0,0,0.1)
- Popular badge: 0px 2px 4px rgba(255, 107, 107, 0.3)

**Border Radius:**
- Card: 24px
- Category badge: 12px
- Popular badge: 16px
- Navigation buttons: 50% (circle)
- Navigation container: 40px (pill)

**Transitions:**
- Card hover: 300ms ease-in-out
- Button hover: 200ms ease
- Dot color change: 300ms ease
- Scroll: smooth (native)

---

## Dependencies

**Required Libraries:**
- React 18.2+
- TypeScript 4.9+
- Lucide React (ChevronLeft, ChevronRight icons)
- Tailwind CSS 3.4+

**Custom Hooks:**
- useCarousel (scroll tracking, index management)

**Browser Support:**
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

---

## Success Metrics

**Baseline Targets (First 3 Months):**
- Carousel view rate: 80% of page visitors
- Average cards viewed: 3.2 cards
- Card click-through rate: 30%
- Navigation method preference: 60% swipe, 40% arrows
- Mobile engagement: 65% of carousel interactions

**Growth Targets (6-12 Months):**
- Card CTR: 40%
- Average cards viewed: 4+ cards
- Popular badge CTR lift: 15% higher than non-badged
- Time on carousel: 30+ seconds
- Return to carousel (scroll back): 20% of users

---

## Appendix

### A. Card Data Schema

```typescript
interface InsurancePlan {
  provider: string             // Provider name
  category: string             // Category badge text (supports \n)
  description: string          // Card description
  logoSrc: string              // Path to logo image
  petImageSrc: string          // Path to pet image
  petImageClasses: string      // CSS classes for positioning
  isPopular: boolean           // Popular badge toggle
  detailPageUrl?: string       // Link to provider detail page
}
```

### B. Carousel Configuration

```typescript
const CAROUSEL_CONFIG = {
  CARD_WIDTH: 312,              // Fixed card width
  GAP: 20,                      // Gap between cards (desktop)
  TOTAL_CARDS: 5,               // Number of cards
  SCROLL_BEHAVIOR: 'smooth',    // CSS scroll behavior
  SNAP_TYPE: 'x mandatory',     // CSS scroll snap
  SNAP_ALIGN: 'start'           // Snap alignment
}
```

### C. useCarousel Hook Return Values

```typescript
{
  carouselRef: RefObject<HTMLDivElement>
  currentIndex: number
  scrollToNext: () => void
  scrollToPrev: () => void
  maxScrollIndex: number
  paginationDots: { bgClass: string }[]
}
```

---

**Document Version:** 1.0
**Last Updated:** 2025-01-10
**Next Review:** [To be scheduled]
**Approved By:** [Stakeholder names]

---

*This FRD serves as the single source of truth for the Product Carousel Component development. Any changes must be documented via version control with approval from product ownership.*
