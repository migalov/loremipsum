import data from "../../src/data/index.json";

const isProd = process.argv.includes("--production"),
      isDev = !isProd

export default {

   isProd: isProd,
   isDev: isDev,

   htmlmin: {
      collapseWhitespace: isProd,
      removeComments: true
   },

   twig: {
      data: {
         data: data
      }
   },

   imagemin: {
      vebrose: true
   },

   inlineCss: {
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
   },

   webpack: {
      mode: isProd ? "production" : "development"
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}