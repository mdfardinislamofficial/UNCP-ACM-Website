# UNCP ACM Chapter — Website

A modern, fully responsive, multi-page website for the
**Association for Computing Machinery (ACM) Student Chapter** at the
**University of North Carolina at Pembroke**.

> Course: CSC 3380 — Post-Project Assignment
> Author: Fardin Islam

---

## Live demo

Once deployed (see below), the site is available at:

```
https://<your-github-username>.github.io/uncp-acm-website/
https://mdfardinislamofficial.github.io/<repo-name>/
```

---

## Tech stack

| Layer        | Choice                                     |
| ------------ | ------------------------------------------ |
| Markup       | Plain **HTML5** (no build step)            |
| Styling      | **Tailwind CSS** (via the official Play CDN) + a small custom `styles.css` |
| Scripting    | Vanilla **JavaScript** (no framework)      |
| Fonts        | Google Fonts — Inter + Space Grotesk       |
| Hosting      | **GitHub Pages** (free, static)            |

The site is intentionally framework-free so it can be opened by
double-clicking `index.html` and deployed to GitHub Pages with no
toolchain.

---

## Pages

| File           | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| `index.html`   | Home — hero, value props, upcoming events teaser, CTA   |
| `about.html`   | About — mission, ACM background, history, values        |
| `events.html`  | Events — filterable upcoming events + past highlights   |
| `officers.html`| Officers — exec board cards + faculty advisor           |
| `join.html`    | Join — steps, tiers, sign-up form, FAQ                  |
| `contact.html` | Contact — email, Discord, address, contact form, map    |
| `404.html`     | Custom 404 page                                         |

## Folder layout

```
uncp-acm-website/
├── index.html
├── about.html
├── events.html
├── officers.html
├── join.html
├── contact.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/   (placeholder for any future assets)
```

---

## Features

* Responsive, mobile-first design with a hamburger nav for small screens.
* Sticky header with active-page highlighting in UNCP gold.
* Tailwind dark hero sections with a custom UNCP black + gold theme,
  ACM blue accents.
* Animated event filter pills (Workshops / Tech Talks / Hackathons /
  Social) on the Events page.
* Functional sign-up form on **Join** that opens the user's email
  client with a fully pre-filled message.
* Functional contact form on **Contact** that does the same.
* Embedded OpenStreetMap pinning the UNCP campus.
* Accessible focus rings, semantic HTML, alt text on icons, and
  keyboard-navigable details/summary FAQ accordion.
* Custom 404 page (also recognized by GitHub Pages).

---

## Run locally

No build step is required.

**Option 1: Just double-click**

1. Unzip the project.
2. Open `index.html` in any modern browser.

**Option 2: Use a tiny local server (recommended)**

This avoids the small set of issues that arise from `file://` URLs.

```bash
# inside the project folder
python -m http.server 8080
# then open http://localhost:8080
```

…or if you have Node.js:

```bash
npx serve .
```

---

## Deploy to GitHub Pages (the way you'll submit)

The assignment asks you to upload the project to GitHub and submit
the repo link. GitHub Pages also gives you a free live URL you can
include in your submission.

### 1) Create the repository

1. Go to <https://github.com/new>.
2. Name it `uncp-acm-website` (or anything you like).
3. Set it to **Public**.
4. **Do not** add a README, .gitignore, or license — this project
   already includes them. Click **Create repository**.

### 2) Push the project

From inside the `uncp-acm-website/` folder (in a terminal):

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit — UNCP ACM Chapter site"
git remote add origin https://github.com/<your-username>/uncp-acm-website.git
git push -u origin main
```

> If you don't have git installed, you can also drag-and-drop all the
> files into your new repo on github.com using the **"Add file →
> Upload files"** button.

### 3) Turn on GitHub Pages

1. In your repo, click **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`. Click **Save**.
4. Wait ~30–60 seconds. GitHub will display the URL — usually:
   `https://<your-username>.github.io/uncp-acm-website/`

That's it. Visit the URL — your site is live.

---

## What to submit on Canvas

Submit a **text entry** that contains both:

1. **Repository link** — e.g. `https://github.com/<your-username>/uncp-acm-website`
2. **Live site link** — e.g. `https://<your-username>.github.io/uncp-acm-website/`

Optionally include a one-paragraph note on the AI tools you used
(Claude/Copilot/etc.) and the role they played in your workflow, so
you're transparent with your professor — the assignment explicitly
allows AI use for the post-project.

---

## Browser support

Tested on the latest versions of Chrome, Firefox, Edge, and Safari
(both desktop and mobile).

---

## License

This project is released under the MIT License — see `LICENSE`.

---

## Credits

Designed and built by Fardin Islam (UNCP CS, 2026) for the
post-project assignment in CSC 3380, with assistance from
modern AI coding tools. UNC Pembroke and ACM trademarks remain the
property of their respective owners.
