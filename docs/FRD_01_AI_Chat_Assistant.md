# Functional Requirements Document (FRD): AI Chat Assistant Module

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

The purpose of this FRD is to outline the requirements for developing an AI-powered chat assistant that provides personalized pet insurance recommendations. The module uses a conversational interface to gather user preferences across 4 key dimensions (pet type, budget, priority, coverage type) and applies an intelligent matching algorithm to recommend the top 3 providers from a database of 6 insurance companies.

The assistant integrates with the Anthropic Claude API for natural language processing, enabling users to respond via button selections or free-text input. The module is designed to be accessible via multiple entry points (sticky navigation bar, floating button) and provides an engaging, educational experience that drives conversion.

---

## Scope

This document covers the functional and non-functional requirements, user stories, technical specifications, AI integration details, and tracking considerations for the development of the AI Chat Assistant Module.

**In Scope:**
- Conversational flow interface with 4 questions
- Natural language processing via Claude API
- Smart matching algorithm with scoring system
- Recommendation table display with top 3 matches
- CTA buttons for quote requests
- Multiple entry points and responsive design
- Chat state management and reset functionality

**Out of Scope:**
- Direct quote generation (links to external provider sites)
- User account creation or data persistence
- Multi-language support (initial release)
- Voice input/output functionality

---

## Functionality & Design

### User Stories

**As a Pet Owner**
- I want to quickly get personalized insurance recommendations without filling out long forms
- I need to understand why specific providers match my needs
- I want the flexibility to respond conversationally or select from options
- I need cost comparisons for both dogs and cats in a single view
- I want to restart my search easily if my needs change

**As a Website Visitor**
- I want an engaging way to explore insurance options beyond static tables
- I need the chat interface to work seamlessly on mobile and desktop
- I want to see my previous responses to understand the recommendation logic
- I need visual indicators (typing animations, progress) to feel engaged

**As a Business Stakeholder**
- I need to capture user preferences to understand our audience better
- I want clear conversion pathways to provider application pages
- I need tracking data on conversation completion rates and drop-off points
- I want the AI to handle varied user inputs gracefully without breaking

**As a Content Manager**
- I need to update provider data (costs, details, ratings) easily
- I want to modify acknowledgment messages and conversation prompts
- I need to control which providers appear in recommendations
- I want to adjust matching algorithm weights without code changes

---

### Objectives, Scope, and Development

**Purpose**
This module transforms passive content consumption into an interactive, personalized experience. By gathering user preferences through conversation, we can recommend the most relevant insurance providers while educating users about key decision factors.

**Scope**
- Complete conversational UI with 4-question flow
- AI-powered natural language understanding
- Dynamic scoring algorithm with customizable weights
- Responsive table visualization of recommendations
- Multiple access points (sticky bar, floating button)
- Analytics integration for user behavior tracking

**Goals and KPIs**

**Goals:**
- Increase time on page by providing interactive experience
- Improve conversion rates through personalized recommendations
- Reduce bounce rates by offering immediate, relevant value
- Enhance SEO through structured conversational content
- Build trust through transparent methodology display

**KPIs:**
- Conversation completion rate (target: >65%)
- Click-through rate on "Get Quotes" buttons (target: >25%)
- Average time in chat session (target: >90 seconds)
- Recommendation acceptance rate (users clicking provider links)
- Chat abandonment points (identify friction)
- Mobile vs desktop usage patterns
- Provider quote request distribution

---

## Features and Functional Requirements

### Module Architecture

The AI Chat Assistant is organized into four hierarchical levels:

1. **Chat Container** - Overlay interface that houses the entire experience
2. **Conversation Flow** - 4-question sequence with acknowledgments
3. **AI Processing Layer** - Claude API integration for NLP
4. **Recommendation Engine** - Scoring algorithm and results display

---

## Component Breakdown

### 1. Chat Container (Primary Container)

#### 1.1 Chat Trigger Buttons

**Desktop Sticky Bar Trigger:**
- **Field Name:** Desktop Chat Trigger
- **Type:** Button element
- **Location:** Sticky bottom navigation bar
- **Visual Design:**
  - Black background with gradient border effect
  - Forbes AI icon (20x20px)
  - Text: "Ask our AI" (Work Sans, 16px, white)
  - Height: 56px, Rounded: 48px
  - Hover: Scale 1.02, background darkens
- **Behavior:**
  - Appears when Quick Dive section scrolls out of view
  - Disappears when user scrolls back to top
  - Opens chat overlay on click
- **Toggle:** Can be globally enabled/disabled

**Mobile Floating Trigger:**
- **Field Name:** Mobile Chat Trigger
- **Type:** Floating action button
- **Location:** Fixed bottom, centered, above sticky bar
- **Visual Design:**
  - Same styling as desktop version
  - Positioned 24px above sticky bar
  - Z-index: 50
- **Behavior:**
  - Only visible on screens <640px
  - Same interaction as desktop trigger
- **Toggle:** Linked to desktop trigger state

#### 1.2 Chat Overlay Container

