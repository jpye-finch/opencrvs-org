// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-lekoarts-gatsby-theme-styleguide-src-template-tsx": () => import("./../node_modules/@lekoarts/gatsby-theme-styleguide/src/template.tsx" /* webpackChunkName: "component---node-modules-lekoarts-gatsby-theme-styleguide-src-template-tsx" */),
  "component---src-templates-page-template-js": () => import("./../src/templates/pageTemplate.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-features-js": () => import("./../src/pages/features.js" /* webpackChunkName: "component---src-pages-features-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-showcase-js": () => import("./../src/pages/showcase.js" /* webpackChunkName: "component---src-pages-showcase-js" */)
}

