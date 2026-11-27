/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

// plugins
const eleventyPluginNavigation = require("@11ty/eleventy-navigation");
const eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
const timeToRead = require('eleventy-plugin-time-to-read');
const Image = require("@11ty/eleventy-img");
const path = require("path");

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

    // Returns the first local post image path in rendered HTML, for social
    // cards and structured data. Returns false when the post has no image.
    eleventyConfig.addFilter("firstImage", (html) => {
        const match = /<img[^>]+src="(?:https:\/\/practicaldesignsystems\.com)?(\/assets\/i\/[^"]+)"/.exec(html || "");
        return match ? match[1] : false;
    });

    // Optimize post images: resize, convert to WebP (keeping the original
    // format as a fallback), and add width/height to prevent layout shift.
    // GIFs are left alone so animations keep working.
    eleventyConfig.addTransform("optimizePostImages", async function (html) {
        if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) return html;
        const imgTag = /<img\b[^>]*\bsrc="(?:https:\/\/practicaldesignsystems\.com)?(\/assets\/i\/[^"]+\.(?:png|jpe?g))"[^>]*>/gi;
        const matches = [...html.matchAll(imgTag)];
        for (const [tag, src] of matches) {
            const alt = (/\balt="([^"]*)"/.exec(tag) || [])[1] || "";
            const metadata = await Image(path.join("src", src), {
                widths: [768, 1536],
                formats: ["webp", "auto"],
                outputDir: "./public/assets/img-opt/",
                urlPath: "/assets/img-opt/",
                filenameFormat: (id, file, width, format) =>
                    `${path.basename(file, path.extname(file))}-${width}w.${format}`,
            });
            const picture = Image.generateHTML(metadata, {
                alt,
                sizes: "(min-width: 800px) 768px, 100vw",
                loading: "lazy",
                decoding: "async",
            });
            html = html.replace(tag, picture);
        }
        return html;
    });

    // Lazy-load and async-decode Markdown images so long posts render faster.
    eleventyConfig.amendLibrary("md", (md) => {
        const defaultImage = md.renderer.rules.image;
        md.renderer.rules.image = (tokens, idx, options, env, self) => {
            tokens[idx].attrSet("loading", "lazy");
            tokens[idx].attrSet("decoding", "async");
            return defaultImage(tokens, idx, options, env, self);
        };
    });

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
    eleventyConfig.addPassthroughCopy("./src/robots.txt"); // Decap CMS
    

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