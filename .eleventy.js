// plugins
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// filters
const limit = require("./src/_11ty/filters/limit.js");

// collections
const posts = require("./src/_11ty/collections/posts.js");

module.exports = (eleventyConfig) => {

    // initialize plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // passthrough copy
    eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("./src/assets/css/");

    // base config
    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };

    // Routes
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};