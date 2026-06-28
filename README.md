# Timoks18

A modern personal platform built with React, TypeScript and Vite.

Timoks18 is more than a personal website. It is designed as a long-term knowledge platform where I share software engineering, investing, travel experiences, recipes and practical tools.

---

## Vision

Create a fast, elegant and maintainable web application that grows over time into a complete personal platform.

The project emphasizes:

* Clean architecture
* Excellent user experience
* Responsive design
* Reusable components
* Long-term maintainability

---

## Technology Stack

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Lucide Icons
* Framer Motion (planned)

---

## Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
│
├── config/
├── data/
├── features/
│   ├── home/
│   ├── articles/
│   ├── travel/
│   ├── recipes/
│   └── calculators/
│
├── hooks/
├── pages/
├── styles/
├── types/
├── utils/
│
├── App.tsx
└── main.tsx
```

### Folder Guidelines

**components/**

Reusable UI components shared across multiple features.

Examples:

* Button
* Card
* Logo
* Navbar
* Footer

---

**features/**

Feature-specific UI and business logic.

Examples:

* Hero
* Latest Articles
* Travel Gallery
* FIRE Calculator
* EMI Calculator

---

**pages/**

Application routes.

Each page has its own folder containing an `index.tsx`.

Example:

```text
pages/
    Home/
        index.tsx
```

---

## Current Progress

### Milestone 1 – Foundation

* ✅ Project setup
* ✅ Git workflow
* ✅ React Router
* ✅ Responsive navigation
* ✅ Main layout
* ✅ Footer
* ✅ Premium Hero
* ⏳ Mobile navigation
* ⏳ Feature cards
* ⏳ Responsive polish

---

## Development Workflow

Every sprint follows the same process:

1. Build one feature.
2. Verify functionality.
3. Run the application.
4. Commit changes.
5. Push to GitHub.
6. Create a Git tag.

The `main` branch should always remain deployable.

---

## Design Principles

* Simplicity over complexity
* Reusable components
* Configuration over hardcoded values
* Feature-based architecture
* Mobile-first responsive design

---

## Roadmap

### Milestone 1

Foundation

### Milestone 2

Design System

### Milestone 3

Content Platform

### Milestone 4

Financial Tools

### Milestone 5

Production Release

---

## License

This project is licensed under the MIT License.
