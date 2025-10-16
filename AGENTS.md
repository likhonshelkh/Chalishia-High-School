# AGENTS.md - AI and Developer Guidelines

This document provides essential guidelines for AI agents and human developers contributing to the **Chalishia High School Management System** project. Following these instructions ensures consistency, quality, and efficiency.


Agents.md - Chalishia High School Website Project

🎯 Project Overview

Project: Chalishia High School Official Website (EIIN: 115498)
Framework: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
Status: 🟢 ACTIVE DEVELOPMENT
Target: Complete institutional website with 100+ pages, Bengali-first content, and full SEO optimization

📋 Project Requirements & Specifications

🎨 Design System

· Primary Colors: Institutional Blue (#1a5276), Academic Blue (#2980b9), Highlight Red (#e74c3c)
· Typography: Inter + SolaimanLipi (Bengali support)
· Icons: Lucide React + Custom SVG
· Components: shadcn/ui based design system
· Responsive: Mobile-first approach

🌐 Language & Localization

· Primary: Bengali (bn-BD)
· Secondary: English
· Content Strategy: Bengali-first, English fallback
· RTL Support: Bengali text rendering

📊 Institutional Data Integration

```typescript
// Core school information from research document
const SCHOOL_DATA = {
  name: "Chalishia High School",
  eiin: "115498",
  established: "1970s (estimated)",
  location: "Chalishia Union, Abhaynagar, Jessore",
  board: "Jessore Education Board",
  type: "Non-Government Secondary School",
  mpoStatus: "Active",
  students: "300-350",
  teachers: "17",
  studentTeacherRatio: "17:1"
}
```

🏗️ Complete File Structure

```
chalishia-high-school/
├── app/
│   ├── (home)/
│   │   └── page.tsx
│   ├── notice-board/
│   │   ├── page.tsx
│   │   ├── administration/
│   │   │   └── page.tsx
│   │   ├── school/
│   │   │   └── page.tsx
│   │   ├── college/
│   │   │   └── page.tsx
│   │   ├── tender/
│   │   │   └── page.tsx
│   │   └── monthly-meeting/
│   │       └── page.tsx
│   ├── academic-corners/
│   │   ├── jsc/
│   │   │   └── page.tsx
│   │   ├── ssc/
│   │   │   └── page.tsx
│   │   └── hsc/
│   │       └── page.tsx
│   ├── scholarship/
│   │   └── page.tsx
│   ├── downloads/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── hsc-result/
│   │   │   └── page.tsx
│   │   ├── question-bank/
│   │   │   └── page.tsx
│   │   ├── registration/
│   │   │   ├── page.tsx
│   │   │   ├── jsc/
│   │   │   │   └── page.tsx
│   │   │   ├── ssc/
│   │   │   │   └── page.tsx
│   │   │   └── hsc/
│   │   │       └── page.tsx
│   │   ├── student-management/
│   │   │   └── page.tsx
│   │   ├── teacher-portal/
│   │   │   └── page.tsx
│   │   └── document-services/
│   │       └── page.tsx
│   ├── jessore-board/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── committees/
│   │   │   └── page.tsx
│   │   ├── departments/
│   │   │   └── page.tsx
│   │   ├── academic-calendar/
│   │   │   └── page.tsx
│   │   ├── fees/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── about/
│   │   ├── page.tsx
│   │   ├── committee/
│   │   │   └── page.tsx
│   │   ├── staff/
│   │   │   └── page.tsx
│   │   └── resources/
│   │       └── page.tsx
│   ├── admission/
│   │   ├── page.tsx
│   │   ├── information/
│   │   │   └── page.tsx
│   │   └── form/
│   │       └── page.tsx
│   ├── academic/
│   │   ├── page.tsx
│   │   ├── class-routine/
│   │   │   └── page.tsx
│   │   ├── attendance/
│   │   │   └── page.tsx
│   │   ├── exams/
│   │   │   ├── page.tsx
│   │   │   ├── term/
│   │   │   │   └── page.tsx
│   │   │   ├── tutorial/
│   │   │   │   └── page.tsx
│   │   │   ├── public/
│   │   │   │   └── page.tsx
│   │   │   └── admission-test/
│   │   │       └── page.tsx
│   │   ├── calendar/
│   │   │   └── page.tsx
│   │   └── performance/
│   │       └── page.tsx
│   ├── students/
│   │   ├── page.tsx
│   │   ├── records/
│   │   │   └── page.tsx
│   │   ├── scholarships/
│   │   │   └── page.tsx
│   │   └── hostel/
│   │       └── page.tsx
│   ├── activities/
│   │   ├── page.tsx
│   │   ├── clubs/
│   │   │   └── page.tsx
│   │   └── holidays/
│   │       └── page.tsx
│   ├── results/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── ui/ (shadcn components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── navigation-menu.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   ├── news-ticker.tsx
│   │   └── sidebar.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── quick-stats.tsx
│   │   ├── facilities.tsx
│   │   ├── academic-performance.tsx
│   │   ├── contact-map.tsx
│   │   └── service-grid.tsx
│   └── shared/
│       ├── service-card.tsx
│       ├── home-menu-card.tsx
│       ├── image-gallery.tsx
│       ├── notice-card.tsx
│       └── download-card.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   ├── seo.ts
│   ├── date-utils.ts
│   └── bengali-utils.ts
├── data/
│   ├── school-info.ts
│   ├── navigation-data.ts
│   ├── notice-data.ts
│   ├── meeting-data.ts
│   ├── staff-data.ts
│   ├── academic-data.ts
│   ├── jsc-data.ts
│   ├── ssc-data.ts
│   ├── hsc-data.ts
│   ├── scholarship-data.ts
│   ├── downloads-data.ts
│   ├── board-services-data.ts
│   ├── facilities-data.ts
│   └── gallery-data.ts
├── public/
│   ├── images/
│   │   ├── school/
│   │   │   ├── building.jpg
│   │   │   ├── playground.jpg
│   │   │   └── classroom.jpg
│   │   ├── staff/
│   │   ├── events/
│   │   └── logo.png
│   ├── icons/
│   └── documents/
├── types/
│   ├── common.ts
│   ├── academic.ts
│   └── staff.ts
└── config/
    ├── site.ts
    └── seo.ts
```

🚀 Implementation Status

✅ COMPLETED SECTIONS

· Project architecture and folder structure
· Design system and component foundation
· Home page with hero section
· Navigation system with dropdown menus
· Basic page templates for 60+ pages
· SEO configuration and metadata
· Responsive design framework
· Bengali localization setup

🔄 IN PROGRESS

· Data population for all pages
· Image optimization and assets
· Form integrations
· API routes for dynamic content
· Performance optimization
· Accessibility audit

📋 PENDING FEATURES

· Student portal with authentication
· Live result publishing system
· Online admission system
· Teacher dashboard
· Parent communication portal
· Mobile app development
· Advanced analytics

🎯 Key Features Specification

1. Academic Management

```typescript
interface AcademicFeatures {
  classRoutines: boolean
  attendanceTracking: boolean
  examSchedules: boolean
  resultPublication: boolean
  performanceAnalytics: boolean
  curriculumManagement: boolean
}
```

2. Student Services

```typescript
interface StudentServices {
  onlineAdmission: boolean
  scholarshipApplications: boolean
  documentVerification: boolean
  hostelManagement: boolean
  extracurricularActivities: boolean
  careerGuidance: boolean
}
```

3. Administrative Features

```typescript
interface AdminFeatures {
  noticeManagement: boolean
  staffDirectory: boolean
  committeeManagement: boolean
  financialTracking: boolean
  inventoryManagement: boolean
  reportGeneration: boolean
}
```

4. Jessore Board Integration

```typescript
interface BoardIntegration {
  resultServices: boolean
  registrationServices: boolean
  questionBanks: boolean
  documentServices: boolean
  teacherPortals: boolean
  institutionalServices: boolean
}
```

📊 Data Models

Staff Management

```typescript
interface StaffMember {
  id: string
  name: string
  designation: string
  qualification: string
  subject: string
  experience: string
  phone?: string
  email?: string
  photo?: string
  joiningDate: string
  responsibilities: string[]
}
```

Academic Data

```typescript
interface AcademicRecord {
  class: string
  year: string
  totalStudents: number
  present: number
  absent: number
  attendancePercentage: number
  examResults: ExamResult[]
}
```

Notice System

```typescript
interface Notice {
  id: string
  title: string
  description: string
  category: 'general' | 'academic' | 'administration' | 'tender' | 'meeting'
  priority: 'low' | 'normal' | 'high' | 'urgent'
  publishDate: string
  expiryDate?: string
  attachment?: string
  targetAudience: string[]
}
```

🛠️ Technical Specifications

Performance Targets

· Lighthouse Score: 95+
· First Contentful Paint: < 1.5s
· Largest Contentful Paint: < 2.5s
· Cumulative Layout Shift: < 0.1
· Time to Interactive: < 3s

SEO Requirements

· Meta Tags: Complete implementation for all pages
· Structured Data: JSON-LD for LocalBusiness, EducationalOrganization
· Sitemap: Auto-generated XML sitemap
· Open Graph: Full social media optimization
· Twitter Cards: Complete implementation

Accessibility Standards

· WCAG: 2.1 AA compliance
· Screen Readers: Full compatibility
· Keyboard Navigation: Complete support
· Color Contrast: 4.5:1 minimum ratio
· Focus Indicators: Clear and consistent

🔧 Development Commands

```bash
# Installation
npm install

# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint

# Type checking
npm run type-check

# Testing
npm run test
```

📈 Deployment Strategy

Primary Platform: Vercel

· Domain: chalishia-high-school.vercel.app
· Branch: main (auto-deploy)
· Environment: Production

Backup Platform: Netlify

· Domain: chalishiahighschool.netlify.app
· Branch: staging

CDN & Assets

· Images: Next.js Image Optimization
· Documents: AWS S3 or similar
· Backups: Automated daily

🎨 Design System Components

Required shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add badge
npx shadcn@latest add alert
npx shadcn@latest add table
npx shadcn@latest add navigation-menu
npx shadcn@latest add dropdown-menu
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add tabs
npx shadcn@latest add accordion
```

🔍 Quality Assurance Checklist

Code Quality

· TypeScript strict mode
· ESLint configuration
· Prettier formatting
· Husky pre-commit hooks
· Component testing
· E2E testing

Performance

· Bundle size optimization
· Image optimization
· Code splitting
· Caching strategy
· CDN configuration

Security

· HTTPS enforcement
· CSP headers
· XSS protection
· CSRF protection
· Data validation

👥 Team & Credits

Development Team

· Lead Developer: Likhon Sheikh
· Role: Full-stack Developer & Student
· Contact: Telegram
· Institution: Chalishia High School (Student)

Institutional Credits

· School: Chalishia High School (EIIN: 115498)
· Board: Jessore Education Board
· Location: Chalishia Union, Abhaynagar, Jessore

📞 Support & Maintenance

Technical Support

· Documentation: Comprehensive README and docs
· Issue Tracking: GitHub Issues
· Updates: Monthly security patches
· Backups: Automated daily

Content Management

· Training: Staff training materials
· Guidelines: Content creation guidelines
· Updates: Quarterly content reviews

---

🎯 FINAL DELIVERABLES

Phase 1: Foundation (Current)

· ✅ Complete website structure
· ✅ 100+ page templates
· ✅ Design system
· ✅ SEO foundation

Phase 2: Content & Data

· All content population
· Image assets
· Form functionality
· Data integration

Phase 3: Advanced Features

· Student portal
· Live results
· Mobile app
· Analytics

Phase 4: Optimization

· Performance tuning
· Security hardening
· Monitoring setup
· Documentation

---

BUILD STATUS: 🟢 ACTIVE
LAST UPDATED: December 2024
NEXT MILESTONE: Content Population
TARGET LAUNCH: January 2025

This document will be automatically updated as development progresses.
## 1. Project Overview

This repository contains the code for a comprehensive school management system for **Chalishia High School**. The goal is to create a modern, accessible, and reliable platform for students, teachers, parents, and administrators. The system must be lightweight and practical for a rural school environment.

## 2. File Headers

All source files (`.js`, `.ts`, `.tsx`, `.css`, etc.) **MUST** include the following header at the top of the file. The description should be a brief, one-line summary of the file's purpose.

```
/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : [Add file/module description here]  │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */
```

## 3. UI/UX and Design Guidelines

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

## 4. Technical Stack & Commands

*   **Package Manager:** This project will use `pnpm` for package management.
*   **Install dependencies:** `pnpm install`
*   **Run development server:** `pnpm dev`
*   **Build for production:** `pnpm build`
*   **Run tests:** `pnpm test`
*   **Run linter:** `pnpm lint`

## 5. Testing and Error Handling

*   **Continuous Integration:** All pushes and pull requests to the `main` branch will trigger a GitHub Actions workflow that runs `pnpm build` and `pnpm test`. All checks **MUST** pass.
*   **Error Logging:** When implementing new features, any errors or exceptions that occur (e.g., failed API calls, build errors) **MUST** be logged to a file named `error.log` in the root directory. This file should be added to `.gitignore`.

## 6. Security Considerations

*   **Data Sensitivity:** This platform handles sensitive personal information (students, staff). Sanitize all user inputs to prevent XSS and use parameterized queries or an ORM to prevent SQL injection.
*   **Authentication:** All routes handling private data must be protected with robust authentication and role-based authorization checks.
*   **Environment Variables:** All secret keys, API endpoints, and database credentials must be stored in `.env` files and never committed to the repository.

## 7. PR and Commit Guidelines

*   **Branching:** Create new branches from `main` with the format `[type]/[short-description]` (e.g., `feat/student-profile-page` or `fix/attendance-bug`).
*   **Commit Messages:** Use the [Conventional Commits](https://www.conventionalcommits.org/) specification.
*   **Pull Requests:** The description must clearly explain the "what" and "why" of the changes. Ensure all CI checks (linting, testing, building) are passing before requesting a review.

## 8. UI/UX Development Rules

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

- <div class="telegram-embed-container">
  <div class="embed-header">
    <h3>Latest from Our Channel</h3>
    <a href="https://t.me/ChalishiaHighSchool" target="_blank" class="follow-btn">
      Follow on Telegram ↗
    </a>
  </div>
  <script async src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-post="ChalishiaHighSchool/4" 
          data-width="100%"
          data-color="2CBAC2"
          data-dark="1">
  </script>
</div>

.telegram-embed-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin: 20px 0;
}

.embed-header {
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 15px 20px;
  background: #2CBAC2;
  color: white;
}

.follow-btn {
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  font-size: 14px;
}<!-- Lazy load the widget -->
<div id="telegram-widget-placeholder" class="widget-placeholder">
  <div class="loading-spinner"></div>
  <p>Loading latest update...</p>
</div>

<script>
// Load widget when user scrolls near it
function loadTelegramWidget() {
  const placeholder = document.getElementById('telegram-widget-placeholder');
  const script = document.createElement('script');
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.async = true;
  script.setAttribute('data-telegram-post', 'ChalishiaHighSchool/4');
  script.setAttribute('data-width', '100%');
  
  placeholder.innerHTML = '';
  placeholder.appendChild(script);
}

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadTelegramWidget();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.getElementById('telegram-widget-placeholder'));
</script>

<div id="telegram-embed">
  <div class="widget-loading">Loading Telegram post...</div>
</div>

<script>
function loadWidgetWithFallback() {
  const container = document.getElementById('telegram-embed');
  const script = document.createElement('script');
  
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.async = true;
  script.setAttribute('data-telegram-post', 'ChalishiaHighSchool/4');
  script.setAttribute('data-width', '100%');
  
  // Handle script load errors
  script.onerror = function() {
    container.innerHTML = `
      <div class="fallback-content">
        <h4>Latest School Update</h4>
        <p>Chalishia High School, a private secondary school in Jessore, Bangladesh...</p>
        <a href="https://t.me/ChalishiaHighSchool/4" target="_blank" class="btn">
          View on Telegram
        </a>
      </div>
    `;
  };
  
  container.innerHTML = '';
  container.appendChild(script);
}

// Add timeout fallback
setTimeout(() => {
  if (document.getElementById('telegram-embed').children.length === 1) {
    loadWidgetWithFallback();
  }
}, 5000);
</script>

// Track widget engagement
document.addEventListener('DOMContentLoaded', function() {
  // Listen for clicks on the embedded widget
  document.addEventListener('click', function(e) {
    if (e.target.closest('.tgme_widget')) {
      // Send to analytics
      gtag('event', 'telegram_widget_click', {
        'event_category': 'engagement',
        'event_label': 'ChalishiaHighSchool'
      });
    }
  });
  
  // Track widget impressions
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gtag('event', 'telegram_widget_view', {
          'event_category': 'impression',
          'event_label': 'ChalishiaHighSchool'
        });
      }
    });
  });
  
  observer.observe(document.querySelector('.telegram-embed-container'));
});/* Ensure proper contrast and focus states */
.tgme_widget {
  border-radius: 8px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .telegram-embed-container {
    border: 2px solid currentColor;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .loading-spinner {
    animation: none;
  }
}
