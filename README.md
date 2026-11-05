# 🚀 Sing App React - A Free & Open-Source React Admin Dashboard Template!

[View Demo](https://flatlogic.com/templates/sing-app-react/demo) | [Download](https://github.com/flatlogic/sing-app-react/archive/refs/heads/master.zip) | [More Templates](https://flatlogic.com/templates) | [Discord Community](https://discord.gg/flatlogic-community) | [Support Forum](https://flatlogic.com/forum)

**Originally a premium product priced at $69+, made available for free in January 2025!** 🎉

Looking for a perfect codebase generator for your Startup? Try [Flatlogic AI Web App Generator](https://flatlogic.com/generator) - our new tool, sort of a template++.

---

## 🎯 Why Sing App React?
- **Ex-Premium**: This template was previously paid. Enjoy it for free now. 😉
- **React + Bootstrap 5**: Built using modern tech stack for scalability and performance.
- **Join the Community**: [Flatlogic Discord](https://discord.gg/flatlogic-community) is where the action happens.
- **Free Node.js Backend**: Pair it up with [this backend](https://github.com/flatlogic/nodejs-backend) to go full-stack.

---

## 🚀 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/flatlogic/sing-app-react.git
   cd sing-app-react
   ```
2. **Install with Node.js 22.12 or newer**
   ```bash
   npm ci --legacy-peer-deps
   ```
   `package-lock.json` is the canonical graph. The explicit flag retains the existing React 18/Router 5 and legacy form/drag-library peer constraints; no global peer bypass is configured.
3. **Run the app**
   ```bash
   npm start
   npm run start:backend
   ```
   Vite serves http://127.0.0.1:5173/sing-app-react/. The first command uses demo mode; the second enables the existing backend endpoints in `src/config.js`.
4. **Build and verify**
   ```bash
   npm run build
   npm run preview
   npm audit
   npm test
   PLAYWRIGHT_DEV=1 npm test
   ```
   Production output goes to `build/` under `/sing-app-react/`. Tests use local Google Chrome and API fixtures. They cover dashboard/chart engines, calendar, table search/sort/pagination, user editing, product edit/delete, tree dragging/cancel, Markdown preview, date/time pickers, rich-text forms/compose/docs and logout. JWT unit tests preserve the previous malformed-token/null contract. Live backend, OAuth and external Google Maps are not exercised. The old unconfigured Enzyme test is replaced by actual browser regressions.

The migration keeps React 18, Router 5, Redux, Bootstrap 5, page data and SCSS. Vite replaces the vulnerable CRA build graph. Table Next preserves controlled tables and formatters. Markdown-it/task lists plus DOMPurify replace unmaintained Showdown. Tiptap replaces the unpatched Draft editor, preserving formatting, images, links and sandboxed HTTPS embeds while rejecting executable URL schemes. Google Maps uses the maintained React adapter with the existing configuration. FullCalendar keeps its v5 VDOM initializer; Moment resolves to its original callable CommonJS entry for the existing date-picker API. D3 3 and Rickshaw retain bounded module/minifier compatibility transforms. React is deduplicated for the original sortable-tree renderer contract.

The development Docker image uses Node 22 and the npm lockfile; Docker execution requires an installed engine. Existing React/Sass deprecation and bundle-size warnings remain visible.

---

## 🧩 Features

- Fully Responsive Layout
- Bootstrap 5
- React 18
- Reactstrap 9
- 8 Chart Libraries
- 2 Dashboards
- Theme Support
- E-Commerce Section
- Static & Hover Sidebar
- Fully Documented Codebase

---

## 🛠 Built With
- React 18
- Bootstrap 5
- Redux
- Vite
- JavaScript (ES6)

---

## 📦 Pages
- Dashboard
- E-commerce (Product Grid, Product Page, Management)
- Profile
- Forms
- Charts
- Tables
- Maps
- Icons
- Notifications
- Login / Error Pages

---

## 🌍 Available Variants

|               | **Material**                                              | **Transparent**                                         | **Classic**                                          | **Sofia**                                          | **Flatlogic**                                      |
|---------------|-----------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| **React**     | [React Material Admin](https://github.com/flatlogic/react-material-admin-full) | [Light Blue React](https://github.com/flatlogic/light-blue-react) | [Sing App React](https://github.com/flatlogic/sing-app-react) | [Sofia React](https://github.com/flatlogic/sofia-react) | [One React](https://github.com/flatlogic/one-react) |
| **Angular**   | [Angular Material Admin](https://github.com/flatlogic/angular-material-admin-full) | [Light Blue Angular](https://github.com/flatlogic/light-blue-angular) | [Sing App Angular](https://github.com/flatlogic/sing-app-angular) | - | - |
| **Vue**       | [Material Vue](https://github.com/flatlogic/material-vue-full) | [Light Blue Vue](https://github.com/flatlogic/light-blue-vue) | [Sing App Vue](https://github.com/flatlogic/sing-app-vue) | - | - |
| **Bootstrap** | - | [Light Blue HTML5](https://github.com/flatlogic/light-blue-html5) | [Sing App HTML5](https://github.com/flatlogic/sing-app-html5) | - | [One Bootstrap](https://github.com/flatlogic/one-bootstrap-template-full) |


Additionally, these templates are tailored for specific business needs:
- [E-Commerce Frontend (React)](https://github.com/flatlogic/ecommerce-frontend) - A complete e-commerce solution.
- [Bookkeeper UI (React)](https://github.com/flatlogic/bookkeeper-ui) - Accounting dashboard for finance management.
- [User Management Template (React)](https://github.com/flatlogic/user-management-template) - User authentication and management.

---

## 👨‍💻 How to Contribute
- **Star this repo ⭐** - show some love.
- **Report bugs** - but be nice.
- **Join the [Discord](<insert-discord-invite-link>)** - meet fellow devs.

---

## 🔥 About Flatlogic
[Flatlogic AI Software Engineer](https://flatlogic.com/ai-software-development-agent) builds modern business software so you don't have to. Our AI Software Development Agent helps you generate, deploy, and maintain enterprise applications with minimal effort.

---

## 📜 License
This template is free to use. Modify it, break it, make it your own. Just don’t try to sell it back to us. 😎

---

> **Questions or feedback?**  
> Join our [Flatlogic Community Discord](https://discord.gg/flatlogic-community) or visit our [support forum](https://flatlogic.com/forum). We might even reply!

