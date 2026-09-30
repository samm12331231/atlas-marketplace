# Publishing the prototype to a public URL

> **Status: live.** The prototype is published at
> **<https://samm12331231.github.io/atlas-marketplace/>**
>
> Verified end to end: HTML, JS and CSS all return 200 from the live URL, the site renders the seller dashboard at the bare URL, deep links such as `/#journey` and `/#messages` survive a direct load, and the console is free of errors. The remaining sections document how it was done and how to change it.

The brief asks for supporting links that **open without requesting permissions**. A GitHub repository page does not satisfy that on its own — the reviewer needs a link that loads the running prototype directly. That means **GitHub Pages**.

This is already wired up. `.github/workflows/deploy-pages.yml` builds the app and deploys it, and `package.json` has a `build:pages` script that builds with **relative asset paths** (`--base=./`).

That last detail is the one thing that usually breaks a Pages deploy. Vite's default `base` is `/`, so a project site served from `https://<user>.github.io/<repo>/` asks the browser for `/assets/index-*.js` — which 404s, and you get a blank white page. I verified this: with `build:pages`, serving the output from a subdirectory returns 200 for the HTML, the JS and the CSS; with the default build the same request 404s.

---

## Option 1 — GitHub Pages (recommended)

### One-time setup

Run these from the project root:

```bash
git init -b main
git add -A
git commit -m "Atlas Marketplace prototype"
```

Create the repository and push. **The repo must be public** — GitHub Pages on a private repository requires a paid plan.

```bash
gh repo create atlas-marketplace --public --source=. --remote=origin --push
```

Now enable Pages and point it at the workflow:

```bash
gh api -X POST repos/samm12331231/atlas-marketplace/pages -f build_type=workflow
```

Then trigger the deploy (the first push may have run before Pages existed):

```bash
gh workflow run deploy-pages.yml
gh run watch
```

Your URL will be:

```
https://samm12331231.github.io/atlas-marketplace/
```

`gh api repos/samm12331231/atlas-marketplace/pages --jq .html_url` will print the exact URL.

### Updating it later

Any push to `main` redeploys automatically:

```bash
git add -A && git commit -m "Update prototype" && git push
```

### If the deploy fails

| Symptom | Cause | Fix |
| --- | --- | --- |
| Blank white page, console shows 404s for `/assets/...` | Built with the default base instead of `build:pages` | Confirm the workflow runs `npm run build:pages` |
| `Get Pages site failed` / `Pages is not enabled` | Pages not enabled, or enabled before the workflow existed | Run the `gh api ... pages` command above, then re-run the workflow |
| Workflow never appears under Actions | Not pushed to a branch called `main` | Check `git branch --show-current` |
| `npm install` fails in CI | A lockfile/dependency mismatch | Delete `package-lock.json` locally and push; CI will resolve fresh |

---

## Option 2 — Netlify Drop (fastest, ~60 seconds, no Git)

If you want a URL immediately and do not want to deal with repositories:

```bash
npm run build:pages
```

Then open <https://app.netlify.com/drop> and **drag the `dist/` folder** onto the page. You get a public URL straight away. No account needed to start, though claiming the site requires signing up.

Other hosts that work the same way: **Cloudflare Pages** (build command `npm run build:pages`, output directory `dist`) and **Vercel** (same settings).

---

## Option 3 — a `gh-pages` branch instead of Actions

Only needed if Actions is blocked or you would rather not add a workflow:

```bash
npm run build:pages
touch dist/.nojekyll

git add -A --force dist
git commit -m "Deploy prototype to gh-pages"
git subtree push --prefix dist origin gh-pages
```

Then set **Settings → Pages → Source** to the `gh-pages` branch, root folder. The `.nojekyll` file is important: without it GitHub Pages runs Jekyll over the output and can drop files.

---

## Before you send the link

- [ ] Open the URL **in a private/incognito window** while signed out, to confirm it loads with no sign-in or access-request prompt.
- [ ] Click through several screens and reload directly on a screen hash (e.g. `.../#closing`) to confirm deep links survive a reload — the app uses hash routing, so no server rewrites are needed.
- [ ] Check the URL works on a phone too. It does not need to be a mobile design, but a reviewer may open it on one first.
- [ ] If you would rather not publish your written proposal publicly, move `submission/` out of the repo before pushing — the site only needs `src/`, `index.html`, `package.json`, `vite.config.ts`, `tsconfig.json` and `.figma/`.

---

## Note on the asset paths

Do **not** "fix" a blank Pages site by switching the workflow back to plain `npm run build`. The relative base is what makes the site portable. If you ever deploy to a domain root (`https://yourdomain.com/`), `build:pages` still works there — relative paths are valid at the root too.