**Expanded State:**
- **Dimensions:**
  - Width: 100% with max-width 1260px
  - Height: calc(100vh - 140px)
  - Position: Fixed at bottom
  - Border-radius: 24px (top corners)
- **Background:**
  - White with shadow: 0px 0px 16px 4px rgba(125, 10, 248, 0.12)
  - Outline: 1px rgba(0, 122, 200, 0.40)
- **Animation:**
  - Entry: slideUpFadeIn (300ms ease-out)
  - Exit: slideDownFadeOut (200ms ease-in)
- **Structure:**
  - Header section (fixed)
  - Messages area (scrollable)
  - Suggested prompts section (conditional)
  - Input section (fixed)

**Collapsed State:**
- Does not exist; chat is either open or fully closed

---

### 2. Header Section

**Field Group Name:** Chat Header

**Components:**

**2.1 Forbes Logo**
- **Field Name:** Header Logo
- **Type:** Image
- **Dimensions:** 135px x 17px
- **Source:** /forbes-advisor-logo.svg
- **Alt Text:** "Forbes Advisor"
- **Position:** Left-aligned, 14px vertical padding

**2.2 Close Button**
- **Field Name:** Close Chat Button
- **Type:** Icon button
- **Dimensions:** 32px x 32px circle
- **Icon:** X icon (16x16px, #666666 stroke)
- **Behavior:**
  - Hover: Background #F0F0F0, scale 1.1, rotate 90deg
  - Click: Triggers slideDownFadeOut animation
  - Resets all chat state after animation completes
- **Transition:** All properties 200ms

**Header Styling:**
- Background: White
- Shadow: 0px 4px 8px -1px rgba(0,0,0,0.10)
- Padding: 14px 16px
- Position: Sticky top

---

### 3. Conversation Flow System

### 3.1 Conversation Questions Configuration

**Question Structure:**
Each question has the following schema:
```
{
  id: string
  text: string (question copy)
  type: 'buttons'
  options: string[] (2-4 choices)
  field: enum (petType | budget | priority | coverageType)
}
```

**Question 1: Pet Type**
- **Question Text:** "What type of pet do you have?"
- **Character Limit:** 60 characters
- **Options:**
  - "Dog"
  - "Cat"
  - "Both"
- **Field Name:** petType
- **Required:** Yes
- **Default Value:** None

**Question 2: Budget**
- **Question Text:** "What's your monthly budget per pet?"
- **Character Limit:** 60 characters
- **Options:**
  - "Under $40"
  - "$40-60"
  - "$60-80"
  - "$80+"
- **Field Name:** budget
- **Required:** Yes
- **Default Value:** None

**Question 3: Priority**
- **Question Text:** "What matters most to you?"
- **Character Limit:** 60 characters
- **Options:**
  - "Lowest Price"
  - "Best Coverage"
  - "Customer Satisfaction"
  - "Fast Claims"
- **Field Name:** priority
- **Required:** Yes
- **Default Value:** None

**Question 4: Coverage Type**
- **Question Text:** "What type of coverage do you need?"
- **Character Limit:** 80 characters
- **Options:**
  - "Accident Only"
  - "Accident & Illness"
  - "Comprehensive with Wellness"
- **Field Name:** coverageType
- **Required:** Yes
- **Default Value:** None

---

### 3.2 Message Components

**A. Bot Messages**

**Field Group Name:** Bot Message Block

**A1. Initial Greeting Message**
- **Field Name:** Greeting Text
- **Type:** Multi-line text
- **Font:** Work Sans, 17px, line-height 22px, black
- **Character Limit:** 200 characters
- **Default Text:** "Hi! 👋 I'll help you find the perfect pet insurance provider. Let's get started!"
- **Typing Effect:** Enabled (20ms per character)
- **Editable:** Yes (CMS)

**A2. Question Messages**
- **Type:** Multi-line text
- **Font:** Work Sans, 17px, line-height 22px, black
- **Character Limit:** 120 characters per question
- **Typing Effect:** Enabled (20ms per character)
- **Display:** Left-aligned
- **Margin:** 24px bottom

**A3. Acknowledgment Messages**
- **Type:** Multi-line text
- **Font:** Work Sans, 17px, line-height 22px, black
- **Character Limit:** 400 characters
- **Typing Effect:** Enabled (20ms per character)
- **Content:** Context-aware based on user response
- **Editable:** Yes (CMS with field-specific templates)

**Acknowledgment Message Rules:**

| Question Field | Response | Acknowledgment Template | Character Limit |
|---------------|----------|------------------------|-----------------|
| petType | "dog" | "Great choice! Dogs are wonderful companions. In our analysis, dog owners typically spend 15-20% more on pet insurance due to higher injury rates from their active lifestyles. This makes choosing the right coverage even more important." | 380 characters |
| petType | "cat" | "Perfect! Cats make amazing pets. While cats generally have lower premium costs, they're prone to specific conditions like kidney disease and dental issues as they age. Indoor cats especially benefit from comprehensive coverage." | 360 characters |
| petType | "both" | "Awesome! Multiple pets can be such a joy. We recommend looking for multi-pet discounts, which can save you 5-10% per additional pet. Many families find the savings significant when covering 2+ animals." | 280 characters |
| budget | "under $40" | "Understood! Budget-friendly options are important. We often recommend that pet owners budget 1-3% of their income for pet insurance. At this price point, accident-only plans can provide essential protection against major emergencies like broken bones or ingested objects." | 400 characters |
| budget | "$40-60" | "Perfect! That's a solid mid-range budget. Our analysis shows this range typically covers comprehensive accident + illness plans with 80% reimbursement rates. This is often the 'sweet spot' where you get excellent value without overpaying." | 320 characters |
| priority | "lowest price" | "Smart approach! Finding affordable coverage is key. We consistently advise that the cheapest plan isn't always the best value—look for plans with reasonable deductibles and no annual caps. A slightly higher premium can save thousands if your pet needs major treatment." | 380 characters |
| priority | "best coverage" | "Excellent choice! Comprehensive protection is valuable. The best coverage typically includes hereditary conditions, alternative therapies, and behavioral treatments. We recommend plans covering 80-90% of eligible expenses with annual limits of $10K+." | 340 characters |
| coverageType | "accident only" | "Got it! Accident-only plans can be very cost-effective. These plans are ideal for young, healthy pets and budget-conscious owners. They typically cover emergencies like broken bones, cuts, and toxic ingestion—which can cost $3,000-$15,000+ without insurance." | 360 characters |
| coverageType | "comprehensive with wellness" | "Excellent! Comprehensive coverage gives you peace of mind. Adding wellness coverage pays for itself if you're diligent about preventive care. Plans covering routine exams, vaccines, and dental cleanings can save $500-$1,200 annually." | 320 characters |

**A4. Processing Messages**
- **"Perfect! Let me find the best matches for you..."**
  - Typing: Enabled
  - Duration: ~1 second
- **"Analyzing results..."**
  - Typing: Enabled
  - Duration: ~800ms
  - Followed by 5-second pause (simulated processing)
- **"Thanks—here are 3 strong fits based on your preferences"**
  - Typing: Enabled
  - Displays before table render

---

**B. User Messages**

**Field Group Name:** User Message Block

**B1. Button Response Messages**
- **Type:** Single-line text
- **Font:** Work Sans, 17px, line-height 22px, black
- **Background:** #F8F8FA
- **Padding:** 14px horizontal, 7px vertical
- **Border-radius:** 16px
- **Display:** Right-aligned
- **Max-width:** 649px
- **Content:** Exact copy of button clicked
- **Hover:** Scale 1.02, shadow-lg (200ms transition)

**B2. Text Input Response Messages**
- Same styling as B1
- Content: User's typed input
- Character Limit: 500 characters
- Display: Right-aligned with timestamp

---

**C. Message Separators**
- **Type:** Horizontal divider
- **Appearance:** 1px solid #E5E5E5
- **Spacing:** 16px top/bottom
- **Display:** After each user message

---

### 3.3 Answer Options (Buttons)

**Field Group Name:** Answer Button Group

**Button Styling:**
- **Height:** 56px
- **Padding:** 16px horizontal
- **Background:** #F8F8FA
- **Border:** 1px solid #BEBEBE
- **Border-radius:** 28px
- **Font:** Work Sans, 14px, font-weight 600, line-height 20px
- **Color:** #1D1D1F
- **Layout:** Flex-wrap, gap 8px, right-aligned
- **Hover State:**
  - Scale: 1.05
  - Shadow: 0px 2px 6px rgba(0,0,0,0.15)
  - Transition: 200ms ease
- **Active State:**
  - Scale: 0.98
- **Disabled State:**
  - Opacity: 0.5
  - Cursor: not-allowed

**Behavior:**
- Minimum: 2 buttons
- Maximum: 4 buttons
- Display: Only for most recent unanswered question
- Hide after selection
- Disabled during processing state

---

### 4. AI Processing Layer

### 4.1 Claude API Integration

**API Configuration:**
- **Endpoint:** https://api.anthropic.com/v1/messages
- **Model:** claude-sonnet-4-20250514
- **Max Tokens:** 200 (for efficiency)
- **Headers Required:**
  - Content-Type: application/json
  - x-api-key: [API Key via environment variable]
  - anthropic-version: 2023-06-01

**Function Name:** parseWithClaude()

**Input Parameters:**
- userInput: string (user's text response)
- currentQuestion: ConversationQuestion object

**Processing Logic:**
The AI receives a structured prompt containing:
1. Current question field context
2. User's raw response text
3. Field-specific extraction instructions
4. Expected output format (JSON)

**Response Format:**
```json
{
  "extracted_value": "normalized value matching expected format",
  "confidence": "high" | "medium" | "low"
}
```

**Confidence Levels:**

| Confidence | Criteria | Example |
|-----------|----------|---------|
| high | Direct match to expected values | User: "I have a dog" → extracted: "dog" |
| medium | Interpretable but not exact match | User: "around fifty bucks" → extracted: "$40-60" |
| low | Ambiguous or unclear input | User: "not sure yet" → extracted: "[best guess]" |

**Error Handling:**
- API Timeout: Fallback to lowercase user input, confidence "low"
- Rate Limit: Display error message, suggest button options
- Invalid Response: Retry once, then fallback
- Network Error: Graceful degradation to button-only mode

**Privacy & Security:**
- No user data stored beyond session
- API responses not logged in production
- API key stored as environment variable
- HTTPS-only communication

---

### 4.2 Text Input Processing

**Acknowledgment by Confidence Level:**

**High Confidence:**
- Use standard field-specific acknowledgment template
- Example: "Great choice! Dogs are wonderful companions..."

**Medium Confidence:**
- Use generic acknowledgment with extracted value
- Template: "Thanks! I think you mentioned '[extracted_value]'. Being specific about your needs helps us provide the most accurate recommendations."
- Character Limit: 180 characters

**Low Confidence:**
- Use neutral acknowledgment
- Template: "Got it! Even uncertain preferences help us narrow down the best options for you."
- Character Limit: 120 characters

---

### 5. Recommendation Engine

### 5.1 Matching Algorithm

**Function Name:** calculateMatchScore()

**Input:**
- userPreferences: UserPreferences object
- providerName: string

**Output:**
```typescript
{
  score: number (0-1 normalized)
  reasons: string[] (max 3 reasons)
}
```

**Scoring Weights:**

| Preference Type | Max Points | Weight |
|----------------|------------|--------|
| Pet Type Match | 2 | 18.2% |
| Budget Match | 3 | 27.3% |
| Priority Match | 4 | 36.4% |
| Coverage Type Match | 2 | 18.1% |
| **Total** | **11** | **100%** |

**Scoring Rules:**

**Pet Type (Max 2 points):**
- Always awards full 2 points if data exists
- Generates reason showing cost for selected pet type

**Budget (Max 3 points):**
- Calculates average of dog + cat cost
- Compares against user's budget range
- 3 points: Perfect fit within range
- 2 points: Close to range (within $10)
- 0 points: Outside range
- Reason template: "Perfect fit for your [budget] budget (~$[avg]/month)"

**Priority (Max 4 points):**

| Priority | Scoring Logic | 4 Points | 2 Points |
|----------|--------------|----------|----------|
| Lowest Price | Based on average cost | <$50/mo | $50-70/mo |
| Customer Satisfaction | Based on CSI rating | ≥8.0/10 | 6.0-7.9/10 |
| Fast Claims | Claims satisfaction data | "Very satisfied" | "Somewhat satisfied" |
| Best Coverage | Plan category match | "all-round coverage" | "overall" |

**Coverage Type (Max 2 points):**
- 2 points: Category name contains coverage keyword
- 1 point: Generic comprehensive coverage mention
- 0 points: No match

**Fallback Scoring:**
- If no criteria match, provider still gets base reason
- Default reason: "Solid [category] option"
- Ensures all providers can appear in results

---

### 5.2 Recommendation Filtering

**Minimum Score Threshold:**
- Score > 0.3 (30% match) required to appear
- Prevents irrelevant recommendations

**Result Limits:**
- Top 3 providers shown
- Sorted by score (descending)
- Ties broken by provider alphabetical order

**No Results Scenario:**
- If <3 providers meet threshold, show all qualifying providers
- If 0 providers meet threshold, lower threshold to 0.2
- Display message: "These providers may partially match your needs"

---

### 6. Recommendation Table Display

**Field Group Name:** Recommendation Table

**Table Structure:**
- **Type:** HTML table
- **Background:** White
- **Border:** 1px solid #E5E5E5
- **Border-radius:** 8px
- **Min-width:** 600px
- **Overflow:** Horizontal scroll on mobile

**Column Configuration:**

| Column | Header Text | Width | Content Type |
|--------|------------|-------|--------------|
| 1 | Provider | 25% | Provider name + category badge |
| 2 | Why It Matches | 35% | Match reasons (bullet list) |
| 3 | Dog Cost | 15% | Monthly cost string |
| 4 | Cat Cost | 15% | Monthly cost string |
| 5 | Match Score | 10% | Progress bar + percentage |

---

**Column Details:**

**6.1 Provider Column**

**Provider Name:**
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** #1D1D1F
- **Display:** Top line

**Category Badge:**
- **Font:** Work Sans, 12px, font-weight 400
- **Color:** #666666
- **Display:** Below provider name
- **Character Limit:** 50 characters
- **Transform:** Replace line breaks with spaces

**6.2 Why It Matches Column**

**Match Reasons List:**
- **Type:** Bulleted list (custom bullets)
- **Bullet:** Green dot (•) #10B981
- **Font:** Work Sans, 14px, font-weight 400
- **Color:** #4B5563
- **Spacing:** 4px between items
- **Max Items:** 2 displayed (top 2 reasons)
- **Character Limit:** 120 characters per reason

**6.3 Dog Cost Column**
- **Font:** Work Sans, 14px, font-weight 500
- **Color:** #1D1D1F
- **Format:** "$XX" (e.g., "$52")
- **Display:** "N/A" if data missing

**6.4 Cat Cost Column**
- Same styling as Dog Cost
- Independent data field

**6.5 Match Score Column**

**Progress Bar:**
- **Container Width:** 64px
- **Container Height:** 8px
- **Background:** #E5E7EB
- **Border-radius:** 9999px (full pill)
- **Fill Color:** #3B82F6 (blue)
- **Fill Width:** Dynamic (score * 100%)
- **Transition:** Width 300ms ease

**Percentage Label:**
- **Font:** Work Sans, 12px, font-weight 500
- **Color:** #6B7280
- **Format:** "XX%" (e.g., "87%")
- **Position:** Right of progress bar
- **Spacing:** 8px left margin

---

**Row Styling:**
- **Header Row:**
  - Background: #F9FAFB
  - Border-bottom: 1px solid #E5E7EB
  - Font-weight: 600
  - Padding: 12px 16px
  - Top corners: 8px border-radius

- **Data Rows:**
  - Padding: 16px
  - Border-bottom: 1px solid #F3F4F6
  - Alternating backgrounds:
    - Even rows: white
    - Odd rows: #FAFBFC
  - Hover: Background #F9FAFB, transition 150ms

---

### 7. Call-to-Action Buttons

**Field Group Name:** CTA Button Group

**7.1 Individual Provider Buttons**

**Button Configuration:**
- **Count:** 1 per recommended provider (up to 3)
- **Height:** 56px
- **Padding:** 16px horizontal
- **Background:** #007AC8 (primary blue)
- **Border-radius:** 28px
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** White
- **Layout:** Horizontal flex, gap 8px, right-aligned
- **Shadow:** 0px 0px 0.5px rgba(0, 0, 0, 0.11) inset

**Button Text:**
- **Template:** "Get Quotes from [Provider Name]"
- **Character Limit:** 40 characters total
- **Dynamic:** Provider name inserts from recommendation

**Icon:**
- **Type:** Arrow up-right (diagonal)
- **Size:** 20x20px
- **Color:** White
- **Stroke-width:** 2px
- **Position:** Right of text

**Hover State:**
- Background: Darken to #006bb3
- Scale: 1.05
- Shadow: 0px 4px 12px rgba(0, 122, 200, 0.3)
- Transition: 200ms ease

**Click Behavior:**
- Opens provider's applyNowUrl in new tab
- Tracks click event with provider name
- No page navigation (stays on site)

---

**7.2 "Get Quotes from All" Button**

**Button Configuration:**
- **Height:** 56px
- **Padding:** 16px horizontal
- **Background:** Black
- **Border:** 1px solid black
- **Border-radius:** 28px
- **Font:** Work Sans, 14px, font-weight 600
- **Color:** White
- **Position:** Rightmost in button row

**Button Text:**
- **Fixed Text:** "Get Quotes from All"
- **Non-editable**

**Hover State:**
- Background: #1F1F1F
- Scale: 1.05
- Shadow: 0px 4px 12px rgba(0, 0, 0, 0.4)

**Click Behavior:**
- Triggers resetChat() function
- Clears all messages and state
- Returns to initial greeting
- Asks first question again
- Tracks "restart" event

---

### 8. Suggested Prompts Section

**Field Group Name:** Quick Prompts

**Display Conditions:**
- Show: When messages.length === 0 OR showRecommendations === false
- Hide: When recommendations table is visible

**Layout:**
- **Position:** Above input box, below messages area
- **Padding:** 24px horizontal, 16px bottom
- **Gap:** 8px between buttons

**Prompt Button Count:**
- Minimum: 3 prompts
- Maximum: 3 prompts (initial release)
- Configurable: Yes (CMS can modify text and count)

---

**Prompt Buttons Configuration:**

**Prompt 1:**
- **Text:** "Cheapest pet insurance for a dog"
- **Character Limit:** 50 characters
- **Intent:** Sets priority = "lowest price"

**Prompt 2:**
- **Text:** "Best coverage for a cat"
- **Character Limit:** 50 characters
- **Intent:** Sets petType = "cat", priority = "best coverage"

**Prompt 3:**
- **Text:** "Which plan covers dental?"
- **Character Limit:** 50 characters
- **Intent:** Sets coverageType = "comprehensive with wellness", priority = "best coverage"

**Button Styling:**
- **Height:** Auto (content-based)
- **Padding:** 10px
- **Background:** White
- **Shadow:** 0px 4px 8px -1px rgba(0,0,0,0.10)
- **Border:** 1px solid #F4F5F8
- **Border-radius:** 8px
- **Font:** Work Sans, 12px, line-height 18px
- **Color:** #606F7F
- **Layout:** Inline-flex with icon

**Icon:**
- **Type:** Arrow diagonal (up-right)
- **Size:** 20x20px
- **Color:** #606F7F
- **Position:** Right of text

**Hover State:**
- Background: #F9FAFB
- Scale: 1.05
- Shadow: 0px 6px 12px rgba(0,0,0,0.15)
- Transition: 200ms

**Click Behavior:**
- Adds prompt text as user message
- Sets initial preferences based on intent mapping
- Starts conversation flow at Question 1
- Skips questions already answered by prompt intent

---

### 9. Text Input Section

**Field Group Name:** Chat Input

**9.1 Input Container**
- **Position:** Fixed at bottom of chat overlay
- **Padding:** 16px horizontal, 10px vertical
- **Background:** White
- **Shadow:** 0px 4px 8px -1px rgba(0,0,0,0.10)
- **Border:** 1px solid #CED4DB
- **Border-radius:** 8px
- **Layout:** Flex row with gap 10px
- **Focus State:**
  - Shadow: 0px 6px 12px rgba(0,0,0,0.18)
  - Ring: 2px #007AC8 with 20% opacity
  - Border: 1px solid #007AC8

**9.2 Search Icon**
- **Source:** /star-06.svg
- **Size:** 24x24px
- **Position:** Left side of input
- **Color:** Defined in SVG

**9.3 Text Input Field**

**Field Configuration:**
- **Type:** Single-line text input
- **Placeholder:** "Hi there! What are you interested in..."
- **Character Limit:** 500 characters
- **Font:** Work Sans, 16px, font-weight 500, line-height 24px
- **Color:** Black
- **Placeholder Color:** #B6B6B6
- **Background:** Transparent
- **Border:** None (handled by container)
- **Flex:** 1 (grows to fill space)

**Focus State:**
- Placeholder color: #999999 (darker)
- Outline: None (container handles focus)

**Disabled State:**
- Opacity: 0.5
- Cursor: not-allowed
- Background: #F8F8FA

**Keyboard Shortcuts:**
- Enter: Submit message (if not processing)
- Shift+Enter: Not supported (single-line only)

**9.4 Send Button**

**Button Configuration:**
- **Width:** 48px (min)
- **Height:** 48px
- **Background:** #007AC8
- **Border-radius:** 44px (circle)
- **Shadow:** 0px 4px 8px -1px rgba(0,0,0,0.10)
- **Icon Source:** /arrow-right-white.svg
- **Icon Size:** 24x24px
- **Hover State:**
  - Background: #0066a3
  - Scale: 1.05
  - Shadow: 0px 6px 12px rgba(0,122,200,0.3)
- **Active State:**
  - Scale: 0.95
- **Disabled State:**
  - Opacity: 0.5
  - Cursor: not-allowed
  - No hover effects

**Processing State:**
- Replace icon with loading spinner
- Spinner: Loader2 component (Lucide)
- Size: 24x24px
- Color: White
- Animation: Spin (continuous)

**Click Behavior:**
- Disabled if input is empty or processing
- Submits text to handleTextSubmit()
- Clears input field after submission
- Sets processing state to true

---

### 10. Processing Indicators

**10.1 Typing Animation**

**Component:** TypingText

**Configuration:**
- **Speed:** 20ms per character (default)
- **Can be adjusted:** Yes (via prop)
- **Display:** Character-by-character reveal
- **Callback:** onComplete fires when typing finishes

**Visual Feedback:**
- Text appears progressively left to right
- No cursor or blinking indicator
- Smooth, natural reading pace

**Performance:**
- Uses setTimeout (not setInterval)
- Cleans up on unmount
- Ref-based callback management to prevent stale closures

---

**10.2 Processing Message**

**Display Conditions:**
- Shows when isProcessing === true
- Positioned in message stream

**Visual Design:**
- **Background:** #F9FAFB
- **Padding:** 16px
- **Border-radius:** 16px
- **Animation:** Pulse (opacity oscillation)
- **Layout:** Flex row with gap 8px
- **Alignment:** Left (bot message style)

**Content:**
- **Icon:** Loader2 (spinning)
  - Size: 16x16px
  - Color: #3B82F6 (blue)
  - Animation: Spin (continuous)
- **Text:** "Analyzing your response..."
  - Font: Work Sans, 17px, line-height 22px
  - Color: Black

---

### 11. State Management

**State Variables:**

| State Name | Type | Initial Value | Purpose |
|-----------|------|---------------|---------|
| messages | Message[] | [] | Stores all chat messages |
| currentQuestionIndex | number | 0 | Tracks conversation progress |
| userPreferences | UserPreferences | {} | Stores collected answers |
| showRecommendations | boolean | false | Controls table display |
| textInput | string | "" | Current input field value |
| isProcessing | boolean | false | Loading state for AI calls |
| isClosing | boolean | false | Closing animation state |
| typingMessageId | string \| null | null | ID of message currently typing |
| isTypingActive | boolean | false | Global typing indicator |
| isChatInitialized | boolean | false | Prevents double initialization |

**State Persistence:**
- No localStorage persistence
- State resets on chat close
- Session-only data retention
- No server-side state

---

### 12. Responsive Design

**Breakpoint Behavior:**

**Mobile (<640px):**
- Chat overlay: Full screen width, 100vh height
- Sticky "Ask our AI" button: Floats separately above bar
- Input section: Sticky at bottom
- Table: Horizontal scroll enabled
- Button groups: Wrap to multiple rows
- Suggested prompts: Stack vertically

**Tablet (640px-1024px):**
- Chat overlay: Max-width 1260px, centered
- Both "Ask our AI" buttons visible
- Table: Horizontal scroll if needed
- Buttons: May wrap based on text length

**Desktop (1024px+):**
- Chat overlay: Max-width 1260px, centered
- Full button text visible
- Table: Full width, no scroll
- Hover effects enabled
- All features fully accessible

**Touch Optimization:**
- Minimum tap target: 44x44px (iOS guidelines)
- Increased button padding on mobile
- Scroll areas have momentum scrolling
- No hover effects on touch devices

---

### 13. Animation Specifications

**Chat Open Animation:**
- **Name:** slideUpFadeIn
- **Duration:** 300ms
- **Easing:** ease-out
- **From:** translateY(100%), opacity 0
- **To:** translateY(0), opacity 1

**Chat Close Animation:**
- **Name:** slideDownFadeOut
- **Duration:** 200ms
- **Easing:** ease-in
- **From:** translateY(0), opacity 1
- **To:** translateY(100%), opacity 0

**Message Entry Animation:**
- **Name:** messageSlideIn
- **Duration:** 300ms
- **Easing:** ease-out
- **Delay:** Staggered by 100ms per message
- **Fill-mode:** both

**Button Hover Animation:**
- **Properties:** transform, box-shadow
- **Duration:** 200ms
- **Easing:** ease

---

## CMS Integration

**Editable Fields (via CMS):**

1. **Greeting Message**
   - Field: Initial welcome text
   - Type: Text area
   - Character limit: 200

2. **Question Copy**
   - Field: All 4 question texts
   - Type: Text input
   - Character limits: 60-80 per question

3. **Answer Options**
   - Field: Button text for each question
   - Type: Multi-entry text fields
   - Minimum: 2 options per question
   - Maximum: 4 options per question

4. **Acknowledgment Templates**
   - Field: Response templates by field + option
   - Type: Rich text editor
   - Character limits: 280-400 per template
   - Supports bold, italic, basic formatting

5. **Suggested Prompts**
   - Field: Prompt button text + intent mapping
   - Type: Multi-entry with dropdown (intent)
   - Maximum: 5 prompts

6. **Provider Data**
   - Fields: All insurance provider information
   - Tables: costs, plan_details, user_opinions, claims_data
   - Editable: All fields except provider name
   - Real-time: Updates reflect immediately

**Non-Editable (Code-level):**
- Scoring algorithm weights
- API configuration
- Animation timings
- Component structure
- Button styling (colors, sizing)

**Toggle Controls (CMS):**
- Enable/Disable chat globally
- Enable/Disable suggested prompts
- Enable/Disable typing animations
- Enable/Disable individual providers in recommendations

---

## Tracking & Analytics

**Event Tracking Requirements:**

**Widget Identifier:**
- All events tagged with: `widgetName: "ai_chat_assistant"`
- Differentiates from other page widgets

**Events to Track:**

1. **Chat Opened**
   - Event: `chat_opened`
   - Properties:
     - `entry_point`: "sticky_bar" | "floating_button"
     - `page_scroll_depth`: percentage
     - `time_on_page`: seconds

2. **Question Answered**
   - Event: `question_answered`
   - Properties:
     - `question_id`: "pet-type" | "budget" | "priority" | "coverage-type"
     - `question_number`: 1-4
     - `answer_method`: "button" | "text_input"
     - `answer_value`: selected/entered value
     - `ai_confidence`: "high" | "medium" | "low" (text input only)

3. **Conversation Abandoned**
   - Event: `conversation_abandoned`
   - Properties:
     - `last_question_reached`: question number
     - `questions_answered`: count
     - `time_in_chat`: seconds
     - `abandonment_reason`: "closed" | "navigated_away"

4. **Recommendations Displayed**
   - Event: `recommendations_shown`
   - Properties:
     - `recommendation_count`: 1-3
     - `top_provider`: provider name
     - `top_match_score`: percentage
     - `user_preferences`: JSON object

5. **CTA Clicked**
   - Event: `cta_clicked`
   - Properties:
     - `button_type`: "provider_specific" | "all_providers"
     - `provider_name`: name (if specific)
     - `match_score`: percentage (if specific)
     - `recommendation_position`: 1-3

6. **Chat Reset**
   - Event: `chat_reset`
   - Properties:
     - `at_stage`: "recommendations" | "mid_conversation"
     - `previous_top_provider`: provider name

7. **Suggested Prompt Clicked**
   - Event: `suggested_prompt_clicked`
   - Properties:
     - `prompt_text`: clicked prompt
     - `prompt_position`: 1-3

8. **AI Error**
   - Event: `ai_error`
   - Properties:
     - `error_type`: "api_timeout" | "rate_limit" | "network_error"
     - `question_field`: current question
     - `user_input_length`: character count

**Analytics Goals:**
- Funnel visualization: Q1 → Q2 → Q3 → Q4 → Recommendations → CTA
- Drop-off analysis at each question
- Average session duration
- Conversion rate by entry point
- Most popular providers by user segments

---

## Technical SEO and Performance

**Performance Requirements:**

1. **Load Time:**
   - Chat overlay initial render: <200ms
   - First greeting message display: <500ms
   - API response timeout: 10 seconds max

2. **Bundle Size:**
   - Chat component bundle: <50KB gzipped
   - Lazy load chat on first open (not on page load)
   - Code splitting for AI processing logic

3. **Accessibility:**
   - WCAG 2.1 Level AA compliance
   - Keyboard navigation support (Tab, Enter, Escape)
   - ARIA labels on all interactive elements
   - Screen reader announcements for new messages
   - Focus management on chat open/close
   - Color contrast ratio ≥4.5:1

4. **Mobile Optimization:**
   - Touch targets ≥44px
   - No horizontal scroll (except table)
   - Virtual keyboard handling (input stays visible)
   - Reduced motion support (prefers-reduced-motion)

**SEO Considerations:**
- Chat content not indexed (no SEO value needed)
- Structured data for recommendations (JSON-LD)
- No impact on Core Web Vitals
- Lazy-loaded assets don't block rendering

---

## Design System Specifications

**Color Palette:**

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary CTA | Blue | #007AC8 | Send button, provider CTAs |
| Primary CTA Hover | Dark Blue | #0066a3 | Hover state |
| Bot Message Text | Black | #000000 | Main chat text |
| User Message BG | Light Gray | #F8F8FA | Message bubbles |
| Button BG | Light Gray | #F8F8FA | Answer buttons |
| Button Border | Gray | #BEBEBE | Button outlines |
| Input Border | Gray | #CED4DB | Input field outline |
| Placeholder Text | Light Gray | #B6B6B6 | Input placeholder |
| Secondary Text | Dark Gray | #606F7F | Icons, labels |
| Success Green | Green | #10B981 | Match reason bullets |
| Progress Bar | Blue | #3B82F6 | Match score fill |

**Typography Scale:**

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Section) | Work Sans | 24px | 700 | 30px |
| Body (Messages) | Work Sans | 17px | 400 | 22px |
| Buttons | Work Sans | 14px | 600 | 20px |
| Input | Work Sans | 16px | 500 | 24px |
| Table Text | Work Sans | 14px | 400-600 | 20px |
| Captions | Work Sans | 12px | 400 | 18px |

**Spacing System:**
- **Base unit:** 4px
- **Gaps:** 8px, 12px, 16px, 24px
- **Padding:** 8px (tight), 16px (normal), 24px (loose)
- **Margins:** 16px (small), 24px (medium), 40px (large)

**Border Radius:**
- **Small:** 8px (cards, containers)
- **Medium:** 16px (message bubbles)
- **Large:** 28px (buttons)
- **XLarge:** 48px (pill buttons)

**Shadows:**
- **Light:** 0px 2px 4px rgba(0,0,0,0.08)
- **Medium:** 0px 4px 8px rgba(0,0,0,0.10)
- **Heavy:** 0px 8px 16px rgba(0,0,0,0.15)
- **Chat Overlay:** 0px 0px 16px 4px rgba(125, 10, 248, 0.12)

---

## Dependencies

**Required Libraries:**
- React 18.2+
- TypeScript 4.9+
- Lucide React (icons)
- Tailwind CSS 3.4+

**External Services:**
- Anthropic Claude API
- Analytics platform (Google Analytics / Segment)

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
- Chat open rate: 15% of page visitors
- Conversation completion rate: 65%
- CTA click rate from recommendations: 25%
- Average session duration: 90 seconds
- Mobile vs desktop usage: 60/40 split
- AI accuracy (high confidence): 80%+

**Growth Targets (6-12 Months):**
- Chat open rate: 25%
- Conversation completion rate: 75%
- CTA click rate: 35%
- Provider quote request increase: 40%
- Return visitor chat usage: 50%

---

## Appendix

### A. User Preference Schema

```typescript
interface UserPreferences {
  petType?: 'dog' | 'cat' | 'both'
  budget?: 'under $40' | '$40-60' | '$60-80' | '$80+'
  priority?: 'lowest price' | 'best coverage' | 'customer satisfaction' | 'fast claims'
  coverageType?: 'accident only' | 'accident & illness' | 'comprehensive with wellness'
}
```

### B. Message Schema

```typescript
interface Message {
  id: string  // Unique identifier
  type: 'bot' | 'user' | 'table'
  text: string
  options?: ConversationQuestion  // For bot messages with buttons
  timestamp: Date
  isTyping?: boolean  // Typing animation state
  tableData?: ProviderRecommendation[]  // For table messages
  showOptions?: boolean  // Controls button visibility
  onComplete?: () => void  // Callback after typing
}
```

### C. Provider Recommendation Schema

```typescript
interface ProviderRecommendation {
  provider: string
  score: number  // 0-1 normalized
  matchReasons: string[]  // Max 3
  costData?: CostData
  planDetails?: PlanDetails
  userOpinion?: UserOpinion
  claimsData?: ClaimsData
  plan?: InsurancePlan
}
```

---

**Document Version:** 1.0
**Last Updated:** 2025-01-10
**Next Review:** [To be scheduled]
**Approved By:** [Stakeholder names]

---

*This FRD serves as the single source of truth for the AI Chat Assistant Module development. Any changes must be documented via version control with approval from product ownership.*
