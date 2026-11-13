# VC Late Night: vclatenight.com

This is the static site for VC Late Night (formerly Right To Invest). It has no build step: deploy the repo root as-is.

```
index.html            homepage
privacy.html          Privacy Policy
terms.html            Terms of Use
favicon.ico/.svg      favicons (VC mark), apple-touch-icon.png, icon-192/512.png
site.webmanifest      app icons for Android/Chrome
robots.txt, sitemap.xml
_redirects            same-site redirects (Cloudflare Pages / Netlify syntax)
assets/css, assets/js
assets/fonts/         Oswald (the logo typeface), subset to woff2, SIL OFL licence
assets/images/        logo.svg (white, for dark bg), logo-dark.svg (black, for light bg),
                      og-image.jpg (1200x630 share image), photos and thumbnails
```

## Brand
- **Logo:** the vector logo comes from `VC Late Night Logos.ai` (artboard 2), cropped tight with a transparent background.
- **Colours:** ink `#08080a`, white, and logo blue `#2088D7` (`--accent`). Filled buttons with white text use `#1B74B8` (`--accent-deep`) so the text passes WCAG AA contrast.
- **Display type:** big titles use Oswald SemiBold, slanted, to match the logo. Body text uses the system sans.

## Before launch: fill these in
- [ ] **Contact email** in `privacy.html` and `terms.html`: replace `[CONTACT EMAIL]` (2 places each).
- [ ] **LinkedIn**: add it to the footer social list in `index.html` when Alex sends the URL.
- [ ] **Archive page**: the old `archive.html` (Season One matchups and contestants) wasn't in the handoff files. Until it's added:
  - archive links point to the history band on the homepage (`/#archive`) and to YouTube.
  - `_redirects` sends `/archive.html` to `/#archive`. Delete that line when the page is added.
- [ ] Have someone review the Privacy and Terms text. These are standard templates, not legal advice.

## Redirects: righttoinvest.com → vclatenight.com (set up at the DNS/CDN, not in this repo)
Add one permanent (301) rule on the **righttoinvest.com** zone that keeps the path:

| Match | Redirect to |
|---|---|
| `http(s)://righttoinvest.com/*` and `http(s)://www.righttoinvest.com/*` | `https://vclatenight.com/${path}` (301, keep the query string) |

`/archive.html` then follows the same-site rule in `_redirects`. Also redirect `www.vclatenight.com` to `https://vclatenight.com` (canonical URLs use the bare domain). Keep righttoinvest.com registered.

## Newsletter
Both Subscribe buttons (header and bottom section) link to `https://vclatenight.substack.com/subscribe`. To embed the signup form on the page instead, replace the `.signup-form` block in `index.html` with:

```html
<iframe src="https://vclatenight.substack.com/embed" width="480" height="150"
        style="border:0;background:transparent;max-width:100%" frameborder="0" scrolling="no"></iframe>
```

## Pre-launch checks (from the handoff)
Click every link · open old righttoinvest.com URLs · submit a test signup · paste the URL into LinkedIn Post Inspector and an X post draft to check the share preview · check the site on a phone.
