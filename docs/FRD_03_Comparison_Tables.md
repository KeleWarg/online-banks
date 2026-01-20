# Functional Requirements Document (FRD): Comparison Tables System

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

The purpose of this FRD is to outline the requirements for developing a comprehensive comparison tables system that presents detailed pet insurance provider data across four key dimensions: costs, plan details, user opinions, and claims feedback. This system serves as the primary data reference tool for users conducting in-depth provider research.

The tables are designed with a consistent visual language, responsive layouts that accommodate horizontal scrolling on mobile, sticky first columns for provider names, and integrated CTA buttons that drive conversion. Each table section is preceded by editorial context and followed by conversion-focused call-to-action elements.

---

## Scope

This document covers the functional and non-functional requirements, user stories, technical specifications, and design guidelines for the Comparison Tables System.

**In Scope:**
- Four distinct comparison tables (Cost, Plan Details, User Opinions, Claims Feedback)
- Sticky column functionality for provider names
- Responsive horizontal scroll on mobile/tablet
- Integrated "Apply Now" links per provider
- CTA buttons between sections
- Table section headers with titles and descriptions
- Educational content sections
- FAQ accordion section
- Value analysis chart section

**Out of Scope:**
- Interactive sorting (click column headers to sort)
- Filtering by criteria
- Export to CSV/PDF
- Provider comparison checkboxes
- Side-by-side comparison tool
- Live pricing updates

---

## Functionality & Design

### User Stories

**As a Prospective Pet Insurance Buyer**
- I want to compare costs for both dogs and cats side-by-side
- I need detailed information about waiting periods and coverage specifics
- I want to see real user opinions, both positive and negative
- I need to understand claims satisfaction before choosing a provider
- I want to quickly access application pages when I've made my decision
- I need tables to work on my mobile device without losing information

**As a Mobile User**
- I want to scroll tables horizontally without awkward gestures
- I need the provider name to stay visible while scrolling data columns
- I want clear visual indicators that more content exists off-screen
- I need readable text without excessive zooming

**As a Content Editor**
- I need to update provider data easily across all tables
- I want to add new providers without breaking table layouts
- I need to modify descriptive text for each section
- I want to control which providers appear and in what order
- I need to update "Apply Now" URLs independently

**As a Business Stakeholder**
- I need tables to drive conversions through clear CTAs
- I want to track which data points users engage with most
- I need tables to load quickly despite containing substantial data
- I want the ability to A/B test CTA placements and copy

---

### Objectives, Scope, and Development

**Purpose**
The Comparison Tables System transforms raw insurance data into an accessible, scannable format that empowers users to make informed decisions. By presenting complex information in structured tables, we reduce cognitive load while maintaining transparency and completeness.

**Scope**
- Four complete table sections with distinct data sets
- Consistent visual design across all tables
- Responsive table layouts with horizontal scroll
- Sticky columns for context retention
- CTA integration at strategic points
- Educational content sections
- SEO-optimized markup

**Goals and KPIs**

**Goals:**
- Increase time on page by providing comprehensive data
- Improve decision confidence through transparency
- Drive conversions via strategic CTA placement
- Reduce bounce rate by answering comparison questions
- Build trust through complete, accurate data presentation

**KPIs:**
- Table scroll engagement rate (target: >40%)
- "Apply Now" click-through rate (target: >20%)
- Average tables viewed per session (target: >2.5)
- Time spent in tables section (target: >2 minutes)
- Mobile horizontal scroll usage rate
- CTA button effectiveness by position

---

## Features and Functional Requirements

### Component Architecture

The Comparison Tables System is organized into hierarchical modules:

1. **Table Sections** (4 primary tables)
   - Cost Comparison Table
   - Plan Details Table
   - User Opinion Table
   - Claims Feedback Table

2. **Section Wrappers**
   - Section titles
   - Section descriptions
   - Table containers
   - CTA buttons

3. **Supporting Content**
   - Best Value Analysis
   - How to Choose guidance
   - FAQ section

---

## Component Breakdown

### 1. Section Container Structure

All table sections share a common container structure.

**Section Configuration:**
- **Display:** Flex column
- **Gap:** 24px (mobile), 40px (desktop)
- **Padding:**
  - Top: 40px
  - Bottom: 32px
