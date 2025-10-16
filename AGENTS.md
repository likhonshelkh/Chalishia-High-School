# AGENTS.md

This document provides essential guidelines for AI agents and human developers contributing to the Board of Intermediate and Secondary Education, Jashore project. Following these instructions ensures consistency, quality, and efficiency.

## 1. Project Overview

This repository contains the code for the official digital platform of the **Board of Intermediate and Secondary Education, Jashore**. The primary goal is to provide a modern, accessible, and reliable portal for students, educators, and administrative staff.

**Key Functions:**
*   Publishing results (HSC, SSC, JSC).
*   Managing student and institution registration.
*   Distributing official notices and circulars.
*   Providing access to online services and forms.
*   Serving as the official source of information for the board.

The project must reflect the authority and reliability of an official government education board.

## 2. UI/UX and Design Guidelines

This project fully adopts a user-centric UI/UX philosophy. All contributions must adhere strictly to the established design system to maintain a cohesive and professional user experience.

### Color Palette (Grid)

The color scheme is based on the official branding of the Jashore Board and national symbols. Use these variables consistently.

| Role          | Color Name      | Hex Code    | Usage                                        |
| :------------ | :-------------- | :---------- | :------------------------------------------- |
| **Primary**   | Board Green     | `#006A4E`   | Headers, primary buttons, important links    |
| **Secondary** | Notice Orange   | `#FF8C00`   | Banners, call-to-action sections, highlights |
| **Accent**    | Official Gold   | `#DAA520`   | Icons, secondary buttons, decorative elements|
| **Text**      | Dark Charcoal   | `#333333`   | Main body text, headings                     |
| **Text Muted**| Medium Gray     | `#6c757d`   | Subheadings, helper text, captions         |
| **Background**| Light Gray      | `#F8F9FA`   | Page backgrounds, card backgrounds           |
| **Border**    | Subtle Gray     | `#DEE2E6`   | Borders for cards, tables, and inputs        |

### Typography (Bangla Font CDN)

To ensure consistent and readable Bengali text across all devices, we use the **Hind Siliguri** font, served from a CDN.

1.  **Include the Font in HTML:** Add the following line to the `<head>` section of your main `index.html` file.
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
    ```

2.  **Apply the Font in CSS:** Use the following `font-family` stack in your global stylesheet.
    ```css
    body {
      font-family: 'Hind Siliguri', sans-serif;
    }
    ```

## 3. Build and Test Commands

This project uses `pnpm` for package management for efficiency.

- **Install dependencies:**
  ```bash
  pnpm install
  ```
- **Run the development server:**
  ```bash
  pnpm dev
  ```
- **Build for production:**
  ```bash
  pnpm build
  ```
- **Run all tests:**
  ```bash
  pnpm test
  ```
- **Run linter to check for code style issues:**
  ```bash
  pnpm lint
  ```

## 4. Testing Instructions

- Every new feature or bug fix must be accompanied by relevant unit or integration tests.
- Ensure all tests pass (`pnpm test`) before opening a pull request.
- For targeted testing, you can specify a test file: `pnpm vitest run <path_to_test_file>`.
- Manually verify your changes on different screen sizes to ensure responsiveness.

## 5. Security Considerations

- **Data Sensitivity:** This platform handles sensitive personal information. Sanitize all user inputs to prevent XSS attacks and use parameterized queries to prevent SQL injection.
- **Authentication:** All administrative routes must be protected with robust authentication and authorization checks.
- **Dependencies:** Do not introduce new dependencies without approval. Regularly run `pnpm audit` to check for and fix known vulnerabilities.
- **Environment Variables:** All secret keys, API endpoints, and database credentials must be stored in `.env` files and never committed to the repository.

## 6. PR and Commit Guidelines

- **Branching:** Create new branches from `main` with the format `[type]/[short-description]` (e.g., `feat/hsc-result-page` or `fix/notice-display-bug`).
- **Commit Messages:** Use the [Conventional Commits](https://www.conventionalcommits.org/) specification.
  - `feat:` A new feature.
  - `fix:` A bug fix.
  - `docs:` Documentation only changes.
  - `style:` Changes that do not affect the meaning of the code (white-space, formatting).
  - `refactor:` A code change that neither fixes a bug nor adds a feature.
- **Pull Requests:**
  - The title should follow the Conventional Commits format.
  - The description must clearly explain the "what" and "why" of the changes.
  - Ensure all CI checks (linting, testing, building) are passing before requesting a review.
