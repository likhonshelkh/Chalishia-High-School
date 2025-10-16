# AGENTS.md - AI and Developer Guidelines

This document provides essential guidelines for AI agents and human developers contributing to the **Chalishiya High School Management System** project. Following these instructions ensures consistency, quality, and efficiency.

## 1. Project Overview

This repository contains the code for a comprehensive school management system for **Chalishiya High School**. The goal is to create a modern, accessible, and reliable platform for students, teachers, parents, and administrators. The system must be lightweight and practical for a rural school environment.

## 2. UI/UX and Design Guidelines

A clean, user-friendly, and professional user experience is critical. All contributions must adhere strictly to the established design system.

### Color Palette

| Role          | Color Name      | Hex Code    | Usage                                        |
| :------------ | :-------------- | :---------- | :------------------------------------------- |
| **Primary**   | School Blue     | `#005A9C`   | Headers, primary buttons, important links    |
| **Secondary** | Success Green   | `#28A745`   | Success messages, confirmation buttons       |
| **Accent**    | Notice Yellow   | `#FFC107`   | Banners, highlights, warning messages        |
| **Text**      | Dark Charcoal   | `#333333`   | Main body text, headings                     |
| **Background**| Light Gray      | `#F8F9FA`   | Page backgrounds, card backgrounds           |
| **Border**    | Subtle Gray     | `#DEE2E6`   | Borders for cards, tables, and inputs        |

### Typography (Bengali Fonts)

To ensure consistent and readable Bengali text, this project mandates the use of specific fonts served from a CDN. The primary font is **Kalpurush**. Others may be used where appropriate.

**1. Kalpurush (Primary)**
*   **Embed in HTML:**
    ```html
    <link href="https://cdn.msar.me/fonts/kalpurush/font.css" rel="stylesheet">
    ```
*   **CSS Usage:**
    ```css
    body {
      font-family: 'Kalpurush', Arial, sans-serif !important;
    }
    ```

**2. Mukti**
*   **Embed in HTML:**
    ```html
    <link href="https://cdn.msar.me/fonts/mukti/font.css" rel="stylesheet">
    ```
*   **CSS Usage:**
    ```css
    .font-mukti {
      font-family: 'Mukti', Arial, sans-serif !important;
    }
    ```

**3. SiyamRupali**
*   **Embed in HTML:**
    ```html
    <link href="https://cdn.msar.me/fonts/siyam-rupali/font.css" rel="stylesheet">
    ```
*   **CSS Usage:**
    ```css
    .font-siyam {
      font-family: 'SiyamRupali', Arial, sans-serif !important;
    }
    ```

**4. SolaimanLipi**
*   **Embed in HTML:**
    ```html
    <link href="https://cdn.msar.me/fonts/solaiman-lipi/font.css" rel="stylesheet">
    ```
*   **CSS Usage:**
    ```css
    .font-solaiman {
      font-family: 'SolaimanLipi', Arial, sans-serif !important;
    }
    ```

## 3. Technical Stack & Commands

*   **Package Manager:** This project will use `pnpm` for package management.
*   **Install dependencies:** `pnpm install`
*   **Run development server:** `pnpm dev`
*   **Build for production:** `pnpm build`
*   **Run tests:** `pnpm test`
*   **Run linter:** `pnpm lint`

## 4. Security Considerations

*   **Data Sensitivity:** This platform handles sensitive personal information (students, staff). Sanitize all user inputs to prevent XSS and use parameterized queries or an ORM to prevent SQL injection.
*   **Authentication:** All routes handling private data must be protected with robust authentication and role-based authorization checks.
*   **Environment Variables:** All secret keys, API endpoints, and database credentials must be stored in `.env` files and never committed to the repository.

## 5. PR and Commit Guidelines

*   **Branching:** Create new branches from `main` with the format `[type]/[short-description]` (e.g., `feat/student-profile-page` or `fix/attendance-bug`).
*   **Commit Messages:** Use the [Conventional Commits](https://www.conventionalcommits.org/) specification.
*   **Pull Requests:** The description must clearly explain the "what" and "why" of the changes. Ensure all CI checks (linting, testing, building) are passing before requesting a review.

## 6. UI/UX Development Rules

### Accessibility
- **MUST** ensure all UI is keyboard-operable.
- **MUST** provide text alternatives for all non-text content.
- **MUST** maintain a minimum color contrast ratio of 4.5:1 for text.
- **SHOULD** use semantic HTML to define the structure of the content.
- **NEVER** rely on color alone to convey information.

### Performance
- **MUST** optimize all images to reduce file size without sacrificing quality.
- **MUST** minimize HTTP requests by bundling CSS and JavaScript files.
- **SHOULD** lazy-load images and videos that are not in the initial viewport.
- **SHOULD** leverage browser caching to speed up repeat visits.
- **NEVER** use blocking scripts that delay page rendering.

### User Experience
- **MUST** ensure the UI is responsive and works on all screen sizes.
- **MUST** keep the design consistent across the entire application.
- **SHOULD** provide clear feedback to users after they take an action.
- **SHOULD** use a simple and intuitive navigation structure.
- **NEVER** use pop-ups or modals that are difficult to close.