- **Border-top:** 1px solid #CED4DB
- **Width:** 100%
- **Max-width:** 1440px
- **Margin:** 0 auto (centered)
- **Background:** White (#FFFFFF)

---

### 2. Section Header Components

**Field Group Name:** Table Section Header

**2.1 Section Title**

- **Field Name:** Section Title
- **Type:** Single-line text
- **Element:** H3 (semantic heading)
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
- **Character Limit:** 100 characters
- **Margin Bottom:** 8px
- **Editable:** Yes (CMS)

**Example Titles:**
- "Pet Insurance Cost for Dogs and Cats"
- "Pet Insurance Plan Details"
- "User Opinion of Pet Insurance Companies"
- "User Feedback on Claims Process"

---

**2.2 Section Description**

- **Field Name:** Section Description
- **Type:** Multi-line text
- **Font:** Georgia, 400 (normal)
- **Font Size:** 18px
- **Line Height:** 29.12px
- **Color:** #333333 (dark gray)
- **Character Limit:** 400 characters
- **Margin Bottom:** 24px
- **Editable:** Yes (CMS)
- **Supports:** Basic HTML formatting (bold, italic, links)

**Example Descriptions:**
- "The table below shows the average monthly cost for the leading pet insurance providers for dogs and cats."
- "Understanding the different coverage options of plans is essential in choosing the best plan for your pet. Here are the most important pet insurance plan information:"

---

### 3. Table Structure (Shared Configuration)

All tables share common structural elements with variations in columns.

**Table Container:**
- **Element:** `<div>` wrapper for horizontal scroll
- **Display:** Block
- **Width:** 100%
- **Overflow-X:** Auto
- **Overflow-Y:** Hidden
- **Position:** Relative
- **Scrollbar Styling:**
  - Height: 8px (desktop)
  - Track: #F3F4F6
  - Thumb: #D1D5DB
  - Thumb hover: #9CA3AF

**Table Element:**
- **Element:** `<table>`
- **Width:** 100%
- **Table-layout:** Fixed
- **Border-collapse:** Separate
- **Border-spacing:** 0
- **Min-width:** Varies by table (800px-1200px)
- **Background:** White

---

**Table Header Row:**
- **Element:** `<thead>` > `<tr>`
- **Background:** #ECF1FF (light blue)
- **Border-bottom:** 1px solid #E5E7EB
- **Position:** Sticky (top: 0) - optional enhancement
- **Z-index:** 10

**Table Header Cells:**
- **Element:** `<th>`
- **Font:** Work Sans, 600 (semi-bold), 14px
- **Line Height:** 20px
- **Color:** Black (#000000)
- **Padding:** 12px 16px
- **Text-align:** Left
- **Vertical-align:** Middle
- **First Cell:**
  - Border-radius: 8px 0 0 0 (top-left)
  - Position: Sticky (left: 0) when needed
  - Background: #ECF1FF
  - Z-index: 11
- **Last Cell:**
  - Border-radius: 0 16px 0 0 (top-right)

---

**Table Body Rows:**
- **Element:** `<tbody>` > `<tr>`
- **Background:**
  - Even rows: White (#FFFFFF)
  - Odd rows: #FAFBFC (very light gray)
- **Border-bottom:** 1px solid #F3F4F6
- **Hover State (Desktop):**
  - Background: #F9FAFB
  - Transition: 150ms ease

**Table Body Cells:**
- **Element:** `<td>`
- **Font:** Work Sans, 400, 14px
- **Line Height:** 20px
- **Color:** #1D1D1F (dark gray)
- **Padding:** 16px
- **Vertical-align:** Top (for multi-line content)
- **Text-align:** Left

**Provider Name Cell (First Column):**
- **Font-weight:** 600 (semi-bold)
- **Color:** Black (#000000)
- **Position:** Sticky (left: 0) when table scrolls
- **Background:** Inherits row background (white or #FAFBFC)
- **Z-index:** 5
- **Border-right:** 1px solid #E5E7EB (on scroll)

**Apply Now Link Cell:**
- **Content:** Anchor tag
- **Text:** "Apply Now"
- **Font:** Work Sans, 600, 14px
- **Color:** #007AC8 (primary blue)
- **Text-decoration:** Underline
- **Hover:**
  - Color: #005a8a (darker blue)
  - Text-decoration: Underline
  - Transition: 200ms
- **Target:** _blank (opens in new tab)
- **Rel:** noopener noreferrer (security)

---

### 4. Table 1: Pet Insurance Cost

**Section ID:** insurance-cost

**Table Configuration:**
- **Min-width:** 800px
- **Columns:** 4

**Column Specifications:**

| Column | Header Text | Width | Data Type | Notes |
|--------|------------|-------|-----------|-------|
| 1 | Provider | 25% | String | Sticky on scroll |
| 2 | Average Monthly for Dogs | 30% | Currency string | Format: "$XX" |
| 3 | Average Monthly for Cats | 30% | Currency string | Format: "$XX" |
| 4 | Apply Now | 15% | Link | External URL |

---

**Data Fields (per provider):**

**Provider Name:**
- **Field Name:** provider
- **Type:** Single-line text
- **Character Limit:** 50 characters
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Examples:** "Pets Best", "Figo", "Chewy", "Embrace", "Spot", "Lemonade"

**Dog Cost:**
- **Field Name:** dogCost
- **Type:** Currency string
- **Format:** "$XX" (no decimals)
- **Range:** $20-$200
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Validation:** Must start with $, numeric only

**Cat Cost:**
- **Field Name:** catCost
- **Type:** Currency string
- **Format:** "$XX" (no decimals)
- **Range:** $15-$150
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Validation:** Must start with $, numeric only

**Apply Now URL:**
- **Field Name:** applyNowUrl
- **Type:** URL string
- **Character Limit:** 200 characters
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Validation:** Must be valid URL format
- **Examples:**
  - https://petsbest.com/apply
  - https://figo.pet/apply

---

**Current Data (6 providers):**

| Provider | Dog Cost | Cat Cost | Apply Now URL |
|----------|----------|----------|---------------|
| Pets Best | $52 | $36 | https://petsbest.com/apply |
| Figo | $79 | $53 | https://figo.pet/apply |
| Chewy | $89 | $62 | https://chewy.com/insurance/apply |
| Embrace | $75 | $53 | https://embracepetinsurance.com/apply |
| Spot | $93 | $65 | https://spotpetinsurance.com/apply |
| Lemonade | $48 | $34 | https://lemonade.com/pet/apply |

---

### 5. Table 2: Pet Insurance Plan Details

**Section ID:** plan-details

**Table Configuration:**
- **Min-width:** 1200px (wider table)
- **Columns:** 7
- **Sticky Column:** Provider (first column)
- **Note:** May require horizontal scroll on most screens

**Column Specifications:**

| Column | Header Text | Width | Data Type | Alignment |
|--------|------------|-------|-----------|-----------|
| 1 | Provider | 10% | String | Top, sticky |
| 2 | Age Restrictions | 13% | Multi-line text | Top |
| 3 | Waiting Periods | 30% | Multi-line text | Top |
| 4 | End of Life Expenses | 12% | String | Top |
| 5 | Vet Exam Fees | 12% | String | Top |
| 6 | Microchipping | 12% | String | Top |
| 7 | Apply Now | 11% | Link | Top |

---

**Data Fields (per provider):**

**Age Restrictions:**
- **Field Name:** ageRestrictions
- **Type:** Multi-line text
- **Character Limit:** 150 characters
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Examples:**
  - "7 weeks and older"
  - "8 weeks and older"
  - "None"
  - "6 weeks to 15 years"

**Waiting Periods:**
- **Field Name:** waitingPeriods
- **Type:** Multi-line text
- **Character Limit:** 300 characters
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Format:** Free text with conditions
- **Examples:**
  - "3 days for accidents, 14 days for illnesses and 6 months for cruciate ligament conditions"
  - "1 day for accidents, 14 days for illnesses and 6 months for orthopedic conditions (can be waived with an orthopedic waiver within the first 30 days of the policy)"

**End of Life:**
- **Field Name:** endOfLife
- **Type:** Single-line text
- **Options:** "Included" | "Not included" | "Available as add-on"
- **Character Limit:** 50 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

**Vet Exam Fees:**
- **Field Name:** vetExamFees
- **Type:** Single-line text
- **Options:** "Included" | "Not included" | "Available as an add on"
- **Character Limit:** 50 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

**Microchipping:**
- **Field Name:** microchipping
- **Type:** Single-line text
- **Options:** "Included" | "Not included" | "Available as add-on"
- **Character Limit:** 50 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

---

**Current Data Sample:**

| Provider | Age Restrictions | Waiting Periods | End of Life | Vet Exam Fees | Microchipping |
|----------|-----------------|-----------------|-------------|---------------|---------------|
| Pets Best | 7 weeks and older | 3 days for accidents, 14 days for illnesses and 6 months for cruciate ligament conditions | Included | Included | Included |
| Figo | 8 weeks and older | 1 day for accidents, 14 days for illnesses and 6 months for orthopedic conditions (can be waived with an orthopedic waiver within the first 30 days of the policy) | Included | Included | Included |

---

### 6. Table 3: User Opinion

**Section ID:** user-opinion

**Table Configuration:**
- **Min-width:** 1000px
- **Columns:** 6
- **Sticky Column:** Provider (first column)

**Column Specifications:**

| Column | Header Text | Width | Data Type | Special |
|--------|------------|-------|-----------|---------|
| 1 | Provider | 15% | String | Sticky |
| 2 | CSI Rating | 12% | String | Bold font |
| 3 | How Likely to Recommend | 18% | String | Normal |
| 4 | Common Positive Sentiments | 22% | String | Normal |
| 5 | Common Negative Sentiments | 22% | String | Normal |
| 6 | Apply Now | 11% | Link | Normal |

---

**Data Fields (per provider):**

**CSI Rating:**
- **Field Name:** csiRating
- **Type:** Single-line text
- **Format:** "X.X/10" (e.g., "9.3/10")
- **Character Limit:** 10 characters
- **Required:** Yes
- **Editable:** Yes (CMS)
- **Font-weight:** 700 (bold) - unique to this column
- **Validation:** Must follow X.X/10 format

**Likely to Recommend:**
- **Field Name:** likelyToRecommend
- **Type:** Single-line text
- **Options:** "Very likely" | "Somewhat likely" | "Not likely" | "Neutral"
- **Character Limit:** 30 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

**Positive Comments:**
- **Field Name:** positiveComments
- **Type:** Single-line text
- **Character Limit:** 100 characters
- **Required:** No (can be "-" for none)
- **Editable:** Yes (CMS)
- **Examples:**
  - "Loved it, easy to change"
  - "Good prices"
  - "Easy to sign up"
  - "Low price"

**Negative Comments:**
- **Field Name:** negativeComments
- **Type:** Single-line text
- **Character Limit:** 100 characters
- **Required:** No (can be "-" for none)
- **Editable:** Yes (CMS)
- **Examples:**
  - "Terrible customer service"
  - "Slow processing"
  - "Bad customer service"
  - "Too expensive"

---

**Current Data Sample:**

| Provider | CSI Rating | Likely to Recommend | Positive Comments | Negative Comments |
|----------|-----------|---------------------|-------------------|-------------------|
| Pets Best | 5.5/10 | Somewhat likely | Loved it, easy to change | Terrible customer service |
| Figo | 9.3/10 | Very likely | Good prices | Slow processing |
| Chewy | 4.8/10 | Somewhat likely | Easy to sign up | Bad customer service |

---

### 7. Table 4: Claims Feedback

**Section ID:** claims-feedback

**Table Configuration:**
- **Min-width:** 800px
- **Columns:** 4
- **Sticky Column:** Provider (first column)

**Column Specifications:**

| Column | Header Text | Width | Data Type |
|--------|------------|-------|-----------|
| 1 | Provider | 25% | String |
| 2 | Satisfaction with Claims | 30% | String |
| 3 | Overall Satisfaction | 30% | String |
| 4 | Apply Now | 15% | Link |

---

**Data Fields (per provider):**

**Claims Satisfaction:**
- **Field Name:** claimsSatisfaction
- **Type:** Single-line text
- **Options:** "Very satisfied" | "Somewhat satisfied" | "Not satisfied" | "Neutral"
- **Character Limit:** 30 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

**Overall Satisfaction:**
- **Field Name:** overallSatisfaction
- **Type:** Single-line text
- **Options:** "Very satisfied" | "Somewhat satisfied" | "Not satisfied" | "Neutral"
- **Character Limit:** 30 characters
- **Required:** Yes
- **Editable:** Yes (CMS)

---

**Current Data Sample:**

| Provider | Claims Satisfaction | Overall Satisfaction |
|----------|-------------------|---------------------|
| Pets Best | Somewhat satisfied | Somewhat satisfied |
| Figo | Very satisfied | Very satisfied |
| Chewy | Somewhat satisfied | Not satisfied |
| Embrace | Very satisfied | Somewhat satisfied |

---

### 8. CTA Button Component

**Field Group Name:** Section CTA Button

Appears after each table section to drive conversion.

**Button Configuration:**
- **Element:** `<button>` or styled `<div>`
- **Width:** Full width container
- **Max-width:** 400px
- **Height:** 56px
- **Display:** Flex
- **Justify:** Center
- **Align:** Center
- **Margin:** 32px auto 0 (centered, top spacing)
- **Background:** Linear gradient (90deg, #007AC8 0%, #0066a3 100%)
- **Border:** None
- **Border-radius:** 28px
- **Shadow:** 0px 4px 12px rgba(0, 122, 200, 0.3)
- **Cursor:** Pointer
- **Position:** Relative (for icon animation)

**Button Text:**
- **Field Name:** CTA Text
- **Type:** Single-line text
- **Font:** Work Sans, 16px, font-weight 600
- **Color:** White (#FFFFFF)
- **Character Limit:** 50 characters
- **Default Text:** "Compare All Providers"
- **Editable:** Yes (CMS, per section or global)

**Button Icon:**
- **Type:** SVG arrow (diagonal up-right)
- **Size:** 20x20px
- **Color:** White
- **Position:** Right of text, 8px gap
- **Animation on Hover:** TranslateX(2px) translateY(-2px)

**Hover State:**
- Background: Darken gradient by 10%
- Scale: 1.02
- Shadow: 0px 6px 16px rgba(0, 122, 200, 0.4)
- Transition: 200ms ease
- Icon: Subtle movement (up-right)

**Click Behavior:**
- **Default:** Scrolls to AI Chat section
- **Configurable:** Can link to specific provider, open chat, or custom URL
- **Tracking:** Fires click event with section context

**Disabled State:**
- Not applicable (always enabled)

---

### 9. Best Value Analysis Section

**Section ID:** best-value-analysis

This section appears before the tables and provides visual data analysis.

**Section Configuration:**
- **Padding-top:** 40px
- **Border-top:** 1px solid #CED4DB
- **Margin-top:** 24px
- **Gap:** 24px

**9.1 Section Title**
- Same configuration as table section titles
- **Default Text:** "Our Analysis of the Best Value in Pet Insurance"

**9.2 Analysis Text**
- **Type:** Multi-line text (2 paragraphs)
- **Font:** Georgia, 18px, line-height 29.12px
- **Color:** #333333
- **Character Limit:** 800 characters total
- **Editable:** Yes (CMS)
- **Supports:** Bold, italic, links
- **Margin Bottom:** 16px between paragraphs

**9.3 Chart Image**
- **Field Name:** Value Analysis Chart
- **Type:** Image upload
- **Source:** /Chart.png (current)
- **Max Width:** 100%
- **Height:** Auto
- **Object-fit:** Contain
- **Alt Text:** "Pet Insurance Value Analysis Chart showing coverage vs cost comparison"
- **Margin-top:** 16px
- **Editable:** Yes (CMS upload)
- **Responsive:** Scales down on mobile

**Current Content:**
"Pets Best's Essential policy offers the most bang for your buck in our analysis of coverage vs. cost. While some policies include more coverage, like Pumpkin and Spot, Pets Best has the highest ratio of coverage compared to cost.

In the graph below, bubbles that float to the top indicate companies with higher costs, and bubbles to the right indicate broader coverage. The Pets Best Essential plan offers the best value in our analysis."

---

### 10. How to Choose Pet Insurance Section

**Section ID:** how-to-choose

Educational content section with step-by-step guidance cards.

**Section Configuration:**
- **Padding-top:** 40px
- **Border-top:** 1px solid #CED4DB
- **Gap:** 24px

**10.1 Section Title**
- **Text:** "How to Choose the Right Pet Insurance"
- **Element:** H2
- **Font:** Work Sans, 700, 32-40px

**10.2 Section Description**
- **Text:** "These simple steps will get you to the best policy for your situation."
- **Font:** Georgia, 18px
- **Character Limit:** 200 characters

**10.3 Guidance Cards**

**Count:** 6 cards (fixed)

**Card Configuration:**
- **Width:** 100%
- **Background:** #F6F8FA (light gray)
- **Border-radius:** 8px
- **Padding:** 24px
- **Display:** Flex row (desktop), column (mobile)
- **Gap:** 24px
- **Margin-bottom:** 32px

**Icon Container:**
- **Size:** 64x64px square
- **Background:** #203468 (navy)
- **Border-radius:** 8px
- **Flex:** 0 0 auto (no shrink)
- **Icon Color:** White
- **Icon Size:** 40x40px (centered)

**Content Container:**
- **Flex:** 1
- **Display:** Flex column
- **Gap:** 12px

**Card Title:**
- **Field Name:** Guidance Title
- **Type:** Single-line text
- **Font:** Work Sans, 20px, font-weight 700
- **Color:** Black
- **Character Limit:** 100 characters
- **Editable:** Yes (CMS)

**Card Description:**
- **Field Name:** Guidance Description
- **Type:** Multi-line text
- **Font:** Georgia, 18px, line-height 29.12px
- **Color:** #333333
- **Character Limit:** 600 characters
- **Editable:** Yes (CMS)
- **Supports:** Bold, italic, inline links

**Current Cards:**
1. "Consider Your Pet's Potential Health Problems"
2. "Determine What Policy Features Are Important to You"
3. "Consider the Waiting Periods"
4. "Choose Reimbursement Levels"
5. "Check Your Pet's Eligibility"
6. "Compare Quotes for Plans That Match Your Wish List"

---

### 11. FAQ Section

**Section ID:** faq

**Section Configuration:**
- **Padding-top:** 40px
- **Border-top:** 1px solid #CED4DB
- **Gap:** 24px

**11.1 Section Title**
- **Text:** "Frequently Asked Questions"
- **Element:** H2
- **Font:** Work Sans, 700, 32-40px

**11.2 Section Description**
- **Text:** "Common questions about pet insurance coverage, costs, and claims process."
- **Font:** Georgia, 18px
- **Character Limit:** 200 characters

**11.3 FAQ Items**

**Count:** 4-8 questions (expandable via CMS)

**Current Count:** 4 questions

**FAQ Card Configuration:**
- **Width:** 100%
- **Background:** #F8F9FA
- **Border-radius:** 8px
- **Padding:** 24px
- **Margin-bottom:** 16px
- **Hover:** Background lighten to #F0F1F2

**Question Text:**
- **Field Name:** FAQ Question
- **Type:** Single-line text
- **Font:** Work Sans, 18px, font-weight 600
- **Color:** Black
- **Character Limit:** 150 characters
- **Margin-bottom:** 12px
- **Editable:** Yes (CMS)

**Answer Text:**
- **Field Name:** FAQ Answer
- **Type:** Multi-line text
- **Font:** Work Sans, 16px, font-weight 400
- **Color:** #4B5563 (gray)
- **Character Limit:** 500 characters
- **Editable:** Yes (CMS)
- **Supports:** Bold, italic, links

**Current Questions:**
1. "Does pet insurance cover both dogs and cats under the same plan?"
2. "Does pet insurance cover vaccinations and annual checkups?"
3. "Are pre-existing conditions covered?"
4. "How are premiums calculated for pet insurance?"

**Future Enhancement (Not in current implementation):**
- Accordion functionality (expand/collapse)
- Click to toggle answer visibility
- Schema markup for SEO

---

### 12. Additional Content Sections

**12.1 Customer Satisfaction Survey Section**

**Section ID:** customer-satisfaction-survey

**Configuration:**
- Appears before methodology section
- **Title:** "More About Our Customer Satisfaction Survey" (H2)
- **Content:** 2 paragraphs of editorial text
- **Font:** Georgia, 18px, line-height 29.12px
- **Character Limit:** 1000 characters total
- **Editable:** Yes (CMS)

**Current Content Topics:**
- Survey methodology (1,300 pet owners surveyed)
- Key findings (86% satisfied with customer service/pricing)
- Claims experience data (86% satisfied with claims process)

---

**12.2 Plan Types Explanation Section**

**Subsection of "How to Choose"**

**Title:** "Compare Plans Available By Company"

**Content:**
- Explanation of 3 plan types:
  - Accident and illness plan
  - Accident-only plan
  - Pet wellness plans
- Related article link

**Font:** Georgia, 18px
**Character Limit:** 800 characters
**Editable:** Yes (CMS)

---

**12.3 Coverage Levels Section**

**Subsection of "How to Choose"**

**Title:** "Coverage Levels"

**Content:**
- Annual maximum coverage explanation
- Deductible explanation
- Reimbursement percentage explanation

**Font:** Georgia, 18px
**Character Limit:** 600 characters
**Editable:** Yes (CMS)

---

### 13. Responsive Design Specifications

**Desktop (1024px+):**
- All tables visible in full width (some may require minimal scroll)
- Sticky provider column enabled
- All text readable without zooming
- Hover effects active
- CTA buttons centered, max-width 400px

**Tablet (768-1023px):**
- Tables require horizontal scroll for wider tables
- Sticky provider column maintained
- Font sizes remain same
- CTA buttons full width with side padding

**Mobile (378-767px):**
- All tables require horizontal scroll
- Sticky provider column critical for context
- Scroll indicator shadow on right edge
- Font sizes adjust slightly smaller (13px)
- CTA buttons full width
- Guidance cards stack vertically (icon on top)
- FAQ cards full width, padding reduced

**Scroll Indicators:**
- **Right Shadow:** Visible when content extends right
- **Gradient:** Linear gradient (90deg, transparent 0%, rgba(0,0,0,0.05) 100%)
- **Width:** 40px
- **Position:** Absolute right edge
- **Removes:** When scrolled to end

---

### 14. Accessibility Requirements

**Keyboard Navigation:**
- All links reachable via Tab
- Logical tab order (top to bottom, left to right)
- Focus indicators visible (2px blue outline)
- Horizontal scroll via arrow keys (when table focused)

**Screen Reader Support:**
- Table headers properly announced
- Row/column headers associated via scope attribute
- "Sticky" column announced as context
- Link purpose clear ("Apply to [Provider Name]")

**ARIA Attributes:**
- `role="table"` on table wrapper if using divs
- `aria-label` on complex tables describing content
- `aria-sort` if sorting implemented (future)
- `aria-describedby` linking section descriptions

**Semantic HTML:**
- Proper table elements (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`)
- Heading hierarchy (H2 for sections, H3 for tables)
- Meaningful alt text on chart images

**Color Contrast:**
- All text meets WCAG AA (4.5:1)
- Link color #007AC8 on white: 4.77:1 (pass)
- Table headers on #ECF1FF: verify contrast
- Sticky column borders visible but subtle

**Mobile Accessibility:**
- Minimum tap target: 44x44px for links
- Sufficient spacing between table cells
- Scroll area announced to screen readers

---

## CMS Integration

**Editable Fields:**

**Table-Level:**
1. **Section Title** (per table)
   - Character limit: 100
   - Type: Text input

2. **Section Description** (per table)
   - Character limit: 400
   - Type: Text area with rich text

3. **CTA Button Text** (per table or global)
   - Character limit: 50
   - Type: Text input

**Row-Level (per provider):**
4. **Provider Data** (all tables)
   - Editable via spreadsheet-like interface
   - Bulk import from CSV
   - Field validation (currency format, URLs, etc.)

5. **Apply Now URLs** (all tables)
   - Separate field, globally editable
   - URL validation

**Section-Level:**
6. **Best Value Analysis**
   - Title, description paragraphs, chart image upload

7. **How to Choose Cards**
   - Title, description per card (6 cards)
   - Icon selection dropdown

8. **FAQ Items**
   - Question/answer pairs
   - Add/remove/reorder functionality

**Global Toggles:**
- Show/hide entire sections
- Enable/disable sticky columns
- Show/hide specific providers globally
- Table column visibility toggles

---

## Tracking & Analytics

**Event Tracking Requirements:**

**Widget Identifier:**
- All events tagged with: `widgetName: "comparison_tables"`

**Events to Track:**

1. **Table Viewed**
   - Event: `table_viewed`
   - Properties:
     - `table_name`: "cost" | "plan_details" | "user_opinion" | "claims"
     - `scroll_depth`: percentage of table scrolled
     - `device_type`: "mobile" | "tablet" | "desktop"

2. **Table Scrolled Horizontally**
   - Event: `table_scrolled`
   - Properties:
     - `table_name`: table identifier
     - `scroll_percentage`: 0-100%
     - `device_type`: device

3. **Provider Row Clicked**
   - Event: `provider_row_clicked`
   - Properties:
     - `provider_name`: provider
     - `table_name`: table
     - `row_position`: 1-6

4. **Apply Now Clicked**
   - Event: `apply_now_clicked`
   - Properties:
     - `provider_name`: provider
     - `table_name`: source table
     - `provider_position`: row number
     - `destination_url`: external URL

5. **CTA Button Clicked**
   - Event: `table_cta_clicked`
   - Properties:
     - `button_text`: CTA text
     - `section_name`: section after which CTA appears
     - `button_position`: top | middle | bottom

6. **FAQ Expanded** (future)
   - Event: `faq_expanded`
   - Properties:
     - `question_text`: question
     - `position`: 1-8

7. **Chart Viewed**
   - Event: `chart_viewed`
   - Properties:
     - `chart_type`: "value_analysis"
     - `scroll_depth`: when viewed

**Heatmap Tracking:**
- Cell-level click tracking
- Most viewed data points
- Scroll depth per table
- Sticky column usage

---

## Technical SEO and Performance

**SEO Requirements:**

1. **Structured Data:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Table",
     "about": "Pet Insurance Cost Comparison",
     "description": "Monthly costs for dogs and cats"
   }
   ```

2. **Heading Hierarchy:**
   - Maintain proper H2 > H3 structure
   - Table captions if needed

3. **Alt Text:**
   - Charts: Descriptive alt explaining data
   - Icons: Decorative (alt="")

4. **Schema Markup:**
   - FAQ schema for FAQ section
   - Product schema for providers

**Performance Targets:**

1. **Load Time:**
   - Initial table render: <800ms
   - Lazy load images in guidance cards
   - Critical CSS inlined

2. **Core Web Vitals:**
   - LCP: <2.5s (watch for chart images)
   - FID: <100ms
   - CLS: <0.1 (explicit table dimensions)

3. **Bundle Size:**
   - Table component: <25KB gzipped
   - Minimize external dependencies

4. **Rendering:**
   - Server-side render table HTML
   - Progressive enhancement for interactivity
   - No layout shift on data load

---

## Design System Specifications

**Color Palette:**

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Table Header BG | Light Blue | #ECF1FF | Header row |
| Row Even | White | #FFFFFF | Alternating rows |
| Row Odd | Very Light Gray | #FAFBFC | Alternating rows |
| Row Hover | Light Gray | #F9FAFB | Desktop hover |
| Border | Gray | #E5E7EB | Cell borders |
| Text Primary | Black | #000000 | Headers, provider names |
| Text Secondary | Dark Gray | #1D1D1F | Cell data |
| Text Body | Dark Gray | #333333 | Descriptions |
| Link | Blue | #007AC8 | Apply Now links |
| Link Hover | Dark Blue | #005a8a | Hover state |
| CTA Button | Blue Gradient | #007AC8 → #0066a3 | CTA background |
| Guidance Card BG | Light Gray | #F6F8FA | Card backgrounds |
| Icon BG | Navy | #203468 | Icon containers |

**Typography:**

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Section Title (H2) | Work Sans | 32-40px | 700 | 39-48px |
| Section Title (H3) | Work Sans | 32-40px | 700 | 39-48px |
| Section Desc | Georgia | 18px | 400 | 29.12px |
| Table Header | Work Sans | 14px | 600 | 20px |
| Table Cell | Work Sans | 14px | 400 | 20px |
| Provider Name | Work Sans | 14px | 600 | 20px |
| Apply Now Link | Work Sans | 14px | 600 | 20px |
| CTA Button | Work Sans | 16px | 600 | 24px |
| Guidance Title | Work Sans | 20px | 700 | 26px |
| Guidance Body | Georgia | 18px | 400 | 29.12px |
| FAQ Question | Work Sans | 18px | 600 | 24px |
| FAQ Answer | Work Sans | 16px | 400 | 24px |

**Spacing:**
- Section padding: 40px top, 32px bottom
- Table cell padding: 16px
- Header cell padding: 12px 16px
- Guidance card padding: 24px
- FAQ card padding: 24px
- Gap between sections: 40px

**Shadows:**
- CTA button: 0px 4px 12px rgba(0, 122, 200, 0.3)
- CTA button hover: 0px 6px 16px rgba(0, 122, 200, 0.4)
- Sticky column: 2px 0px 4px rgba(0,0,0,0.1) (right edge)

**Transitions:**
- Row hover: 150ms ease
- Link hover: 200ms ease
- CTA button: 200ms ease
- Scroll: smooth (native)

---

## Dependencies

**Required Libraries:**
- React 18.2+
- TypeScript 4.9+
- Tailwind CSS 3.4+

**Data Source:**
- insurance-providers.ts (centralized data file)

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
- Table section view rate: 70% of page visitors
- Average tables viewed: 2.5 tables
- Horizontal scroll engagement: 50% on mobile
- "Apply Now" CTR: 20%
- Table CTA button CTR: 15%
- Time in tables section: 2+ minutes

**Growth Targets (6-12 Months):**
- Average tables viewed: 3+ tables
- Apply Now CTR: 30%
- Table CTA CTR: 25%
- Provider comparison completeness: Users view at least 3 tables before applying

---

**Document Version:** 1.0
**Last Updated:** 2025-01-10
**Next Review:** [To be scheduled]
**Approved By:** [Stakeholder names]

---

*This FRD serves as the single source of truth for the Comparison Tables System development. Any changes must be documented via version control with approval from product ownership.*
