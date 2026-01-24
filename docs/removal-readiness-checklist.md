# Removal Readiness Checklist & Impact Assessment

**Date:** 2025-05-20
**Phase:** Pre-Execution
**Objective:** Confirm safety before moving deprecated components to `_archive` or deleting them.

---

## 1. Target Inventory (To Be Archived/Removed)

The following files match the scope defined in `docs/deprecation-plan.md`.

### Group A: Visual Effects (Lowest Risk)
- [ ] `components/ColorBends.tsx`
- [ ] `components/ColorBends.css`
- [ ] `components/visual/Iridescence.tsx`
- [ ] `components/visual/Iridescence.css`

### Group B: Old Home Sections (Replaced)
- [ ] `components/CoBuilding.tsx`
- [ ] `components/CustomerReality.tsx`
- [ ] `components/IndustriesSection.tsx`
- [ ] `components/IndustryCasesSection.tsx`
- [ ] `components/LatestNews.tsx`
- [ ] `components/Resources.tsx`

### Group C: Old Pages (Replaced by Router Logic)
- [ ] `components/CaseStudiesPage.tsx`
- [ ] `components/CaseStudyDetail.tsx`
- [ ] `components/CoBuildingPage.tsx`

### Group D: System Modules (Removed Logic)
- [ ] `components/SystemFoundation.tsx`
- [ ] `components/SystemLifecycle.tsx`
- [ ] `components/GEAFlowVisualization.tsx` (Child of SystemFoundation)
- [ ] `components/ExecutionFlowVisualization.tsx` (Child of SystemLifecycle)

---

## 2. Mandatory Safety Gates (Must Pass All)

Before executing the removal script/command, verify the following:

### Gate 1: Zero Reference Check
- [ ] **Global Search**: Execute grep/search for filenames (without extension) across `src/` (or root).
    - *Success Criteria*: Zero hits in active logic files (`App.tsx`, active `components/*`, `context/*`).
    - *Allowed Hits*: Only within `docs/*` or other deprecated files in this list.

### Gate 2: Dynamic Import Audit
- [ ] **Review Report**: Confirm findings in `docs/dynamic-import-audit.md`.
    - *Success Criteria*: No `React.lazy` or `import()` statements point to any file in the Target Inventory.

### Gate 3: Vercel Smoke Test (Staging/Preview)
Deploy a PR with these files removed and verify the following routes manually:
- [ ] `/` (Home): Ensure "Core Competencies" and "Updates" sections load correctly (replacing old sections).
- [ ] `/products`: Grid renders.
- [ ] `/products/market`: Detail page renders.
- [ ] `/industries`: List renders.
- [ ] `/industries/lenovo`: Detail page renders (critical check for `CaseStudyDetail` replacement).
- [ ] `/resources`: Page renders.
- [ ] `/updates`: Page renders.
- [ ] `/company`: Page renders.
- [ ] **Refresh Test**: Reload each page above to ensure client-side routing holds up.

---

## 3. Execution Sequence

To minimize risk, execute removals in this order:

1.  **Visual Effects** (Standalone, no dependencies).
2.  **Old Home Sections** (Ensure `App.tsx` and `Home.tsx`/`Hero.tsx` do not import them).
3.  **Old Pages** (Ensure `App.tsx` routes point to new pages).
4.  **System Modules** (Ensure `GEAFlow` etc. are not used elsewhere).

---

## 4. Rollback Strategy

If a regression is detected after archival/deletion:

1.  **Immediate Action**: `git revert <merge-commit-hash>` to restore all files immediately.
2.  **Partial Restore**: If only one component is needed (e.g., `GEAFlowVisualization` for a specific demo), restore only that file and its dependencies from git history.
3.  **Route Fix**: If a URL 404s, check `App.tsx` routing logic before restoring old files.

**Conclusion**: Proceed only when all checkboxes in Section 2 are marked.
