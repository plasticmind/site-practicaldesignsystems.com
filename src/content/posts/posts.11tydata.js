module.exports = {
    layout: 'layouts/post.njk',
    permalink: '/daily/{{ title | slugify }}/',
    ogtype: 'article'
}