Personal portfolio website for presenting my developer profile, selected projects, technical skills, testimonials and contact options.

The project was built as a modern Angular single page application with a strong focus on responsive design, maintainable component structure and clean frontend architecture.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)

---

This portfolio is designed to work as a professional developer presentation page. It introduces the profile, shows relevant technologies, lists selected projects and provides a contact form connected to a PHP backend endpoint.

The website is built as a single page application with separate routed legal pages for imprint and privacy policy. The design is based on a Figma layout and was implemented with custom SCSS, reusable variables, mixins and responsive breakpoints.

## Features

- Responsive Angular single page application
- Global header and footer
- Mobile burger menu
- Smooth section navigation
- Hero section with animated marquee
- About section with responsive image layout and hover details
- Skill set section based on maintainable skill data
- Featured projects section based on external project data
- Project dialog with internal scroll behavior
- Testimonials carousel
- Contact form with frontend validation
- PHP contact endpoint with server-side validation
- German and English language structure
- Legal notice and privacy policy pages
- Angular refresh routing support via `.htaccess`
- Desktop, tablet and mobile optimization

---

## Project Structure

Based on the scalable Angular architecture used in this project:

```text
portfolio-website/
├── public/
│   ├── assets/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interfaces/
│   │   │   ├── pipes/
│   │   │   └── services/
│   │   ├── features/
│   │   │   ├── home/
│   │   │   └── main-page/
│   │   │       ├── about-me/
│   │   │       ├── contact-me/
│   │   │       ├── featured-projects/
│   │   │       ├── hero-section/
│   │   │       ├── skills-section/
│   │   │       └── testimonials/
│   │   ├── pages/
│   │   │   ├── legal-notice/
│   │   │   └── privacy-policy/
│   │   ├── shared/
│   │   │   ├── footer-section/
│   │   │   └── header/
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── themes/
│   │   ├── utilities/
│   │   └── vendors/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── contact_form_mail.php
├── angular.json
├── package.json
└── README.md
```

---

## Tech Stack

| Area | Technology |
| :--- | :--- |
| **Framework** | Angular |
| **Language** | TypeScript |
| **Styling** | SCSS |
| **Data** | JSON / TypeScript data files |
| **Contact Backend** | PHP |
| **Routing** | Angular Router |
| **Deployment** | Static hosting with PHP support |
| **Hosting Target** | IONOS-compatible webspace |

---

## Responsive Design

The layout was built mobile-first in the final responsive phase and then refined across relevant viewport ranges.

Important responsive goals:
- No horizontal overflow
- Stable section widths
- Readable typography on all devices
- Mobile menu only on small screens
- Fixed header behavior on tablet and desktop
- Non-fixed header behavior on mobile
- Project dialogs usable on small screens
- Internal dialog scrolling without background scroll
- Legal pages readable on mobile
- Contact form stable between tablet and desktop widths

---

## Internationalization

The project contains a language structure for German and English content.

Translations are separated from component markup and stored in a central data file (adjust path as needed based on current structure, e.g., via a service or environment file if not using a specific translations.ts).

The language state is handled through a language service. Components read their visible text from the translation data instead of hardcoding all text directly in templates.

This keeps the project easier to maintain and allows future text updates without rewriting component logic.

---

## Project Data

Featured projects are stored as external data (e.g., via JSON or TypeScript configurations).

The projects section is designed to be extendable. New projects can be added by extending the data instead of duplicating template markup.

Example data structure:
```json
{
  "id": "join",
  "title": "Join",
  "description": "Task manager inspired by the Kanban system.",
  "technologies": [
    { "name": "Angular", "iconPath": "icons/..." }
  ],
  "previewImagePath": "img/projects/...",
  "githubUrl": "https://...",
  "liveUrl": "https://..."
}
```

---

## Contact Form

The contact form consists of two validation layers:
1. Angular frontend validation
2. PHP server-side validation

The PHP endpoint is located in:
```text
contact_form_mail.php
```

The endpoint accepts JSON POST requests and validates:
- Request method
- JSON body
- Payload size
- Name length and content
- E-mail format
- E-mail host/domain
- DNS records for mail delivery
- Message length
- Header injection attempts

---

## Deployment

### Production Build
```bash
ng build --configuration production
```

The generated files are located in a folder like `dist/portfolio-website/browser/`. Upload the contents of this folder to the webspace target directory.

### Angular Refresh Routing

For direct route refreshes such as `/legal-notice` or `/privacy-policy`, the project uses an `.htaccess` file.

Example:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>
```
The `.htaccess` file must be placed next to the deployed `index.html`.

---

## Getting Started

### Prerequisites
Make sure the following tools are installed:
- Node.js LTS
- npm
- Angular CLI

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm start
```
The application will usually be available at:
`http://localhost:4200`

### Available Scripts

`npm start`
Starts the local Angular development server.

`npm run build`
Creates a production-ready build.

`ng build --configuration production`
Creates the production build explicitly with Angular CLI.
