# VC Late Night: vclatenight.com

This is the static site for VC Late Night (formerly Right To Invest). It has no build step: deploy the repo root as-is.

```
index.html            homepage
archive.html          Season One archive (episodes, matchups, contestants, experts)
privacy.html          Privacy Policy
terms.html            Terms of Use
favicon.ico/.svg      favicons (VC mark), apple-touch-icon.png, icon-192/512.png
site.webmanifest      app icons for Android/Chrome
robots.txt, sitemap.xml
assets/css, assets/js
assets/fonts/         Oswald (the logo typeface), subset to woff2, SIL OFL licence
assets/images/        logo.svg (white, for dark bg), logo-dark.svg (black, for light bg),
                      og-image.jpg (1200x630 share image), photos and thumbnails
assets/images/archive/, assets/images/people/   archive thumbnails and headshots
brand/social-avatars/ profile pictures for X, Instagram, TikTok, YouTube, LinkedIn
```

## Brand
- **Logo:** the vector logo comes from `VC Late Night Logos.ai` (artboard 2), cropped tight with a transparent background.
- **Colours:** ink `#08080a`, white, and logo blue `#2088D7` (`--accent`). Filled buttons with white text use `#1B74B8` (`--accent-deep`) so the text passes WCAG AA contrast.
- **Display type:** big titles use Oswald SemiBold, slanted, to match the logo. Body text uses the system sans.

## Before launch: fill these in
- [ ] Have someone review the Privacy and Terms text. These are standard templates, not legal advice.

## Redirects: righttoinvest.com → vclatenight.com (set up at the DNS/CDN, not in this repo)
Add one permanent (301) rule on the **righttoinvest.com** zone that keeps the path:

| Match | Redirect to |
|---|---|
| `http(s)://righttoinvest.com/*` and `http(s)://www.righttoinvest.com/*` | `https://vclatenight.com/${path}` (301, keep the query string) |

The old archive lived at `/archive` (and was linked as `/archive.html`). Both paths exist on vclatenight.com: Cloudflare Pages and Netlify serve `archive.html` at `/archive` too. Also redirect `www.vclatenight.com` to `https://vclatenight.com` (canonical URLs use the bare domain). Keep righttoinvest.com registered.

## Social profile pictures
`brand/social-avatars/` holds the full logo on black, sized so it sits inside the circle crop every platform applies.

| File | Use for |
|---|---|
| `vclatenight-avatar-1080.png` | Instagram, TikTok, Facebook (upload the large one; they downscale) |
| `vclatenight-avatar-800.png` | YouTube |
| `vclatenight-avatar-400.png` | X, LinkedIn |

`preview.png` shows the circle crop and the small feed sizes.

## Newsletter
Both Subscribe buttons (header and bottom section) link to `https://vclatenight.substack.com/subscribe`. To embed the signup form on the page instead, replace the `.signup-form` block in `index.html` with:

```html
<iframe src="https://vclatenight.substack.com/embed" width="480" height="150"
        style="border:0;background:transparent;max-width:100%" frameborder="0" scrolling="no"></iframe>
```

## Pre-launch checks (from the handoff)
Click every link · open old righttoinvest.com URLs · submit a test signup · paste the URL into LinkedIn Post Inspector and an X post draft to check the share preview · check the site on a phone.
