# Context for ai-hypetrain Website

This document provides an overview and detailed instructions for creating and deploying the **ai-hypetrain** website—a bilingual blog (Polish and English) dedicated to testing various AI tools and ideas, evaluating whether they work well or not. The site features a custom component on the homepage to display metrics such as time spent, money spent, and money earned.

Current repository (root of this folder) is named ai-hypetrain.github.io so it shoud be ready page if you place static files in correct directory in the repository
---

## 1. Project Overview

- **Website Name:** ai-hypetrain
- **Purpose:** A blog to test different AI tools and ideas and document whether these ideas are good or bad.
- **Key Features:**
  - **Bilingual Content:** The website will support both Polish and English languages.
  - **Main Page Metrics:** A component will display how much time has been spent, money spent, and money earned.
  - **Static Site Generator:** Built using [Hugo](https://gohugo.io/).
  - **Theme:** Based on the [Hugo Theme Stack](https://themes.gohugo.io/themes/hugo-theme-stack/) (demo available [here](https://themes.gohugo.io/themes/hugo-theme-stack/)).
  - **Hosting:** Deployed on GitHub Pages.
  - **Deployment Workflow:** Uses GitHub Actions to build the site after each push.
  - **Content Creation:** New posts are created simply by committing and pushing markdown files to the repository.
  - **Google Analytics:** Integrated for tracking site traffic.

---

## 2. Project Structure and Components

- **Hugo Configuration:**

  - Use `config.toml` (or `config.yaml`) to set up the site.
  - Configure multilingual support, theme settings, and Google Analytics tracking ID.
  - Define custom parameters for the main page metrics component.

- **Content:**
  - Place posts under the `content/` directory in language-specific subdirectories (e.g., `content/pl/` and `content/en/`).
- **Theme:**
  - Utilize the [hugo-theme-stack](https://themes.gohugo.io/themes/hugo-theme-stack/). Include it as a Git submodule or add it directly to the project.
- **Static Files:**
  - Include assets such as images, styles, and the Google Analytics script in the `static/` folder.
- **Deployment:**
  - GitHub Actions workflow file (e.g., `.github/workflows/gh-pages.yml`) builds the Hugo site and deploys it to GitHub Pages upon a push.
- **License:**
  - The project is released under the MIT License (see below).

---

## 3. First Post Content

### Polish Version

```markdown
---
title: "Witaj w ai-hypetrain - pierwszy post"
date: 2025-03-07T00:00:00Z
language: "pl"
draft: false
---

Witajcie! To jest pierwszy post na blogu **ai-hypetrain**. Naszym celem jest testowanie różnych narzędzi AI oraz pomysłów, które oceniamy pod kątem ich przydatności i opłacalności. Na stronie głównej znajdziecie komponent pokazujący, ile czasu poświęciliśmy, ile pieniędzy wydaliśmy oraz ile zarobiliśmy.

W przyszłości planujemy publikacje o następujących tematach:

- Recenzje narzędzi AI
- Analizy trendów w technologii AI
- Case studies oraz przykłady wdrożeń
- Porady dotyczące wykorzystania AI w biznesie

Zapraszamy do śledzenia naszych testów i dzielenia się opiniami!

### English Version

---

title: "Welcome to ai-hypetrain - First Post"
date: 2025-03-07T00:00:00Z
language: "en"
draft: false

---

Hello! This is the first post on the **ai-hypetrain** blog. Our goal is to test various AI tools and ideas, evaluating their effectiveness and viability. On the homepage, you'll find a component that shows how much time we've spent, money spent, and money earned.

In the future, we plan to cover topics such as:

- AI tool reviews
- Analysis of AI technology trends
- Case studies and deployment examples
- Tips for using AI in business

Join us on our journey as we explore the world of AI!
```

