This document outlines our collaborative plan to create the documentation for the JRS Thailand web application. We will use this file as our single source of truth. The core of this plan is to first define user journeys, capture them, and then generate the documentation content.

## 1. Project Overview

*   **Objective:** To create a clear, user-friendly documentation website using Astro Starlight, focusing on the user journey and data flow within the application.
*   **Content Focus:**
    1.  An introduction to the documentation.
    2.  A detailed "how-to" guide for the **Finance Menu**, following a step-by-step user journey.
    3.  A detailed "how-to" guide for the **Reception Menu**, following a step-by-step user journey.
*   **Technology & Workflow:**
    *   **Framework:** Astro Starlight (pre-installed).
    *   **Screenshot Automation:** Puppeteer with `puppeteer-mcp` to capture specific UI elements during a scripted user journey. Use wider dimension for puppeteer browser window since side menu is hidden in smaller dimensions.
Visit jrsthailand.org and login with yethi.hahtwe@jrs.net and the password is the same email.
    *   **Content Generation:** You will generate the documentation text (`.mdx` files) based on the user journeys and the screenshots created.
    *   **Hosting:** GitHub Pages.

## 2. Development Phases & Prompts

Follow these phases in order. You can use the suggested prompt for each step to ask me to generate the necessary code or provide instructions.

### Phase 1: User Journey Analysis & Screenshot Generation

**Objective:** Create steps that mimic a user's actions in the Finance and Reception menus, taking screenshots at each key step.

*   **Step 1.1: Define User Journeys & Create the Screenshots**
    *   **Action:** We will now perform two distinct user journeys, logging in once and then navigating through each menu.

### Phase 2: Documentation Content Generation

**Objective:** Use the screenshots from Phase 1 to create comprehensive, step-by-step guides.

*   **Step 2.1: Configure Astro Starlight**
    *   **Action:** We need to configure the site title and sidebar navigation in your main Astro config file.
    *   **Your Prompt to Me:**
        > "For Step 2.1, please provide the complete code for `astro.config.mjs`. The site name should be 'JRS Docs'. The sidebar should have an 'Introduction', and a 'URP' section containing 'Finance Menu' and 'Reception Menu'."

*   **Step 2.2: Generate the Introduction Page (`index.mdx`)**
    *   **Action:** Create the main landing page for the documentation site.
    *   **Your Prompt to Me:**
        > "For Step 2.2, please generate the full content for `src/content/docs/index.mdx`. It should have a title 'Welcome', a suitable description, and introduce the purpose of this documentation for the JRS URP application."

*   **Step 2.3: Generate the Finance Menu Guide**

*   **Step 2.4: Generate the Reception Menu Guide**
### Phase 3: Deployment to GitHub Pages

## Documentation Style Guidelines

### List Headings
- Use hyphens (-) instead of colons (:) in list headings
- Example: **Export and Control Options -** (correct)
- Example: **Export and Control Options:** (incorrect)

### Content Guidelines
- Avoid adding concluding paragraphs that summarize benefits or business value
- Focus on functional descriptions and practical usage
- Don't include paragraphs like "This feature ensures..." or "This provides..."
- Keep content concise and action-oriented

This ensures consistent formatting across all documentation pages.
