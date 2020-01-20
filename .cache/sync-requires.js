const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/favourkelvin/Documents/fakela.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/favourkelvin/Documents/fakela.github.io/src/pages/404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/Users/favourkelvin/Documents/fakela.github.io/src/pages/archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/favourkelvin/Documents/fakela.github.io/src/pages/index.js")))
}

