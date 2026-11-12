# Elysium Traders — Student Wins

A static page (plain HTML, CSS and JavaScript) showing student video testimonials and win screenshots. No build step, no dependencies.

## Add a new video

Open `script.js` and add an object to the `videos` array at the top:

```js
{ name: "Student Name", id: "YOUTUBE_VIDEO_ID" }
```

The ID is the part after `watch?v=` in the YouTube link. Cards appear in array order.

## Add a screenshot

1. Drop the image file into the `images/` folder.
2. Add its filename to the `screenshots` array at the top of `script.js`, e.g. `"win-05.jpg"`. Keep the list sorted by name.

Filenames are case-sensitive on GitHub Pages, so `Win.PNG` and `win.png` are different files.

## Turn on GitHub Pages

1. Push this folder to a GitHub repository (files at the repository root).
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

The empty `.nojekyll` file tells GitHub Pages to serve the files as-is.
