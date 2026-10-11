# Zulqarnain Sarwar — Portfolio

A responsive, single-page professional portfolio built with plain HTML, CSS, and JavaScript. It is designed for GitHub Pages and requires no build tools, framework, or server.

## Included
- `index.html` — page content and structure
- `styles.css` — responsive styling, light/dark theme support
- `script.js` — role selector, tailored CV download links, theme toggle, mobile navigation
- `cv/` — the three CVs supplied for this portfolio

## Publish with GitHub Pages
1. Create a GitHub repository named `YOUR-USERNAME.github.io` for a user site, or use any repository for a project site.
2. Upload the contents of this folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, and the `cv/` directory at the same levels shown here.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish, then open the URL shown in Settings → Pages.

If publishing from a project repository (not `YOUR-USERNAME.github.io`), relative CV links still work because they are relative to the site.

## Before publishing
- Check that the phone number, email, LinkedIn URL, location, and availability statement are correct and that you are comfortable publishing them publicly.
- Internship dates are shown as June–July 2023, as confirmed by the portfolio owner. Update the source CVs separately if you want them to match.
- Confirm the education qualification wording. The CVs describe it as a diploma in AI/ML engineering in some places and AI/ML engineering in others.
- Add a GitHub profile link and project repositories/demos if you have them. No GitHub URL or project links were supplied, so none are invented here.
- The page describes project work but does not claim metrics, production deployment, or certifications that the CVs do not establish. CompTIA A+ is described as exam pending in the document-control CV.
- Google Fonts are loaded from Google Fonts. If you prefer a fully offline site, remove the font links in `index.html`; the CSS has sans-serif fallbacks.

## Content and design notes
- The role selector switches between IT Support, Document Control, and Administrative Support and links to the matching supplied CV.
- The design uses CSS-built decorative visuals rather than a profile photo or stock imagery.
- This is a static portfolio. It does not include analytics, a backend, a contact form, or job-application tracking.
