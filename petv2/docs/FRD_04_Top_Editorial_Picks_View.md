# Functional Requirements Document (FRD): Top Editorial Picks View

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

The purpose of this FRD is to outline the requirements for developing an alternate full-page view that presents a curated, editorial selection of the top 3 pet insurance providers. This view serves as a streamlined alternative to the main article, offering users a focused comparison experience with quick navigation back to the full content.

The Top Editorial Picks View replaces the main article content when activated, providing a dedicated space for featured provider cards, tabbed comparison tables, and editorial context. The view emphasizes expert curation and data transparency while maintaining easy navigation back to the comprehensive article.

---

## Scope

This document covers the functional and non-functional requirements, user stories, technical specifications, and design guidelines for the Top Editorial Picks View.

**In Scope:**
- Full-page alternate view with smooth transitions
- Hero section with editorial context and metadata
- 3 featured provider cards with detailed descriptions
- Tabbed comparison table (Key Details, Pros & Cons, Additional Details)
- Back navigation (top button and sticky bottom button)
- Fade-in animations and scroll behavior
- Responsive design for all devices
- SEO-friendly alternate view structure

**Out of Scope:**
- More than 3 featured providers in initial release
- Interactive filtering/sorting of providers
- Side-by-side card comparison
- Persistent user selections across sessions
- Direct application forms (links to external sites only)

---

## Functionality & Design

### User Stories

**As a Time-Constrained User**
- I want a curated shortlist of top providers without reading the entire article
- I need clear editorial reasoning for why these providers were selected
- I want to quickly compare key details between the top picks
- I need an easy way to return to the full article if I want more information

**As a Mobile User**
- I want a dedicated view optimized for quick decision-making
- I need horizontal scrolling for provider cards to work smoothly
- I want the back button to be easily accessible at all times
- I need clear visual separation from the main article content

**As a Content Editor**
- I need to update which 3 providers are featured
- I want to modify editorial context and selection criteria
- I need to change provider descriptions specific to this view
- I want to update reviewer attribution and data sources

**As a Business Stakeholder**
- I need to track engagement with editorial picks vs full article
- I want to measure conversion rates from featured providers
- I need to understand user navigation patterns (when they go back)
- I want flexibility to A/B test different provider combinations

---

### Objectives, Scope, and Development

**Purpose**
The Top Editorial Picks View transforms the browsing experience from comprehensive to curated, serving users who prefer expert-selected options over exhaustive comparison. This focused approach reduces decision paralysis while maintaining transparency about selection methodology.

**Scope**
- Complete alternate page view with replace/restore logic
- Hero section with editorial metadata
- 3 provider cards with enhanced descriptions
- Tabbed comparison interface
- Dual navigation system (top and sticky bottom)
- Smooth transition animations

**Goals and KPIs**

**Goals:**
- Reduce time-to-decision for users overwhelmed by choices
- Increase conversion rates through focused presentation
- Build trust through transparent editorial selection
- Provide expert guidance without removing user autonomy
- Improve mobile experience with streamlined content

**KPIs:**
- View activation rate (clicks on "Top Editorial Picks" button): target >25%
- Time spent in picks view: target 45-90 seconds
- Conversion rate (Learn More clicks): target >35%
- Back to article rate: target 40% (indicates exploration)
- Tab engagement rate: target >60% view multiple tabs
- Mobile vs desktop usage patterns
- Featured provider click distribution

---

## Features and Functional Requirements

### Component Architecture

The Top Editorial Picks View is organized into hierarchical sections:

1. **View Container** - Full-page replacement with transition logic
2. **Navigation Elements** - Back buttons (top and sticky bottom)
3. **Hero Section** - Editorial context and metadata
4. **Provider Cards Section** - 3 featured cards with horizontal scroll
5. **Tabbed Comparison Section** - Comparison table with 3 tabs

---

## Component Breakdown

### 1. View Container & Transition Logic

