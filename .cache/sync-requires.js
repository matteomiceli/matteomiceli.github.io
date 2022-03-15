
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/home/matteo/Projects/matteomiceli.github.io/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/matteo/Projects/matteomiceli.github.io/src/pages/index.jsx"))
}

