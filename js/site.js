// =====================================================================
//  SITE.JS: builds the header, sidebar, footer and lists using the
//  stuff in content.js. You probably don't need to touch this file.
// =====================================================================

// blog posts live one folder deeper, so they set data-root="../"
const ROOT = document.body.dataset.root || "";
const PAGE = document.body.dataset.page || "";

// "blog.html" → "../blog.html" when needed; full urls stay as they are
const link = (url) => (/^(https?:|mailto:|#)/.test(url) ? url : ROOT + url);

// a small [label] button, or nothing if there's no url
const btn = (label, url) => (url ? `<a class="btn" href="${link(url)}">${label}</a>` : "");

const placeholder = (text) => `<div class="ph">${text}</div>`;


// ----- header ---------------------------------------------------------
function renderHeader() {
  const nav = NAV.map(
    (n) => `<a href="${link(n.url)}" class="${n.page === PAGE ? "on" : ""}">${n.label}</a>`
  ).join("");

  const status = STATUS.map((s) => `<span>${s.label}: <b>${s.value}</b></span>`).join("");

  return `
    <header class="top">
      <a class="name" href="${link("index.html")}">${SITE.name}<small>${SITE.tagline}</small></a>
      <nav>${nav}</nav>
    </header>
    <div class="status">${status}</div>`;
}


// ----- sidebar --------------------------------------------------------
function renderSidebar() {
  const socials = SOCIALS.map(
    (s) => `<a href="${s.url ? link(s.url) : "#"}"><span>${s.name}</span><span>${s.handle}</span></a>`
  ).join("");

  const now = NOW.map((n) => `<div class="k">${n.label}</div><div class="val">${n.value}</div>`).join("");

  const quote = QUOTE ? panel("quote", `<p class="quote">"${QUOTE}"</p>`) : "";

  // only on the home page, so it counts visits and not every page click
  const counter = COUNTER && PAGE === "home"
    ? panel("visitors", `<img class="counter" src="${COUNTER}" alt="visitor counter" loading="lazy">`)
    : "";

  return `
    ${panel("elsewhere", `<div class="links">${socials}</div>`)}
    ${panel("now", now)}
    ${quote}
    ${panel("buttons", `<div class="badges">${BUTTONS.map(renderButton).join("")}</div>`)}
    ${counter}`;
}

function panel(title, body) {
  return `<section class="panel"><div class="panel-title"><span>~ ${title}</span></div><div class="panel-body">${body}</div></section>`;
}


// ----- footer ---------------------------------------------------------
function renderFooter() {
  return `<footer>made by ${SITE.name} ✦ ${new Date().getFullYear()}</footer>`;
}


// ----- list items -----------------------------------------------------
// each one turns a block from content.js into html

function renderPost(p) {
  const tags = (p.tags || []).map((t) => `<span class="tag">#${t}</span>`).join(" ");
  return `
    <a class="row" href="${link(p.url)}">
      <div class="t">${p.title}</div>
      <div class="m">${p.date} · ${tags}</div>
    </a>`;
}

function renderCard(item) {
  return `
    <div class="card">
      <b>${item.name}</b>
      <small>${item.desc}</small>
      <div class="btns">${btn("live", item.live)}${btn("source", item.source)}</div>
    </div>`;
}

function renderCover(c) {
  return `
    <a class="row" href="${c.url ? link(c.url) : "#"}">
      <div class="t">${c.title}</div>
      <div class="m">${c.date} · ${c.original}</div>
    </a>`;
}

function renderButton(b) {
  const inner = b.img ? `<img src="${link(b.img)}" alt="${b.alt}" width="88" height="31">` : b.alt;
  return `<a class="badge" href="${b.url ? link(b.url) : "#"}">${inner}</a>`;
}

function renderStack(s) {
  const items = s.items.map((i) => `<span class="chip">${i}</span>`).join("");
  return `
    <div class="stack-group">
      <div class="k">${s.group}</div>
      <div class="chips">${items}</div>
    </div>`;
}

// newest date first; on the same date, the one added last in content.js goes first
const newestFirst = (list) => [...list].reverse().sort((a, b) => b.date.localeCompare(a.date));

const LISTS = {
  posts:    { items: newestFirst(POSTS),  render: renderPost },
  hosting:  { items: HOSTING,  render: renderCard },
  projects: { items: PROJECTS, render: renderCard },
  covers:   { items: newestFirst(COVERS), render: renderCover },
  buttons:  { items: BUTTONS,  render: renderButton },
  stack:    { items: STACK,    render: renderStack },
};


// ----- put it all on the page -----------------------------------------
function fill(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

fill("header", renderHeader());
fill("sidebar", renderSidebar());
fill("footer", renderFooter());
fill("updated", `updated ${SITE.updated}`);
// .mp4/.webm avatars play like a gif (muted, looping), anything else is an image
const avatar = /\.(mp4|webm)$/i.test(SITE.avatar)
  ? `<video src="${link(SITE.avatar)}" autoplay loop muted playsinline></video>`
  : `<img src="${link(SITE.avatar)}" alt="">`;
fill("avatar", SITE.avatar ? avatar : placeholder("your gif"));

// any <div data-list="hosting"></div> gets filled with that list
// add data-limit="3" to only show the first 3
document.querySelectorAll("[data-list]").forEach((el) => {
  const list = LISTS[el.dataset.list];
  if (!list) return;
  const items = list.items.slice(0, Number(el.dataset.limit) || undefined);
  el.innerHTML = items.length ? items.map(list.render).join("") : `<p class="empty">nothing here yet...</p>`;
});
