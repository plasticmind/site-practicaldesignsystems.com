/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

// plugins
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// filters
const limit = require("./src/_11ty/filters/limit.js");
const dateISO = require("./src/_11ty/filters/date.js").dateISO;
const dateFull = require("./src/_11ty/filters/date.js").dateFull;
const dateFullWeekday = require("./src/_11ty/filters/date.js").dateFullWeekday;
const dateFeed = require("./src/_11ty/filters/date.js").dateFeed;
const dateYear = require("./src/_11ty/filters/date.js").dateYear;
const shuffle = require("./src/_11ty/filters/shuffle.js");

// collections
const posts = require("./src/_11ty/collections/posts.js");

module.exports = (eleventyConfig) => {

    // filters
    eleventyConfig.addFilter("dateISO", dateISO);
    eleventyConfig.addFilter("dateFull", dateFull);
    eleventyConfig.addFilter("dateFullWeekday", dateFullWeekday);
    eleventyConfig.addFilter("dateFeed", dateFeed);
    eleventyConfig.addFilter("dateYear", dateYear);
    eleventyConfig.addFilter("limit", limit);
    eleventyConfig.addFilter("shuffle", shuffle);

    // collections
    eleventyConfig.addCollection("posts", posts);

    // plugins
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