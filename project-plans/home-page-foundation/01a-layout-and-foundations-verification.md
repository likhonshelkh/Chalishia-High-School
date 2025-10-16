# Phase 1a – Verification of Layout and Foundations (home-page-foundation)

1. Confirm all new or modified source files include the mandated header by running:
   ```bash
   rg "Author      : Likhon Sheikh" src/app/layout.tsx src/app/globals.css src/lib/config.ts
   ```
2. Validate environment configuration:
   ```bash
   test -f .env.local && grep "NEXT_PUBLIC_EIIN=115498" .env.local && grep "NEXT_PUBLIC_SCHOOL_NAME=\"Chalishia High School\"" .env.local
   ```
3. Ensure `.env.local` is ignored by Git:
   ```bash
   rg "\.env.local" .gitignore
   ```
4. Run linting to verify no TypeScript or ESLint issues remain:
   ```bash
   pnpm lint
   ```
5. Search for `NotYetImplemented` or similar stubs to ensure none were added in deliverables:
   ```bash
   rg "NotYetImplemented" src/app/layout.tsx src/app/globals.css src/lib/config.ts
   ```

## Outcome
Report `✅` if all steps pass. Otherwise, list each failing command prefixed with `❌` and describe the discrepancy.
