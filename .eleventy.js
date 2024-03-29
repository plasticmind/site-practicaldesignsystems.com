/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

// plugins
const eleventyPluginNavigation = require("@11ty/eleventy-navigation");
const eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
const timeToRead = require('eleventy-plugin-time-to-read');

// filters
const limit = require("./src/_11ty/filters/limit.js");
const dateISO = require("./src/_11ty/filters/date.js").dateISO;
const dateFull = require("./src/_11ty/filters/date.js").dateFull;
const dateFullWeekday = require("./src/_11ty/filters/date.js").dateFullWeekday;
const dateFeed = require("./src/_11ty/filters/date.js").dateFeed;
const dateYear = require("./src/_11ty/filters/date.js").dateYear;
const shuffle = require("./src/_11ty/filters/shuffle.js");
const excludeDrafts = require("./src/_11ty/filters/excludeDrafts.js");
const excludeFuture = require("./src/_11ty/filters/excludeFuture.js");
const excludeNoIndex = require("./src/_11ty/filters/excludeNoIndex.js");

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
    eleventyConfig.addFilter("excludeDrafts", excludeDrafts);
    eleventyConfig.addFilter("excludeFuture", excludeFuture);
    eleventyConfig.addFilter("excludeNoIndex", excludeNoIndex);

    // collections
    eleventyConfig.addCollection("posts", posts);

    // plugins
    eleventyConfig.addPlugin(eleventyPluginNavigation);
    eleventyConfig.addPlugin(eleventyPluginRss);
    eleventyConfig.addPlugin(timeToRead, {
        style: 'short'
    });

    // watch for changes to css
    eleventyConfig.addWatchTarget("./src/css/");

    // passthrough copy
    eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/i/"); // Post-related images
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/js/");
    eleventyConfig.addPassthroughCopy("./src/admin/"); // Decap CMS

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