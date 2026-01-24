
# Component Audit Report

**Date:** 2025-05-20  
**Scope:** `/components` directory analysis based on `App.tsx` entry point.

This document serves as a "Truth Reference" for the current application state. It identifies which components are actively participating in the React tree and which are redundant artifacts.

---

## A. Current Production Rendering Chain (Home View)

Based on `App.tsx` -> `renderContent` -> `case 'home'`, the actual UI order is:

1.  **Navbar** (`components/Navbar.tsx`)
2.  **Hero** (`components/Hero.tsx`)
3.  **CoreCompetencies** (`components/CoreCompetencies.tsx`)
4.  **IndustryVerticals** (`components/IndustryVerticals.tsx`)
5.  **ResourcesSection** (`components/ResourcesSection.tsx`)
6.  **UpdatesSection** (`components/UpdatesSection.tsx`)
7.  **HomeCTA** (`components/HomeCTA.tsx`)
8.  **Footer** (`components/Footer.tsx`)
9.  **ChatWidget** (`components/ChatWidget.tsx`)

*Note: `SystemFoundation` was previously in position 3 but has been removed.*

---

## B. Active Component Inventory (Used)

These files are actively imported by `App.tsx` or its direct descendants. Do **not** delete these.

| Component File | Role / Context |
| :--- | :--- |
| `AgentGrid.tsx` | Used by `ProductsPage.tsx` |
| `AuthModal.tsx` | Used by `Navbar.tsx` |
| `BlurText.tsx` | Used by `Hero.tsx` |
| `CardSwap.tsx` | Used by `Hero.tsx` |
| `CareersPage.tsx` | Page Route |
| `ChatWidget.tsx` | Global Widget (App.tsx) |
| `CompanyPage.tsx` | Page Route |
| `ContactPage.tsx` | Page Route |
| `CoreCompetencies.tsx` | Home Section |
| `Footer.tsx` | Global Layout (App.tsx) |
| `Hero.tsx` | Home Section |
| `HomeCTA.tsx` | Home Section |
| `IndustryDetail.tsx` | Page Route (Detail) |
| `IndustryVerticals.tsx` | Home Section |
| `IndustriesPage.tsx` | Page Route (List) |
| `LegalDetailPage.tsx` | Page Route (Detail) |
| `LegalPage.tsx` | Page Route (List) |
| `LogoMarquee.tsx` | Shared UI (Hero, Company, etc.) |
| `MyCollectionPage.tsx` | Page Route (Auth) |
| `Navbar.tsx` | Global Layout (App.tsx) |
| `Orb.tsx` (+css) | Used by `HomeCTA.tsx` |
| `ProductDetail.tsx` | Page Route (Detail) |
| `ProductsPage.tsx` | Page Route (List) |
| `ResourcesPage.tsx` | Page Route (List) |
| `ResourcesSection.tsx` | Home Section |
| `SearchModal.tsx` | Used by `Navbar.tsx` |
| `TestimonialCarousel.tsx` | Shared UI (Products, Industries) |
| `UpdateDetail.tsx` | Page Route (Detail) |
| `UpdatesPage.tsx` | Page Route (List) |
| `UpdatesSection.tsx` | Home Section |

---

## C. Inactive / Deprecated Candidates (Unused)

These files exist in the `/components` directory but are **not** currently imported by the live application chain. They are likely remnants of previous design iterations.

| Component File | Status Suggestion | Analysis |
| :--- | :--- | :--- |
| `Magnetic.tsx` | **DEPRECATE** | Removed from Hero to improve UI stability. |
| `CaseStudiesPage.tsx` | **DEPRECATE** | Old version. Replaced by `IndustriesPage.tsx`. |
| `CaseStudyDetail.tsx` | **DEPRECATE** | Old version. Replaced by `IndustryDetail.tsx`. |
| `CoBuilding.tsx` | **DEPRECATE** | Old version. Replaced by `ResourcesSection.tsx`. |
| `CoBuildingPage.tsx` | **DEPRECATE** | Old version. Replaced by `ResourcesPage.tsx`. |
| `ColorBends.tsx` (+css) | **DEPRECATE** | Unused visual effect (Orb is used instead). |
| `CustomerReality.tsx` | **DEPRECATE** | Old Home section. Replaced by `IndustryVerticals.tsx`. |
| `ExecutionFlowVisualization.tsx`| **DEPRECATE** | Component of `SystemLifecycle` (which is unused). |
| `GEAFlowVisualization.tsx` | **DEPRECATE** | Component of `SystemFoundation` (which was removed). |
| `IndustriesSection.tsx` | **DEPRECATE** | Old Home section. Replaced by `IndustryVerticals.tsx`. |
| `IndustryCasesSection.tsx` | **DEPRECATE** | Old Home section. |
| `LatestNews.tsx` | **DEPRECATE** | Old Home section. Replaced by `UpdatesSection.tsx`. |
| `Resources.tsx` | **DEPRECATE** | Old Home section. Replaced by `ResourcesSection.tsx`. |
| `SystemFoundation.tsx` | **DEPRECATE** | Removed from App in favor of `CoreCompetencies`. |
| `SystemLifecycle.tsx` | **DEPRECATE** | Not rendered in current Home structure. |
| `visual/Iridescence.tsx` (+css)| **DEPRECATE** | Unused visual effect. |

### Action Plan
1.  **Phase 1:** Move all files tagged **DEPRECATE** into a `_archive` folder or delete them to reduce bundle size and developer confusion.
2.  **Phase 2:** Ensure `styles` (CSS files) associated with deprecated components are also removed.
