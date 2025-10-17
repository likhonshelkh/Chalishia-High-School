/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Data for the main navigation menu.  │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    children: [
      { title: "About the School", href: "/about" },
      { title: "Managing Committee", href: "/about/committee" },
      { title: "Our Staff", href: "/about/staff" },
      { title: "Resources", href: "/about/resources" },
    ],
  },
  {
    title: "Academic",
    children: [
      { title: "Class Routine", href: "/academic/class-routine" },
      { title: "Attendance", href: "/academic/attendance" },
      {
        title: "Exams",
        children: [
          { title: "Term Exams", href: "/academic/exams/term" },
          { title: "Tutorial Exams", href: "/academic/exams/tutorial" },
          { title: "Public Exams", href: "/academic/exams/public" },
          { title: "Admission Test", href: "/academic/exams/admission-test" },
        ],
      },
      { title: "Academic Calendar", href: "/academic/calendar" },
      { title: "Student Performance", href: "/academic/performance" },
    ],
  },
  {
    title: "Admission",
    children: [
      { title: "Admission Information", href: "/admission/information" },
      { title: "Admission Form", href: "/admission/form" },
    ],
  },
  {
    title: "Students",
    children: [
      { title: "Student Records", href: "/students/records" },
      { title: "Scholarships", href: "/students/scholarships" },
      { title: "Hostel Information", href: "/students/hostel" },
    ],
  },
  {
    title: "Results",
    href: "/results",
  },
  {
    title: "Notice Board",
    href: "/notice-board",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];