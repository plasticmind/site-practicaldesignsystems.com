module.exports = {
    buildDate: new Date(),
    url: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://practicaldesignsystems.com',
    title: process.env.ELEVENTY_ENV === 'development' ? '🔴 Practical Design Systems' : 'Practical Design Systems',
    name: 'Practical Design Systems',
    description: "Better collaboration between design and engineering teams.",
    twitter: "@plasticmind",
    logo: "/android-chrome-512x512.png",
    ogImage: "/assets/img/pds-logo-open-graph.png",
    // Used for structured data (JSON-LD) so search engines and AI models can
    // connect the site, the consultancy, and its author as one entity.
    author: {
        name: "Jesse Gardner",
        url: "https://plasticmind.com/",
        image: "/assets/img/jesse-avatar.jpg",
        sameAs: [
            "https://plasticmind.com/",
            "https://linkedin.com/in/plasticmind/",
            "https://twitter.com/plasticmind",
            "https://adplist.org/mentors/jesse-gardner",
            "https://tiktok.com/@plasticmind"
        ]
    },
    knowsAbout: [
        "Design systems",
        "Design tokens",
        "Component libraries",
        "Design system governance",
        "Storybook",
        "Figma",
        "Design and engineering collaboration",
        "User research"
    ]
};
