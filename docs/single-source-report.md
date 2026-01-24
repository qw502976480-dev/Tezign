
# Single Source of Truth Report

**Date:** 2025-05-20
**Action:** Consolidated Shadow `src/` Directory to Root Canonical

## 1. Canonical Structure
The following root directories are now the **only** authoritative source for the application:
- `components/`
- `context/`
- `content/`
- `data/`

The `src/` directory has been systematically deprecated. All duplicate logic or content files within `src/` have been renamed to `*.deprecated.*` to prevent accidental imports and ensure build tools rely solely on the root structure.

## 2. Deprecated Files (Renamed)
The following files in `src/` were identified as duplicates or shadows of root files and have been deprecated:

- `src/components/CareersPage.tsx` → `src/components/CareersPage.deprecated.tsx`
- `src/components/LegalPage.tsx` → `src/components/LegalPage.deprecated.tsx`
- `src/components/UpdatesSection.tsx` → `src/components/UpdatesSection.deprecated.tsx`
- `src/context/LanguageContext.tsx` → `src/context/LanguageContext.deprecated.tsx`
- `src/content/components/authModal.en.ts` → `src/content/components/authModal.en.deprecated.ts`
- `src/content/components/authModal.zh.ts` → `src/content/components/authModal.zh.deprecated.ts`
- `src/content/products/productDetails.en.ts` → `src/content/products/productDetails.en.deprecated.ts`
- `src/content/products/productDetails.zh.ts` → `src/content/products/productDetails.zh.deprecated.ts`

## 3. Content Migration
Content that previously existed only in `src/content/` (specifically `authModal` and `productDetails` translations) has been migrated to the root `content/` directory to ensure `context/LanguageContext.tsx` can import them correctly using relative paths (e.g., `../content/products/productDetails.en`).

## 4. Verification
- **Build Integrity**: The entry point `App.tsx` imports from `./components` and `./context`, ensuring it uses the root files.
- **Content Updates**: Editing files in `root/content/` will now immediately reflect in the application, resolving the "changes not taking effect" issue caused by the shadow directory.
- **Safety**: No files were deleted, only renamed and content migrated, allowing for rollback if necessary.
