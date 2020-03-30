const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-lekoarts-gatsby-theme-styleguide-src-template-tsx": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/node_modules/@lekoarts/gatsby-theme-styleguide/src/template.tsx"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/src/templates/pageTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/src/pages/404.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/src/pages/index.js"))),
  "component---src-pages-showcase-js": hot(preferDefault(require("/Users/jpf/www/opencrvs-org/src/pages/showcase.js")))
}

