
# Components Directory Guidelines

## 1. Core Entry Point
The sole rendering entry point and router is **`App.tsx`**.
All page loading and global layout logic are managed there.

## 2. Directory Structure
**Status: Clean & Modular**

- **`pages/`**: Route components (e.g., `HomePage.tsx`, `ProductsPage.tsx`).
- **`layout/`**: Global layout (e.g., `Navbar.tsx`, `Footer.tsx`).
- **`sections/`**: Page-level blocks (e.g., `Hero.tsx`, `CoreCompetencies.tsx`).
- **`ui/`**: Base UI elements (e.g., `Button.tsx`, `LogoMarquee.tsx`).
- **`features/`**: Functional widgets (e.g., `AuthModal.tsx`, `ChatWidget.tsx`).
- **`utils/`**: Utilities (e.g., `MetaController.tsx`).

## 3. Maintenance
- Create new components in the appropriate subdirectory.
- Do not create components directly in the `components/` root.
