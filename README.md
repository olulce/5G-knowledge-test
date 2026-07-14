# 5G NR Quiz — Become a 5G Master

If you want to master 5G communications, this is where you start.

This quiz covers 169 questions spanning the full 5G NR stack: physical channels (PDCCH/PDSCH/PUSCH/PUCCH/PRACH), reference signals (DMRS/CSI-RS/SRS), FAPI P5/P7 message flows, the O-RAN architecture (O-CU/O-DU/O-RU, Fronthaul, F1/E2/A1/O1), S-Plane timing (PTP/SyncE), and real integration debugging scenarios. Test yourself, or challenge your teammates.

## What this is

A self-contained PWA (Progressive Web App). Open the link in iPhone **Safari**, tap "Add to Home Screen," and you get a full-screen, app-like icon on your home screen — works offline, no App Store needed.

## Setup: host the folder somewhere

These files (`index.html`, `manifest.json`, `sw.js`, `icon-*.png`) need to live together and be served over a URL — the PWA features (installability, offline support) don't work if you just double-click `index.html` locally (`file://`).

You're on Windows — no server setup required. Pick one of these free options:

### Option 1: GitHub Pages (recommended — permanent, free, real URL)
1. Sign up at github.com if you haven't already
2. Create a new **public** repository, e.g. `5g-nr-quiz`
3. Upload all the files in this folder ("Add file → Upload files," drag and drop — no command line needed)
4. Go to repository **Settings → Pages**, set Source to the `main` branch, and save
   - Note: Pages is only available for public repos on the free plan. If your repo is private, either switch it to public (Settings → Danger Zone → Change visibility) or use Option 2 below.
5. Wait 1–2 minutes for a URL like:
   `https://your-username.github.io/5g-nr-quiz/`
6. Share that URL with your team

### Option 2: Netlify Drop (fastest — no account needed to try it)
1. Open https://app.netlify.com/drop
2. Drag the entire folder onto the page
3. You'll get a URL in seconds (e.g. `random-name-123.netlify.app`)
4. Share that URL with your team
(For a fixed URL and easy future updates, consider creating a free account.)

### Option 3: Cloudflare Pages
Same idea as Option 1 — go to pages.cloudflare.com and upload the folder the same way. Also free, permanently.

## How teammates install it (iPhone)

1. Open the URL in **Safari** (must be Safari — Chrome and other browsers on iOS can't add to home screen or support offline caching)
2. Tap the Share icon (square with an arrow)
3. Scroll down and tap "Add to Home Screen"
4. Confirm the name, tap "Add"
5. A "5G NR Quiz" icon appears on the home screen — opens full-screen, no address bar, just like a native app

## Updating the question bank later

Just overwrite `index.html` on the server (the question bank lives inside it) and re-upload. Because a Service Worker is installed for offline support, teammates' phones may need a refresh or two (or a full close-and-reopen) to pick up the latest version — that's normal offline-caching behavior, not a bug.

## File list
- `index.html` — the quiz itself (169 questions)
- `manifest.json` — tells iOS this is installable: name, icons, launch mode
- `sw.js` — Service Worker, handles offline caching
- `icon-152/167/180/192/512.png` — app icons at various resolutions (iOS uses different sizes in different contexts)
- `icon.svg` — the icon source file (oscilloscope waveform, matching the quiz's dark theme) — edit this if you want to change the icon later
