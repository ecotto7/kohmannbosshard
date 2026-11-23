# Kohmann Bosshard static site

This repository is the static site for Kohmann Bosshard. HTML, CSS, JavaScript, images, and documents are served from the repository root. There is no build step.

## GitHub

- Repository: `ecotto7/kohmannbosshard` (public). Do not create or move it under BIG-IC.
- Branch: `main`.
- Publish the files at the repository root. Do not add a build step or a bundler.

## Netlify

- Team: Gonzo Systems. Team slug: `ecotto7`. Do not create the site on any other Netlify account.
- Import `ecotto7/kohmannbosshard`.
- Build command: empty. Publish directory: `.`
- `netlify.toml` stays at the repository root with `publish = "."`.
- Production deploys happen only by pushing to `main`.
- Do not run `netlify deploy`, `netlify deploy --prod`, or a deploy through the Netlify tools unless the owner explicitly asks. Each production deploy costs 15 credits from a shared 300-credit monthly pool. If the pool runs out, every site on the team pauses. The GitHub import is the production deploy.
- Do not turn on Netlify DNS, change nameservers, or attach `kohmannbosshard.com` unless the owner asks.
- When the owner asks to attach the domain, add it in Netlify first, keep DNS at the current provider, and leave email records alone. The public address is `https://kohmannbosshard.com/`, so the apex stays the primary domain.

## Forms and portals

Forms stay on their existing provider. Do not use Netlify Forms. Do not add `data-netlify`, a `form-name` field, or a honeypot.

There is no contact form and no WordPress search on the public pages. Contact Us is the address, phone, hours, and the Google Maps embed.

`/client-upload/` is a direct client link. Keep the path, the title "Client Uploads", the instructions, the file-name example, and the "Upload Your Document" button. The button leaves the site for the existing Box upload portal. Do not rebuild that upload as a Netlify Form.

Keep Charles Schwab, eMoney, Tamarac, the Canva demo, and FINRA BrokerCheck links and embeds pointed at their current hosts.

## Pages and URLs

Public pages use folder URLs (`/about-us/` is `about-us/index.html`). Do not rename or move a page without a 301 in `netlify.toml`.

Do not redirect a query string that already lands on the same path. Query strings are forwarded on 301s, and a redirect of `/` back to `/` will loop the homepage.

The copyright year is set in the HTML as the current year and updated by `js/site.js`.

## Security headers

Headers live in `netlify.toml`. Content-Security-Policy is report-only. When a page adds a third-party form, portal, script, frame, or image host, add that host to the report-only policy. Do not switch the policy to enforcing unless the owner asks.
