# Phase 2 – Structured Content Extraction (school-profile-overview)

> **STOP after completing the tasks below.** Do not proceed to later phases until verification is complete.

## Goal
Normalize landing-page content into shared data modules and reorganize section components to match the documented architecture for layout, sections, and shared primitives.

## Deliverables
- `src/data/quick-stats.ts`, `src/data/school-overview.ts`, `src/data/campus-facilities.ts`, and `src/data/services.ts` exporting typed constants derived from the research dossier.
- `src/types/content.ts` defining shared TypeScript interfaces used by the new data modules and consuming components.
- All landing page components relocated under `src/components/layout/`, `src/components/sections/`, or `src/components/shared/` with imports updated accordingly.
- Components (`quick-stats`, `school-overview`, `campus-facilities`, `main-content`) refactored to read from the new data modules instead of inline arrays.
- `src/app/page.tsx` updated to reference the reorganized component paths while preserving render order.

## Checklist (implementer)
- [x] Added the required header comment to every new or moved source file.
- [x] Ensured each data module exports `readonly` typed collections without embedding JSX in the data layer.
- [x] Verified all imports resolve to the new directory structure with no unused exports or lint warnings.
- [x] Ran `pnpm lint` and confirmed it passes.

## Self-verify
Run the following command before marking the phase complete:

```bash
pnpm lint
```

STOP. Wait for Phase 2a verification.
