# GridSync Solutions LLC website

Single-page React 18 / Vite informational website.

## Local review

```sh
npm install
npm run build
npm run preview -- --host 127.0.0.1
```

Open the local URL printed by Vite. `npm run dev` is available for editing.
No deployment is required for review.

## Development refresh

Development branch: `dev/gridsync-brand-refresh`.

- Home, Capabilities, About GridSync, How We Work, and Contact sections.
- Company-focused About copy supplied by the owner; no personal biography.
- ADMS/OMS, switching workflows, readiness, system integration, and utility-contractor coordination emphasized in capabilities.
- Four capabilities; specialized field services explicitly marked as developing,
  with a scope and availability notice.
- Existing `info@gridsync-co.com` email retained; existing `#services` links
  resolve to the capabilities section.
- Official brand palette: navy `#223063`, tech blue `#4166B0`, light blue
  `#458AC9`, grey `#858A95`, black `#000000`, white `#FFFFFF`.
  Subtle neutral background and text shades support readability.
- Original supplied SVG artwork preserved byte-for-byte in `public/brand/`.
  The horizontal original is used in the header and hero with its artboard
  intact. Additional wrapper padding maintains at least one Network-G height
  of clear space; visible logos exceed the 120px digital minimum.
- The standalone original Network-G artwork supplies the favicon. Its web copy
  changes only the outer artboard viewBox and intrinsic dimensions to remove
  empty space at favicon sizes. Paths, gradients, colors, and proportions are
  unchanged. The untouched original is also retained.
- System fonts for website text; no Bank Gothic or Nexa font files or purchases.
- Mobile navigation, section-aware highlighting with aria-current, keyboard focus, skip link, and reduced-motion support.
- Slightly enlarged official header logo and opaque white sticky header.
- Anchor offsets follow the actual header height on desktop and mobile.

## Validation

`npm run build` and `git diff --check` pass. Local Chromium checks confirm:

- No horizontal overflow at 320, 390, 768, 1024, and 1440px.
- Logos load, four capability cards render, and field-service notice is visible.
- Mobile menu opens and closes after choosing a section.
- Section navigation, original email target, and Network-G favicon work.
- Active navigation follows clicked sections and manual scrolling; headings remain below the sticky header at every checked width.
- Sticky header remains at the top with an opaque white background.
- Reduced-motion preference disables smooth scrolling.
- No JavaScript console/page errors or HTTP errors during the checks.

Desktop and mobile review screenshots were captured locally. Mailto target was
checked without sending email; actual delivery depends on the visitor's mail app.

## Review and remaining input

Review the visual design and company wording. Confirm the specific field services
that may be listed as available in a future update; none have been asserted as
currently available in this refresh. No invented phone number, address, clients,
certifications, licenses, achievements, or company history were added.

This development branch is pushed for review in draft PR #1:
https://github.com/jlknight20/gridsync-website/pull/1

The owner authorized branch pushes and Vercel Preview deployments. No merge or
production deployment is authorized. Production publication requires explicit approval.
