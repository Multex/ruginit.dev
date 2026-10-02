# ruginit.dev

Plain HTML + CSS + JS. No frameworks, no build step. Open `index.html` in a browser and that's the site.

## Where stuff lives

```
index.html          home page (the "hi" text is written right in here)
blog.html           list of all posts
projects.html       projects
hosting.html        things I host
covers.html         vocaloid covers
random.html         random stuff (just copy a <section> and write)
blog/               one .html file per post
  _template.html    copy this to start a new post
js/content.js       ← ALMOST EVERYTHING YOU EDIT IS HERE
js/site.js          builds header/sidebar/lists (don't need to touch it)
css/style.css       looks (colors are at the top)
assets/             images, gifs, 88x31 buttons
```

## Cheat sheet

| I want to...                         | Go to                                   |
|--------------------------------------|-----------------------------------------|
| add a thing I host                   | `js/content.js` → `THINGS I HOST`       |
| add a project                        | `js/content.js` → `PROJECTS`            |
| change "stuff i use" (home)          | `js/content.js` → `STUFF I USE`         |
| add a cover                          | `js/content.js` → `VOCALOID COVERS`     |
| change mood / studying / last cover  | `js/content.js` → `STATUS LINE`         |
| change "now listening" etc.          | `js/content.js` → `NOW`                 |
| change my social links               | `js/content.js` → `ELSEWHERE`           |
| change/hide the visitor counter      | `js/content.js` → `VISITOR COUNTER`     |
| add an 88x31 button                  | `js/content.js` → `88x31 BUTTONS`       |
| set my avatar gif                    | put it in `assets/`, then `SITE.avatar` |
| change the "hi" text                 | `index.html` → `HI / ABOUT ME`          |
| change colors                        | `css/style.css` → top of the file       |

Adding something = copy the `{ ... },` block above, paste, edit. Mind the commas.

## Writing a blog post

1. Copy `blog/_template.html` → `blog/my-post.html`
2. Write between `YOUR POST STARTS HERE` and `YOUR POST ENDS HERE`
3. Add it to `POSTS` in `js/content.js` so it shows up in the lists
4. Change the link preview tags at the top of the file (`og:title`,
   `description`, `og:url`). Optional: a 1200x630 `.jpg` in `assets/og/` for `og:image`

## Link previews (Discord, Twitter...)

Every page has `og:` meta tags in its `<head>`. They have to be written in the
html (Discord doesn't run js, so `site.js` can't make them). They use full
`https://ruginit.xyz/...` urls, so if the domain changes, search and replace
`https://ruginit.xyz/` in all .html files. Default image: `assets/og/default.jpg`.

## Adding a new page

Copy `random.html`, rename it, change `data-page="random"` to the new name,
then add it to `NAV` in `js/content.js`.

## Putting it online

It's just files. Copy the whole folder to any web server (nginx/caddy on your
VPS, GitHub Pages, Cloudflare Pages, Codeberg Pages...).
