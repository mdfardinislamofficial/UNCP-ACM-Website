# UNCP ACM Chapter — Website

A modern, fully responsive, multi-page website for the
**Association for Computing Machinery (ACM) Student Chapter** at the
**University of North Carolina at Pembroke**.

> Course: CSC 3380 — Post-Project Assignment
> Author: Fardin Islam

---


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


## License

This project is released under the MIT License — see `LICENSE`.

---

## Credits

Designed and built by Fardin Islam (UNCP CS, 2026) for the
post-project assignment in CSC 3380, with assistance from
modern AI coding tools. UNC Pembroke and ACM trademarks remain the
property of their respective owners.
