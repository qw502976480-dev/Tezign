
# Deprecation Plan & Cleanup Strategy

**Date:** 2025-05-20
**Status:** Phase 2 (Execution Started)

This document outlines the strategy for handling components identified as unused during the comprehensive audit. These components have been marked with `@deprecated` JSDoc annotations in the codebase.

## 1. Deprecated File Inventory

### A. Old Pages (Replaced by new architecture)
| File | Replacement | Suggested Action |
| :--- | :--- | :--- |
| `components/CaseStudiesPage.tsx` | `IndustriesPage.tsx` | Archive later |
| `components/CaseStudyDetail.tsx` | `IndustryDetail.tsx` | Archive later |
| `components/CoBuildingPage.tsx` | `ResourcesPage.tsx` | Archive later |

### B. Old Home Sections (Redesigned)
| File | Replacement | Suggested Action |
| :--- | :--- | :--- |
| `components/CoBuilding.tsx` | `ResourcesSection.tsx` | Archive later |
| `components/CustomerReality.tsx` | `IndustryVerticals.tsx` | Archive later |
| `components/IndustriesSection.tsx` | `IndustryVerticals.tsx` | Archive later |
| `components/IndustryCasesSection.tsx` | N/A (Redundant) | Delete later |
| `components/LatestNews.tsx` | `UpdatesSection.tsx` | Archive later |
| `components/Resources.tsx` | `ResourcesSection.tsx` | Archive later |

### C. Old System Modules (Removed from flow)
| File | Context | Suggested Action |
| :--- | :--- | :--- |
| `components/SystemFoundation.tsx` | Replaced by `CoreCompetencies` | Archive later |
| `components/SystemLifecycle.tsx` | Removed from Home | Archive later |
| `components/GEAFlowVisualization.tsx` | Child of SystemFoundation | Keep reference (Complex SVG) |
| `components/ExecutionFlowVisualization.tsx`| Child of SystemLifecycle | Keep reference (Complex SVG) |

### D. Old/Unstable UI Elements (Unused)
| File | Context | Suggested Action |
| :--- | :--- | :--- |
| `components/ui/Magnetic.tsx` | **RESOLVED** | Content removed. Safe to delete. |
| `components/ColorBends.tsx` (+css) | Replaced by `Orb.tsx` | Archive later |
| `components/visual/Iridescence.tsx` (+css)| Unused WebGL effect | Keep reference (High value) |

---

## 2. Pre-Removal Safety Checklist

Before moving or deleting any files in Phase 2, the following checks **must** be performed:

- [ ] **Global String Search**: Search the entire project for the component name string (e.g., `"CaseStudiesPage"`) to catch dynamic imports or obscure references not found by static analysis.
- [ ] **Dynamic Import Audit**: Check `App.tsx` `React.lazy` definitions to ensure no deprecated paths are still being loaded.
- [ ] **CSS Dependency Check**: Ensure removing associated `.css` files (e.g., `ColorBends.css`) does not break global styles (though they should be scoped).
- [ ] **Vercel Smoke Test**: Deploy a branch with these files removed/moved to Vercel Preview. Verify the build passes and the Home, Products, and Company pages render without 404s or chunks errors.

---

## 3. Current Phase Conclusion

**Decision:** **EXECUTION IN PROGRESS**

1.  `Magnetic.tsx` has been neutralized.
2.  `UpdateDetail.tsx` has been refactored to remove hardcoded logic.
3.  Other files await batch archival.

**Next Steps:**
- Monitor for any developer usage of deprecated components.
- Schedule Phase 2 (Archival) for next sprint.
