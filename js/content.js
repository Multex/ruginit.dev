// =====================================================================
//  CONTENT.JS: almost everything you'll want to change lives here.
//
//  How to add something:
//    1. find the section (Ctrl+F the big title, like "THINGS I HOST")
//    2. copy one { ... }, block, paste it right after, change the text
//    3. don't forget the comma after the closing }
//
//  Links: put the full url ("https://...") or "" to hide that button.
//  Text can contain html, like <b>bold</b> or <a href="...">links</a>.
// =====================================================================


// ---------------------------------------------------------------------
//  ABOUT THE SITE
// ---------------------------------------------------------------------
const SITE = {
  name: "ruginit",
  tagline: "electronic eng. student · teacher · dumb",
  avatar: "assets/images/hutao-eat.gif",
  updated: "01.10.2026",
};


// ---------------------------------------------------------------------
//  MENU
// ---------------------------------------------------------------------
const NAV = [
  { label: "home",     url: "index.html",    page: "home" },
  { label: "blog",     url: "blog.html",     page: "blog" },
  { label: "projects", url: "projects.html", page: "projects" },
  { label: "hosting",  url: "hosting.html",  page: "hosting" },
  { label: "covers",   url: "covers.html",   page: "covers" },
  { label: "random",   url: "random.html",   page: "random" },
];


// ---------------------------------------------------------------------
//  STATUS LINE
// ---------------------------------------------------------------------
const STATUS = [
  { label: "studying",   value: "ccna - cisco" },
  { label: "last cover", value: "television so far so good" },
  { label: "mood",       value: "tired but ok" },
];


// ---------------------------------------------------------------------
//  ELSEWHERE
// ---------------------------------------------------------------------
const SOCIALS = [
  { name: "github",  handle: "multex",  url: "https://github.com/Multex" },
  { name: "twitter", handle: "@ruginit_", url: "https://x.com/ruginit_" },
  { name: "youtube", handle: "Ruginit",   url: "https://www.youtube.com/@ruginit" },
  { name: "twitch",  handle: "multex_p",  url: "https://www.twitch.tv/multex_p" },
];


// ---------------------------------------------------------------------
//  NOW
// ---------------------------------------------------------------------
const NOW = [
  { label: "listening", value: "Water the Roses ♡" },
  { label: "watching",  value: "Love Unseen Beneath the Clear Night Sky" },
  { label: "breaking",  value: "my linux install" },
];


// ---------------------------------------------------------------------
//  QUOTE (sidebar), set it to "" to hide it
// ---------------------------------------------------------------------
const QUOTE = "if I make a mistake in English please don't correct me I have no respect for this language";


// ---------------------------------------------------------------------
//  BLOG POSTS
//  1. copy blog/_template.html → blog/my-new-post.html and write it
//  2. add a block here pointing to it
//  (order doesn't matter, newest date goes first automatically)
// ---------------------------------------------------------------------
const POSTS = [
  {
    title: "hello world (new site who dis)",
    date: "2026-10-01",
    tags: ["meta"],
    url: "blog/hello-world.html",
  },
];


// ---------------------------------------------------------------------
//  THINGS I HOST
// ---------------------------------------------------------------------
const HOSTING = [
  {
    name: "Patchy",
    desc: "Temporary and light file uploader.",
    live: "",     // e.g. "https://patchy.ruginit.xyz"
    source: "https://codeberg.org/Fijxu/patchy",
  },
];


// ---------------------------------------------------------------------
//  PROJECTS
// ---------------------------------------------------------------------
const PROJECTS = [
  {
    name: "Amia",
    desc: "Simple self-hosted video downloader with web UI using yt-dlp and SomeDL",
    live: "https://amia.ruginit.xyz/",
    source: "https://github.com/Multex/amia",
  },
  {
    name: "Barbot-ESP32",
    desc: "Mezclador de cócteles WiFi que funciona con ESP32 y controles usando el navegador",
    live: "",
    source: "https://github.com/Multex/barbot-esp32",
  },
  {
    name: "this website",
    desc: "Plain html + css + js",
    live: "https://ruginit.xyz",
    source: "https://github.com/Multex/ruginit.dev",
  },
];



// ---------------------------------------------------------------------
//  VOCALOID COVERS
// ---------------------------------------------------------------------
const COVERS = [
  {
    title: "Cicada [Kasane Teto Cover]",
    original: "Good Kid",
    date: "2026-03-15",
    url: "https://www.youtube.com/watch?v=5jERrjHmabM",
  },
  {
    title: "Television / So Far So Good [Kasane Teto Cover]",
    original: "Rex Orange County",
    date: "2026-09-19",
    url: "https://youtu.be/a3DI_nVPbf8",
  },
  {
    title: "Premier Inn [GUMI Cover]",
    original: "Good Kid",
    date: "2025-08-18",
    url: "https://youtu.be/TMuMSS2mvdY",
  },
    {
    title: "Promise [Kasane Teto Cover]",
    original: "Laufey",
    date: "2025-03-29",
    url: "https://youtu.be/r8b1-NWy3Gc",
  },
  {
    title: "Colgando en tus manos [Kasane Teto & GUMI Cover]",
    original: "Carlos Baute",
    date: "2025-03-29",
    url: "https://youtu.be/uW20zvKs5Zs",
  },
];


// ---------------------------------------------------------------------
//  88x31 BUTTONS (random page + sidebar)
//  put the image in assets/buttons/ and the path in img
// ---------------------------------------------------------------------
const BUTTONS = [
  { img: "", alt: "88x31", url: "" },
  { img: "", alt: "88x31", url: "" },
  { img: "", alt: "88x31", url: "" },
  { img: "", alt: "88x31", url: "" },
];
