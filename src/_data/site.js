module.exports = {
    url: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://practicaldesignsystems.netlify.app',
    title: process.env.ELEVENTY_ENV === 'development' ? '🔴 Practical Design Systems' : 'Practical Design Systems',
    description: "Better collaboration between design and engineering teams."
};