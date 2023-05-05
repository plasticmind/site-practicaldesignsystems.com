/**
 * Exclude posts with draft:true in front matter and drafts in draft folder from collections
 *
 * @param {Array} collection - Eleventy collection
 * @return {Array} Filtered collection
 *   
 **/

module.exports = function(collection) {
    return collection.getFilteredByGlob("src/posts/*.md").filter(function(item) {
        // Exclude posts with draft: true in front matter or in 'drafts' folder
        return !(item.inputPath.includes("drafts") || item.data.draft);
    });
}