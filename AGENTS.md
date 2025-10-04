# Repository Guidelines

## Project Structure & Module Organization
All public pages live as standalone XHTML files in the repository root (for example `index.html`, `hapkido.html`, `onde_treinar.html`). Shared assets sit under `resource/`: styles in `resource/css`, behaviour in `resource/js`, and imagery in `resource/img` or `resource/picture`. When adding new pages, reuse the existing head section so icons, analytics, and script hooks stay consistent across the site.

## Build, Test, and Development Commands
The site is static and requires no bundler. Preview changes locally with `python3 -m http.server 8000` from the repository root, then browse `http://localhost:8000`. Use `npx serve` only if you already depend on Node; no install scripts are provided here. Always hard-refresh (Ctrl+Shift+R) after asset changes to bypass cached CSS or JS during review.

## Coding Style & Naming Conventions
Follow the existing tab-based indentation in HTML, CSS, and JS. Keep attribute quotes double (`id=""`), class names kebab-case, and Portuguese copy untouched unless the change is intentional. Consolidate custom scripts inside `resource/js/scripts.js`; vendor libraries such as `jquery.js` and `lightbox.js` should remain unmodified. Prefer uppercase hex colours, descriptive alt text, and reuse the current comment style for clarity.

## Testing Guidelines
No automated suite exists, so rely on manual verification. After serving the site locally, click through every updated page, confirm menu anchors resolve, and inspect the browser console for JavaScript errors. For new media, confirm responsive behaviour at 320px, 768px, and desktop widths, and verify that lightbox interactions and analytics snippets continue to load without warnings.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (`type: summary`), mirroring history such as `chore: first blood`; keep the subject under 72 characters. Break large updates into focused commits covering HTML, CSS, and assets separately. Pull requests should describe the change, note affected pages, and include before/after screenshots for layout shifts. Reference any related issue or request, and call out manual testing steps performed.

## Asset & Media Handling
Compress new images before committing and place them under `resource/img` (raster) or `resource/picture` (photo sets). Name files in lowercase kebab-case and update all HTML references accordingly. When replacing existing media, retain dimensions to avoid layout regressions and remove unused files to keep the asset directories lean.
