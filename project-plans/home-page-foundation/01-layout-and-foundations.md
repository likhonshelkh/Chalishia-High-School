# Phase 1 – Layout and Foundations (home-page-foundation)

> **STOP after completing the tasks below.** Do not continue to later phases without explicit approval.

## Goal
Establish the global layout scaffolding, font configuration, and environment variable plumbing required for the Chalishia High School home experience.

## Deliverables
- `src/app/layout.tsx` updated to include the mandated file header, Google font loading, Kalpurush CDN stylesheet link, and global metadata wrapper that applies the font to the `<body>` element.
- `src/app/globals.css` extended with base body styles (background, text color, font stack combining Noto Sans Bengali and Kalpurush) and Tailwind utility extensions as needed.
- `.env.local` created with `NEXT_PUBLIC_SCHOOL_NAME` and `NEXT_PUBLIC_EIIN` values per specification.
- `src/lib/config.ts` added exporting strongly typed accessors for the public environment variables.

## Checklist (implementer)
- [x] Added the required file header to every touched source file.
- [x] Verified that `layout.tsx` imports and applies the Google font and Kalpurush fallback without TypeScript errors.
- [x] Confirmed `config.ts` safely reads env vars at build time and throws descriptive errors if missing.
- [x] Ensured `.env.local` is listed in `.gitignore` if required by repository policy.

## Self-verify
Run the following commands before marking the phase complete:

```bash
pnpm lint
```

STOP. Wait for Phase 1a verification.
