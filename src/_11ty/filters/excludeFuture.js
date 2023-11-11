/**
 * Exclude posts with draft:true in front matter and drafts in draft folder from collections
 *
 * @param {Array} collection - Eleventy collection
 * @return {Array} Filtered collection
 *   
 **/

module.exports = function(collection) {
    return collection.getFilteredByGlob("src/posts/*.md").filter(function(item) {
        let now = new Date().getTime();
        // Exclude posts with draft: true in front matter or in 'drafts' folder
        return !(now < item.date.getTime());
    });
}