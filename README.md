# z²+c

Minimal artist website for **z²+c**, formerly **Formic Heist**. Plain HTML and CSS, with no dependencies, build step, JavaScript, or third-party embeds.

## Preview locally

From this directory, start any static web server. With Python installed:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [localhost:4173](http://localhost:4173). You can also open `index.html` directly.

## Publish to GitHub Pages

1. Commit and push the site to the `main` branch of `brn-dev/z2-plus-c`.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. In **Actions**, open **Deploy artist website** and choose **Run workflow** if a deployment has not already started.

Once the deployment succeeds, the site will be available at **https://brn-dev.github.io/z2-plus-c/**. This is the website address to use for your artist profile. Future pushes to `main` deploy automatically.

The included [workflow](.github/workflows/pages.yml) publishes only the website files. No API keys or additional secrets are needed. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for the repository setting.

## Edit the site

- `index.html`: name, artist links, three selected releases, contact email, and search/social metadata.
- `styles.css`: layout, colors, typography, and responsive styles.
- `assets/`: optimized copies of the supplied fractal background and streaming avatar, plus icons and a social preview. The original image files are untouched.

All local asset paths are relative so the site works under the `/z2-plus-c/` GitHub Pages path. If you move to a different repository or domain, update the canonical URL, Open Graph URLs, and structured-data URLs in `index.html`.

## Music links

Verified against the Spotify catalog on 22 October 2026:

- [z²+c](https://open.spotify.com/artist/43GtAhy3MgPl7sO7vcgCUi)
- [Formic Heist](https://open.spotify.com/artist/3Wajq1A7KgX94P1Qio5evn)
- [Ponder](https://open.spotify.com/track/3eAiBPY3VpMuU9Klkc1Mof)
- [Need for Madness](https://open.spotify.com/track/4YJPfUn0nmeZBmAkRySrpQ)
- [Endless Waves](https://open.spotify.com/album/0X7RCTHh4fOiSO1XjiJKNJ) (listed as “(Beta) Endless Waves” on Spotify)

Contact: [z2.plus.c.music@gmail.com](mailto:z2.plus.c.music@gmail.com)
