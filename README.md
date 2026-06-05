# UniqID — Bot Detection Website

UniqID is a Jekyll-based marketing site for a hardware-backed bot detection service. It uses the [Beautiful Jekyll](https://beautifuljekyll.com/) theme with a custom dark theme and animated admin dashboard demo.

---

## Preview on localhost

Follow these steps to build and preview the site on your machine.

### Prerequisites

- **Ruby** 2.7 or newer (3.x recommended)
- **Bundler** (`gem install bundler`)
- **Git** (to clone the repo)

Check your Ruby version:

```bash
ruby --version
```

### Step 1 — Install dependencies

From the project root:

```bash
cd /home/kaustavg/projects/uniqid
bundle install
```

If `bundle install` fails on missing native extensions, install build tools first:

```bash
# Ubuntu/Debian
sudo apt-get install build-essential ruby-dev

# macOS (with Homebrew Ruby)
xcode-select --install
```

### Step 2 — Serve the site locally

```bash
bundle exec jekyll serve
```

Jekyll will build the site and start a local server. By default it is available at:

**http://localhost:4000**

To rebuild automatically when you edit files (recommended during development):

```bash
bundle exec jekyll serve --livereload
```

### Step 3 — View specific pages

| Page | URL |
|------|-----|
| Home (dashboard demo) | http://localhost:4000/ |
| Research | http://localhost:4000/research/ |
| Pricing | http://localhost:4000/pricing/ |
| Getting Started | http://localhost:4000/get-started/ |
| Contact | http://localhost:4000/contact/ |

### Troubleshooting

| Problem | Fix |
|---------|-----|
| `jekyll: command not found` | Use `bundle exec jekyll serve` instead of `jekyll serve` |
| Port 4000 in use | Run `bundle exec jekyll serve --port 4001` |
| Gem conflicts | Run `bundle update` then retry |
| Changes not showing | Hard-refresh the browser (Ctrl+Shift+R) or restart the server |

### Production build (optional)

To generate static files into `_site/` without serving:

```bash
bundle exec jekyll build
```

Open `_site/index.html` or serve the folder with any static file server.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `yourusername.github.io` or a project repo).
2. In **Settings → Pages**, set the source to the branch that contains this site (usually `master` or `main`).
3. GitHub Pages will run Jekyll automatically. The live URL will be `https://<username>.github.io/<repo>/`.

The site is configured to work with GitHub Pages via the `Gemfile` and `beautiful-jekyll-theme` gemspec.

---

## Page reference

### Home (`/`)

The landing page. Features:

- **Hero section** with product pitch and call-to-action buttons
- **Live admin dashboard mockup** — an animated panel showing a server admin's view of incoming visitors with float bot scores (0.000–1.000), animated score bars, verdict badges (HUMAN / BOT / REVIEW), and rolling counters for verified humans, bots blocked, and total sessions
- **Feature grid** highlighting hardware attestation, float scoring, latency, and research backing
- **Footer CTA** linking to pricing and contact

### Research (`/research/`)

Showcases the peer-reviewed publications that inform UniqID's approach:

1. **Varol et al. (2017)** — *Online Human-Bot Interactions: Detection, Estimation, and Characterization* (ICWSM). Covers bot detection and characterization at scale.
2. **Kohnhäuser et al. (2013)** — *Remote Attestation for Embedded Systems* (ACM CCS). Covers hardware trust roots used in UniqID's attestation pipeline.

Each card includes a summary and an external link to the publication.

### Pricing (`/pricing/`)

Three-tier pricing table (Basic, Professional, Enterprise) with feature lists and links to the contact form for sign-up or sales enquiries.

### Getting Started (`/get-started/`)

Integration guide covering:

- Where to place bot checks in your application
- Plan selection
- API response format (example JSON with `bot_score` float)
- Recommended deployment patterns (inline gate, review queue, allow list)

### Contact (`/contact/`)

Enquiry form with fields for name, email, company, and message. Submissions are sent via [FormSubmit](https://formsubmit.co/) to the address configured in `_config.yml` (`contact_form_endpoint`). The email address is **not displayed** anywhere on the site.

> **First-time setup:** After deploying, submit the contact form once and confirm the delivery address via the FormSubmit verification email.

### Request Info (`/request-info/`)

Legacy URL that redirects to `/contact/`.

---

## Configuration

Key settings in `_config.yml`:

| Setting | Purpose |
|---------|---------|
| `title` | Site name shown in navbar and browser tab |
| `navbar-links` | Navigation menu items |
| `contact_form_endpoint` | FormSubmit URL for contact enquiries (email hidden from visitors) |
| `site-css` | Loads `/assets/css/uniqid-dark.css` globally |
| Color variables (`page-col`, `navbar-col`, etc.) | Dark theme palette |

Custom assets:

| File | Purpose |
|------|---------|
| `assets/css/uniqid-dark.css` | Dark theme, dashboard styles, form and card components |
| `assets/js/dashboard-demo.js` | Animated visitor table and live stat counters on the home page |

---

## License

Built on Beautiful Jekyll by [Dean Attali](https://deanattali.com). See [LICENSE](LICENSE) for details.
