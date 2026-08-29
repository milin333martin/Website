# Personal site

Two pages, plain HTML and CSS. No build step, no framework — open the files in any
text editor, save, refresh the browser.

```
index.html        About page (the home page)
simulations.html  Simulation results and videos
style.css         All styling for both pages
site.js           One small effect (tick marks highlight as you scroll)
media/            Your videos, posters, and images go here
```

## Preview it locally

Double-clicking `index.html` works. If you'd rather serve it properly:

```bash
cd path/to/this/folder
python3 -m http.server 8000
```

Then open http://localhost:8000

## What to change first

`index.html` has eight numbered `<!-- EDIT -->` comments marking everything that
needs your details:

1. Page title (browser tab, search results)
2. Your name in the header
3. Your field, one short line
4. One sentence on what you do
5. Two paragraphs of background
6. Three research interests
7. Your real links — email, GitHub, Scholar, ORCID
8. Name and year in the footer

Then do the same for the name, title and links in `simulations.html`.

## Adding a video

Each result is one `<figure>` block in `simulations.html`. Inside it, the
`figure__media` div holds a grey placeholder plus three commented-out options.
Delete the placeholder `<div class="figure__slot">…</div>` and uncomment the one
you want:

- **Option A — your own file.** Drop `run-01.mp4` in `media/`. Use H.264 in an
  `.mp4` container; that plays everywhere. A poster image is optional but means
  the figure isn't black before playback.
- **Option B — YouTube.** Use the `/embed/VIDEO_ID` URL, not the `watch?v=` one.
  Good for anything over ~50 MB, since GitHub warns above that and blocks at 100 MB.
- **Option C — a still image.** Same slot, an `<img>` instead.

To compress a large render:

```bash
ffmpeg -i input.mov -vcodec libx264 -crf 26 -pix_fmt yuv420p media/run-01.mp4
```

Lower `-crf` means better quality and a bigger file; 23–28 is a sensible range.

## Adding another result

Copy a whole `<figure class="figure">…</figure>` block, paste it below the last
one, bump the `Fig. N` label, and edit the table rows. The rows are just
`<tr><th scope="row">Label</th><td>Value</td></tr>` — add or remove as needed.

## Adding a third page

Copy `simulations.html`, rename it (say `publications.html`), delete everything
between `<main>` and `</main>` except one `<section class="band">`, then add a
link to the `<nav>` in **all** pages:

```html
<a href="publications.html">Publications</a>
```

Move `aria-current="page"` to whichever link matches the page you're on — that's
what draws the magenta underline.

## Publishing to GitHub Pages

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

Create the repo on GitHub first, and make it **public** — Pages needs a paid plan
for private repos. Then in the repo: **Settings → Pages → Source: Deploy from a
branch → `main` / `(root)` → Save**.

If you name the repo `YOURUSERNAME.github.io`, the site lands at
`https://YOURUSERNAME.github.io`. Any other name puts it at
`https://YOURUSERNAME.github.io/reponame/`. First deploy takes a couple of
minutes; later pushes go live in seconds.

## Design notes

The palette is sampled from a sequential colormap — deep indigo `#2e1b5b`,
magenta `#b5347f`, amber `#f0a830` — which is where the top strip and the legend
swatches come from. The vertical rule down the left with tick marks is meant to
read as a plot axis. All of it is set as CSS variables at the top of `style.css`,
so changing `--magenta` in one place recolours the whole site.