**Container Configuration:**
- **Display:** Full-page view (replaces main article content)
- **Position:** Absolute positioning over main content
- **Z-index:** 20 (above main content, below modals)
- **Background:** White (#FFFFFF)
- **Min-height:** 100vh
- **Transition:** Fade-in 500ms ease-in-out

**State Management:**

**View States:**
```typescript
{
  showTopPicks: boolean         // Controls view visibility
  isTransitioning: boolean      // Prevents multiple rapid toggles
  isVisible: boolean            // Controls fade animation
}
```

**Activation Trigger:**
- Click "Top Editorial Picks" button from sticky bar
- Click "Top Editorial Picks" from quick dive section
- URL parameter: `?view=editorial-picks` (future enhancement)

**Deactivation Triggers:**
- Click "Back to Full Article" (top button)
- Click "Back to Article" (sticky bottom button)
- Browser back button (optional enhancement)

**Transition Behavior:**

**On Activation:**
1. Set `isTransitioning` = true
2. Scroll window to top smoothly (300ms)
3. Wait 300ms for scroll completion
4. Set `showTopPicks` = true
5. Set `showDiveIntoData` = false (if active)
6. Trigger fade-in animation (500ms)
7. Set `isTransitioning` = false
8. Set `isVisible` = true after 50ms delay

**On Deactivation:**
1. Set `isTransitioning` = true
2. Scroll window to top smoothly (300ms)
3. Wait 300ms for scroll completion
4. Set `showTopPicks` = false
5. Trigger fade-out animation (500ms)
6. Set `isTransitioning` = false
7. Restore main article view

**Animation CSS:**
```css
.fade-in {
  animation: fadeIn 500ms ease-in-out;
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### 2. Top Navigation Element

**Field Group Name:** Top Back Button

**Container Configuration:**
- **Position:** Relative (within flow)
- **Padding-top:** 160px (to clear header)
- **Padding-horizontal:** 16px (mobile), 24px (tablet), 90px (desktop)
- **Max-width:** 1440px
- **Margin:** 0 auto

**Back Button Configuration:**
- **Display:** Inline-flex
- **Align:** Center
- **Gap:** 4px
- **Cursor:** Pointer
- **Padding:** 8px 0
- **Background:** Transparent
- **Border:** None

**Back Icon:**
- **Type:** SVG arrow-left
- **Size:** 16x14px
- **Color:** #203468 (navy)
- **Stroke-width:** 2px
- **Position:** Left of text

**Button Text:**
- **Field Name:** Back Button Text
- **Type:** Single-line text
- **Font:** Work Sans, 14px, font-weight 400
- **Color:** #606F7F (gray)
- **Character Limit:** 30 characters
- **Default Text:** "Back to Full Article"
- **Editable:** Yes (CMS)

**Hover State:**
- Opacity: 0.7
- Transition: 200ms ease
- Icon: Subtle translateX(-2px) animation

**Click Behavior:**
- Triggers deactivation sequence
- Scrolls to top
- Restores main article view
- Tracks "back_navigation_clicked" event with source: "top_button"

---

### 3. Hero Section

**Field Group Name:** Editorial Picks Hero

**Container Configuration:**
- **Width:** 100%
- **Max-width:** 1080px
- **Margin:** 0 auto
- **Padding:** 16px (mobile), 24px (tablet), 32px (desktop)
- **Gap:** 40px (between subsections)

---

**3.1 Main Title**

- **Field Name:** Hero Title
- **Type:** Single-line text
- **Element:** H1
- **Font:** Work Sans, 700 (bold)
- **Font Sizes (Responsive):**
  - Mobile (378px): 20px
  - Small (640px): 24px
  - Medium (768px): 28px
  - Large (1024px): 32px
  - XLarge (1280px): 36px
  - XXLarge (1440px+): 40px
- **Line Heights:**
  - Mobile: 26px
  - Large: 44px
  - XXLarge: 48px
- **Color:** Black (#000000)
- **Character Limit:** 120 characters
- **Default Text:** "Editorial Picks: Best Pet Insurance Companies"
- **Margin-bottom:** 8px
- **Editable:** Yes (CMS)

---

**3.2 Hero Description**

- **Field Name:** Hero Description
- **Type:** Multi-line text
- **Font:** Georgia, 400, 18px
- **Line Height:** 29.12px
- **Color:** #333333 (dark gray)
- **Character Limit:** 600 characters
- **Margin-bottom:** 24px
- **Editable:** Yes (CMS)
- **Supports:** Bold, italic, line breaks

**Default Text:**
"Our team reviewed more than 900,000 pet insurance rates and surveyed 2,600 pet parents across 300 breeds to identify the best-performing providers for 2025. These companies stand out for consistency across coverage, customer satisfaction, and claims experience.

Use the tabs below to compare monthly costs, waiting periods, and plan details side-by-side."

---

**3.3 Reviewer Metadata**

**Container Configuration:**
- **Display:** Flex column
- **Gap:** 8px
- **Padding:** 16px 0
- **Border:** None

**Reviewed By Field:**
- **Field Name:** Reviewer Name
- **Type:** Single-line text
- **Font:** Work Sans, 16px, line-height 26px
- **Format:** "Reviewed by: [Name, Title]"
- **Color:** Black (#000000)
- **Character Limit:** 100 characters
- **Default:** "Reviewed by: Ashlee Valentine, Senior Staff Editor"
- **Bold:** "Reviewed by:" label only
- **Editable:** Yes (CMS)

**Data Source Field:**
- **Field Name:** Data Source
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, line-height 26px
- **Format:** "Data Source: [Description]"
- **Color:** Black (#000000)
- **Character Limit:** 200 characters
- **Default:** "Data Source: Forbes Advisor proprietary pricing and satisfaction analysis (Jan-Aug 2025)"
- **Bold:** "Data Source:" label only
- **Editable:** Yes (CMS)

---

**3.4 Separator Line**

- **Type:** Horizontal rule
- **Width:** 100%
- **Height:** 1px
- **Background:** #CED4DB (gray)
- **Margin:** 40px 0 (top and bottom)

---

### 4. Provider Cards Section

**Field Group Name:** Featured Provider Cards

**Container Configuration:**
- **Width:** 100%
- **Display:** Flex column
- **Gap:** 24px
- **Margin-bottom:** 40px

---

**4.1 Section Title**

- **Field Name:** Cards Section Title
- **Type:** Single-line text
- **Element:** H2
- **Font:** Work Sans, 700
- **Font Sizes (Responsive):** Same as Hero Title (20-40px)
- **Line Heights:** Same as Hero Title
- **Color:** Black (#000000)
- **Character Limit:** 80 characters
- **Default Text:** "Here Are The Picks By Our Editors"
- **Margin-bottom:** 24px
- **Editable:** Yes (CMS)

---

**4.2 Cards Container**

**Container Configuration:**
- **Width:** 100%
- **Display:** Flex row
- **Flex-wrap:** nowrap
- **Overflow-X:** Auto (horizontal scroll)
- **Overflow-Y:** Hidden
- **Gap:** 24px
- **Scroll Behavior:** Smooth
- **Scrollbar:** Hidden (CSS)
- **Touch Scrolling:** `-webkit-overflow-scrolling: touch`
- **Padding:** 0 (cards handle internal spacing)
- **Snap Type:** x mandatory (CSS scroll snap)

**Card Count:** 3 cards (fixed)

**Current Featured Providers:**
1. Pets Best - "Best overall"
2. Embrace - "Best for multi-pet"
3. Spot - "Best for healthy pets"

---

**4.3 Individual Provider Card**

**Card Configuration:**
- **Width:** 312px (fixed)
- **Min-width:** 312px
- **Max-width:** 312px
- **Min-height:** 480px
- **Flex:** 0 0 auto
- **Background:** #F8F8FA (light gray)
- **Border-radius:** 24px
- **Padding:** 12px 8px 8px
- **Position:** Relative
- **Overflow:** Hidden
- **Scroll Snap Align:** start

**Hover State (Desktop):**
- Transform: scale(1.05)
- Shadow: 0px 8px 24px rgba(0,0,0,0.15)
- Border: 1px solid #007AC8
- Transition: 300ms ease-in-out
- Cursor: pointer

---

**Card Content Structure:**

**A. Provider Name**
- **Field Name:** Provider Name
- **Type:** Single-line text
- **Font:** Work Sans, 16px, font-weight 400
- **Color:** Black (#000000)
- **Text Decoration:** Underline
- **Character Limit:** 50 characters
- **Margin-bottom:** 4px
- **Editable:** Yes (CMS)

**B. Category Badge**
- **Field Name:** Category Text
- **Type:** Single-line text (supports line breaks)
- **Font:** Work Sans, 20px, font-weight 600
- **Color:** Black (#000000)
- **Line Height:** 26px
- **Character Limit:** 40 characters
- **Format:** Supports "\n" for line breaks
- **Examples:**
  - "Best\noverall"
  - "Best for\nmulti-pet"
  - "Best for\nhealthy pets"
- **Margin-bottom:** 20px
- **Editable:** Yes (CMS)
- **Display:** pre-line (preserves line breaks)

**C. Card Description**
- **Field Name:** Card Description
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, font-weight 400
- **Line Height:** 24px
- **Color:** #606F7F (gray)
- **Character Limit:** 300 characters
- **Margin-bottom:** 12px
- **Editable:** Yes (CMS)

**Example Descriptions:**
- "Covers 90% of claims on average and starts coverage within 3 days for accidents and 14 for illness. A well-balanced pick that mixes reliability, fast reimbursement, and fair pricing if you want solid coverage without over-optimizing."
- "Offers 10% multi-pet discounts and flexible per-pet limits that scale with your coverage tier. Great for multi-animal households that want shared protection but individualized benefits."

**D. Bottom Section (CTA + Logo)**

**Container:**
- **Display:** Flex row
- **Justify:** Space-between
- **Align:** Center
- **Gap:** 56px
- **Margin-top:** Auto (pushes to bottom)

**Learn More Button:**
- **Width:** Auto
- **Height:** 48px
- **Padding:** 9px 16px
- **Background:** #007AC8 (primary blue)
- **Border-radius:** 8px
- **Border:** None
- **Font:** Work Sans, 18px, font-weight 600
- **Color:** White (#FFFFFF)
- **Text:** "Learn More"
- **Cursor:** Pointer
- **Hover (Desktop):**
  - Background: #006bb3 (darker blue)
  - Scale: 1.05
  - Border: 1px solid #007AC8
  - Transition: 200ms
- **Click Behavior:**
  - Links to provider detail page or external URL
  - Opens in new tab
  - Tracks "featured_provider_clicked" event

**Provider Logo Container:**
- **Width:** 80px
- **Height:** 80px
- **Background:** White (#FFFFFF)
- **Border-radius:** 8px
- **Shadow:** 0px 8px 16px -3px rgba(0, 0, 0, 0.10)
- **Display:** Flex
- **Justify:** Center
- **Align:** Center

**Provider Logo Image:**
- **Field Name:** Provider Logo
- **Type:** Image upload
- **Max Size:** 64x64px
- **Object-fit:** Contain
- **Alt Text:** "[Provider Name] logo"
- **Editable:** Yes (CMS)

**Current Logos:**
- Pets Best: /image-10-3.png
- Embrace: /EmbraceIcon.png
- Spot: /SpotIcon.png

---

**4.4 Separator Line**

- **Type:** Horizontal rule
- **Width:** 100%
- **Height:** 1px
- **Background:** #CED4DB
- **Margin:** 40px 0

---

### 5. Tabbed Comparison Section

**Field Group Name:** Comparison Tabs

**Section Configuration:**
- **Width:** 100%
- **Display:** Flex column
- **Gap:** 40px
- **Padding-bottom:** 80px (space for sticky button)

---

**5.1 Section Title**

- **Field Name:** Comparison Section Title
- **Type:** Single-line text
- **Element:** H2
- **Font:** Work Sans, 700
- **Font Sizes:** Same as hero title (20-40px responsive)
- **Color:** Black (#000000)
- **Character Limit:** 100 characters
- **Default Text:** "Summary of the Best Pet Insurance Companies"
- **Margin-bottom:** 8px
- **Editable:** Yes (CMS)

---

**5.2 Section Description**

- **Field Name:** Comparison Description
- **Type:** Single-line text
- **Font:** Work Sans, 16px, font-weight 400
- **Line Height:** 26px
- **Color:** #606F7F (gray)
- **Character Limit:** 200 characters
- **Default Text:** "Understanding what each provider is best at is essential in choosing the best plan for your pet."
- **Margin-bottom:** 24px
- **Editable:** Yes (CMS)

---

**5.3 Tab Navigation**

**Container Configuration:**
- **Width:** 100%
- **Max-width:** 965px
- **Display:** Flex row
- **Flex-wrap:** Wrap
- **Gap:** 8px
- **Overflow:** Hidden
- **Margin-bottom:** 24px

**Tab Count:** 3 tabs

**Tab Configurations:**

| Tab ID | Label | Default Active |
|--------|-------|----------------|
| key-details | Key Details | Yes |
| pros-cons | Pros & Cons | No |
| additional | Additional Details | No |

---

**Individual Tab Button:**

**Active State:**
- **Height:** 56px
- **Padding:** 16px horizontal, 8px vertical
- **Background:** Black (#000000)
- **Border-radius:** 40px
- **Shadow:** 0px 4px 8px -1px rgba(0,0,0,0.10)
- **Font:** Work Sans, 16px, font-weight 600
- **Color:** White (#FFFFFF)
- **Line Height:** 15px
- **Text Align:** Center
- **Cursor:** Pointer

**Inactive State:**
- **Height:** 56px
- **Padding:** 16px horizontal
- **Background:** #FAFAFB (very light gray)
- **Border-radius:** 28px
- **Shadow:** 0px 0px 0.5px rgba(0, 0, 0, 0.11) inset
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** #1D1D1F (dark gray)
- **Line Height:** 20px
- **Text Align:** Center
- **Cursor:** Pointer

**Hover State (Inactive):**
- Background: Lighten to #F0F0F0
- Transition: 200ms ease

**Click Behavior:**
- Sets active tab to clicked tab ID
- Updates table content below
- Smooth transition (200ms)
- Tracks "tab_clicked" event with tab name

**Tab Labels:**
- **Tab 1:** "Key Details" (editable, 20 char limit)
- **Tab 2:** "Pros & Cons" (editable, 20 char limit)
- **Tab 3:** "Additional Details" (editable, 30 char limit)

---

**5.4 Comparison Table**

**Table Configuration:**
- **Width:** 100%
- **Display:** Table
- **Table-layout:** Fixed
- **Border-collapse:** Separate
- **Border-spacing:** 0
- **Min-width:** 800px (requires horizontal scroll on mobile)
- **Background:** White

**Current Tab Content:** Key Details (Cost Comparison)

**Columns:**

| Column | Header | Width | Data Type |
|--------|--------|-------|-----------|
| 1 | Provider | 25% | String (sticky) |
| 2 | Average Monthly for Dogs | 30% | Currency |
| 3 | Average Monthly for Cats | 30% | Currency |
| 4 | Apply Now | 15% | Link |

**Table Header:**
- **Background:** #ECF1FF (light blue)
- **Border-radius:** 8px (top-left) and 16px (top-right)
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** Black (#000000)
- **Padding:** 12px 16px

**Table Rows:**
- **Background:** Alternating white and #FAFBFC
- **Padding:** 16px per cell
- **Font:** Work Sans, 14px, font-weight 400 (provider bold 600)
- **Hover:** Background #F9FAFB
- **Transition:** 200ms ease

**Provider Column (Sticky):**
- **Position:** Sticky left 0
- **Background:** Inherits row color
- **Font-weight:** 600
- **Z-index:** 5

**Apply Now Links:**
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** #007AC8
- **Text-decoration:** Underline
- **Hover:** Color #005a8a
- **Target:** _blank
- **Rel:** noopener noreferrer

**Data Source:** Same as main comparison tables (from insurance-providers.ts)

---

**Tab Content Variations:**

**Key Details Tab:**
- Shows cost comparison table (current implementation)

**Pros & Cons Tab (Future):**
- Shows pros and cons for each provider
- Bullet lists with green (pros) and red (cons) indicators

**Additional Details Tab (Future):**
- Shows plan details (waiting periods, restrictions, etc.)
- Multi-column layout similar to main tables

---

### 6. Sticky Bottom Navigation

**Field Group Name:** Sticky Back Button

**Display Conditions:**
- Shows when user scrolls down >100px
- Hidden when scrolled to top (<50px)
- Always visible in view, never obscured

**Container Configuration:**
- **Position:** Fixed
- **Bottom:** 24px
- **Left:** 50%
- **Transform:** translateX(-50%) (centered)
- **Z-index:** 50
- **Transition:** All 300ms ease

**Visibility States:**

**Visible State:**
- Transform: translateY(0)
- Opacity: 1

**Hidden State:**
- Transform: translateY(200%)
- Opacity: 0

---

**Button Configuration:**
- **Width:** Auto (content-based)
- **Height:** Auto
- **Padding:** 8px 16px
- **Background:** Black (#000000)
- **Border-radius:** 48px (pill)
- **Shadow:** 0px 4px 20px rgba(0, 0, 0, 0.15)
- **Display:** Inline-flex
- **Align:** Center
- **Justify:** Center
- **Gap:** 10px
- **Cursor:** Pointer

**Button Text:**
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** White (#FFFFFF)
- **Line Height:** 24px
- **Text:** "Back to Article"
- **Editable:** Yes (CMS)

**Button Icon:**
- **Source:** /arrow-down.svg
- **Size:** 20x20px
- **Color:** White (in SVG)
- **Position:** Right of text

**Hover State:**
- Scale: 1.05
- Shadow: 0px 6px 24px rgba(0, 0, 0, 0.2)
- Transition: 200ms ease

**Click Behavior:**
- Triggers deactivation sequence
- Tracks "back_navigation_clicked" event with source: "sticky_button"

**Scroll Detection:**

**Show Trigger:**
- window.scrollY > 100px

**Hide Trigger:**
- window.scrollY < 50px

**Implementation:**
- Scroll event listener with passive: true
- Debounced to 100ms for performance
- Updates state to control visibility

---

### 7. Responsive Design Specifications

**Desktop (1024px+):**
- Hero: Max-width 1080px, centered
- Cards: 3 visible side-by-side (with horizontal scroll)
- Card hover effects: Enabled
- Table: May require minimal scroll for wider data
- Sticky button: Shows on scroll

**Tablet (768-1023px):**
- Hero: Padding reduced to 24px
- Cards: 2-2.5 visible, horizontal scroll
- Font sizes: Slightly reduced (36px title)
- Table: Horizontal scroll required
- Navigation: Same as desktop

**Mobile (378-767px):**
- Hero: Padding 16px
- Title: 20-28px responsive scaling
- Cards: 1 card + partial next visible
- Card width: 312px fixed
- Horizontal scroll: Primary navigation
- Table: Full horizontal scroll
- Sticky button: Slightly smaller
- Back button: Full width on very small screens

**Touch Optimization:**
- Cards: Swipe gestures for scrolling
- Tabs: Minimum 44px tap target
- Buttons: Minimum 48px height
- Scroll momentum: Native browser behavior

---

### 8. Animation Specifications

**View Enter Animation:**
- **Name:** fadeIn
- **Duration:** 500ms
- **Easing:** ease-in-out
- **Delay:** 50ms (after state change)
- **From:** opacity 0, translateY(20px)
- **To:** opacity 1, translateY(0)

**View Exit Animation:**
- **Name:** fadeOut
- **Duration:** 500ms
- **Easing:** ease-in-out
- **From:** opacity 1
- **To:** opacity 0

**Card Hover Animation:**
- **Properties:** transform, box-shadow, border
- **Duration:** 300ms
- **Easing:** ease-in-out

**Tab Switch Animation:**
- **Properties:** background, color, box-shadow
- **Duration:** 200ms
- **Easing:** ease

**Sticky Button Slide:**
- **Properties:** transform, opacity
- **Duration:** 300ms
- **Easing:** ease

---

### 9. State Management

**View State:**
```typescript
interface TopPicksViewState {
  showTopPicks: boolean           // View active
  isTransitioning: boolean        // Prevents double-click
  isVisible: boolean              // Controls fade animation
  activeTab: string               // Current tab ID
  showStickyButton: boolean       // Scroll-based visibility
}
```

**Initial State:**
- showTopPicks: false
- isTransitioning: false
- isVisible: false
- activeTab: 'key-details'
- showStickyButton: false

**State Transitions:**
- All state changes trigger appropriate animations
- Scroll state managed via event listeners
- Tab state persists during view session
- Reset on view deactivation

---

## CMS Integration

**Editable Fields:**

**Hero Section:**
1. Hero Title (120 char)
2. Hero Description (600 char, rich text)
3. Reviewer Name (100 char)
4. Data Source (200 char)

**Provider Cards (3 cards):**
5. Provider Name (50 char)
6. Category Badge (40 char, line breaks supported)
7. Card Description (300 char)
8. Provider Logo (image upload)
9. Learn More URL (200 char)
10. Card Display Order (drag-and-drop)

**Comparison Section:**
11. Section Title (100 char)
12. Section Description (200 char)
13. Tab Labels (3 labels, 20-30 char each)

**Navigation:**
14. Top Back Button Text (30 char)
15. Sticky Back Button Text (20 char)

**Global Toggles:**
- Enable/disable entire view
- Enable/disable sticky button
- Enable/disable specific tabs
- Show/hide provider cards

**Data Management:**
- Provider data: Linked to main insurance-providers.ts
- Updates propagate to all views
- Independent URL management per card

---

## Tracking & Analytics

**Event Tracking Requirements:**

**Widget Identifier:**
- All events tagged with: `widgetName: "top_editorial_picks_view"`

**Events to Track:**

1. **View Activated**
   - Event: `picks_view_opened`
   - Properties:
     - `entry_point`: "sticky_bar" | "quick_dive"
     - `page_scroll_depth`: percentage
     - `time_on_main_article`: seconds

2. **Provider Card Viewed**
   - Event: `picks_card_viewed`
   - Properties:
     - `provider_name`: provider
     - `card_position`: 1-3
     - `view_method`: "scroll" | "initial_load"

3. **Learn More Clicked**
   - Event: `picks_learn_more_clicked`
   - Properties:
     - `provider_name`: provider
     - `card_position`: 1-3
     - `time_to_click`: seconds from view open

4. **Tab Clicked**
   - Event: `picks_tab_clicked`
   - Properties:
     - `tab_name`: tab identifier
     - `from_tab`: previous tab
     - `time_in_view`: seconds

5. **Apply Now Clicked**
   - Event: `picks_apply_clicked`
   - Properties:
     - `provider_name`: provider
     - `provider_position`: table row
     - `active_tab`: current tab

6. **Back Navigation Clicked**
   - Event: `picks_back_clicked`
   - Properties:
     - `button_location`: "top" | "sticky"
     - `time_in_view`: seconds
     - `tabs_viewed`: count
     - `cards_clicked`: count

7. **View Exited**
   - Event: `picks_view_closed`
   - Properties:
     - `exit_method`: "back_button" | "browser_back"
     - `total_time`: seconds
     - `engagement_level`: "low" | "medium" | "high"

**Engagement Scoring:**
- Low: <15 seconds, no clicks
- Medium: 15-60 seconds, 1-2 clicks
- High: >60 seconds, 3+ interactions

---

## Technical SEO and Performance

**SEO Requirements:**

1. **URL Management:**
   - Optional: ?view=editorial-picks parameter
   - Canonical URL points to main article
   - No separate indexing (alternate view only)

2. **Heading Hierarchy:**
   - H1: Hero title
   - H2: Section titles
   - Proper semantic structure maintained

3. **Structured Data:**
   - Editorial picks marked as curated list
   - Expert reviewer attribution

4. **Meta Tags:**
   - No separate meta tags (shares with main page)
   - Social share cards: Use main article

**Performance Targets:**

1. **Load Time:**
   - View transition: <500ms
   - Initial render: <300ms
   - No blocking JavaScript

2. **Core Web Vitals:**
   - LCP: <2.5s (cards render quickly)
   - FID: <100ms
   - CLS: 0 (explicit dimensions prevent shift)

3. **Bundle Size:**
   - View component: <40KB gzipped
   - Lazy load if not in initial viewport
   - Code split from main article

4. **Rendering:**
   - Server-side compatible
   - Progressive enhancement
   - No layout shift on load

---

## Design System Specifications

**Color Palette:**

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | White | #FFFFFF | View background |
| Card Background | Light Gray | #F8F8FA | Provider cards |
| Text Primary | Black | #000000 | Titles, provider names |
| Text Secondary | Dark Gray | #606F7F | Descriptions |
| Text Body | Dark Gray | #333333 | Hero description |
| Navy | Navy | #203468 | Back icon |
| CTA Button | Blue | #007AC8 | Learn More buttons |
| CTA Hover | Dark Blue | #006bb3 | Hover state |
| Tab Active BG | Black | #000000 | Active tab |
| Tab Inactive BG | Very Light Gray | #FAFAFB | Inactive tabs |
| Border | Gray | #CED4DB | Separators |
| Table Header BG | Light Blue | #ECF1FF | Table headers |

**Typography:**

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Hero Title (H1) | Work Sans | 20-40px | 700 | 26-48px |
| Section Title (H2) | Work Sans | 20-40px | 700 | 26-48px |
| Hero Description | Georgia | 18px | 400 | 29.12px |
| Section Desc | Work Sans | 16px | 400 | 26px |
| Provider Name | Work Sans | 16px | 400 | 26px |
| Category Badge | Work Sans | 20px | 600 | 26px |
| Card Description | Work Sans | 16px | 400 | 24px |
| Learn More Button | Work Sans | 18px | 600 | 30px |
| Tab Active | Work Sans | 16px | 600 | 15px |
| Tab Inactive | Work Sans | 14px | 600 | 20px |
| Back Button | Work Sans | 14px | 400/600 | 24px |

**Spacing:**
- Hero padding: 16-32px (responsive)
- Card gap: 24px
- Section gap: 40px
- Tab gap: 8px
- Sticky button bottom: 24px

**Shadows:**
- Card: 0px 2px 8px rgba(0,0,0,0.08)
- Card hover: 0px 8px 24px rgba(0,0,0,0.15)
- Logo container: 0px 8px 16px -3px rgba(0,0,0,0.10)
- Sticky button: 0px 4px 20px rgba(0,0,0,0.15)
- Tab active: 0px 4px 8px -1px rgba(0,0,0,0.10)

**Border Radius:**
- Cards: 24px
- Buttons: 8px (Learn More), 48px (Back buttons)
- Tabs: 40px (active), 28px (inactive)
- Logo container: 8px

---

## Dependencies

**Required Libraries:**
- React 18.2+
- TypeScript 4.9+
- Tailwind CSS 3.4+

**Data Sources:**
- insurance-providers.ts (cost data)
- Independent card descriptions (view-specific)

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
- View activation rate: 25% of page visitors
- Time in view: 45-90 seconds
- Learn More CTR: 35%
- Tab engagement: 60% view multiple tabs
- Back to article rate: 40%

**Growth Targets (6-12 Months):**
- View activation rate: 35%
- Learn More CTR: 45%
- Tab engagement: 75%
- Conversion lift vs main article: +15%

---

**Document Version:** 1.0
**Last Updated:** 2025-01-10
**Next Review:** [To be scheduled]
**Approved By:** [Stakeholder names]

---

*This FRD serves as the single source of truth for the Top Editorial Picks View development. Any changes must be documented via version control with approval from product ownership.*
