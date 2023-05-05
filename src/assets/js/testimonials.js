// Register testimonials array
const testimonials = [{
        text: "Hiring Jesse was investing in the growth of our systems and culture. He has a unique eye that can pull everything together from what would engage users, how design impacts the UX, and how engineering can create systems even around the most complex design decisions. That’s true design and strategic systems thinking.",
        author: "Tyler Medina",
        link: "https://www.linkedin.com/in/tylermedina/"
    },
    {
        text: "I appreciated Jesse's balance of hands-on doing and client coaching and empowerment. He brought tools and templates from prior experience, but right-sized them for our particular context, then helped implement it so that it became part of our core process. We got exactly what we needed to be unblocked, in a way that felt easy to maintain over time. ",
        author: "Becky Buck",
        link: "https://www.linkedin.com/in/rebeccabuck/"
    },
    {
        text: "Speed and quality, rigor and experimentation, intentionality and flexibility can co-exist when working with someone who understands the technical and design side as well as the business and human side. Jesse was on our side and truly cared. He was a wonderful collaborator.",
        author: "Lena Blackstock",
        link: "https://www.linkedin.com/in/lenacorinna/"
    },
    {
        text: "Jesse seeks clarity so that he can provide clarity. He looks for answers. Not everybody is like that. People feel shy, like if they ask a question, someone might think badly of them. Jesse isn't like that.",
        author: "Sapana Gupta",
        link: "https://www.linkedin.com/in/sgupta-la/"
    },
    {
        text: "Jesse is a good problem solver and a good collaborator. Not only does he come up with creative ways to solve design problems, he welcomes input from others to come to the best solution. He puts results over ego.",
        author: "Elise Bauer",
        link: "https://www.linkedin.com/in/elisebauer/"
    },
    {
        text: "We were very happy we hired Jesse because of the care he put into our project, his patience with explaining things and working with our legacy systems, and because he’s just generally a kind and reasonable person as well as being a skilled one.",
        author: "Elaina Beiser",
        link: "https://www.linkedin.com/in/elana-beiser/"
    },
    {
        text: "Jesse was great and very easy to get along with — but I also felt like he was personally engaged with the project. It wasn't just a job, it was something that he wanted to do well, that he'd be proud of, and that I'd be happy with. And I was right.",
        author: "David Lebovitz",
        link: "https://www.davidlebovitz.com/"
    },
    {
        text: "Jesse takes complicated problems and makes them easy to understand, which helped our team make good decisions. He helped our product work better in the future by mapping out a costs-to-benefits comparison that help us make better decisions going forward.",
        author: "Arjen Elliot",
        link: "https://www.linkedin.com/in/arjenelliot/"
    }
];

// Choose two random testimonials without repeating
const randomIndexes = [];
while (randomIndexes.length < 2) {
    const index = Math.floor(Math.random() * testimonials.length);
    if (!randomIndexes.includes(index)) {
        randomIndexes.push(index);
    }
}

// Get the testimonials and update the HTML

function populateTestimonials() {
    const testimonialElements = document.querySelectorAll(".c-testimonial");
    if (testimonialElements.length !== null) {
        testimonialElements.forEach((element, i) => {
            const testimonial = testimonials[randomIndexes[i]];
            const testimonialText = testimonial.text;
            const testimonialAuthor = testimonial.author;
            element.querySelector(".c-testimonial__text").textContent = `"${testimonialText}"`;
            element.querySelector(".c-testimonial__author").textContent = `- ${testimonialAuthor}`;
            // Create anchor tag if link is provided
            if (testimonial.link) {
                const testimonialLink = testimonial.link;
                const testimonialLinkElement = document.createElement("a");
                testimonialLinkElement.setAttribute("href", testimonialLink);
                testimonialLinkElement.setAttribute("target", "_blank");
                testimonialLinkElement.setAttribute("rel", "noopener noreferrer");
                testimonialLinkElement.setAttribute("title", "More about " + testimonialAuthor + " →");
                testimonialLinkElement.textContent = testimonialAuthor;
                element.querySelector(".c-testimonial__author").innerHTML = `- `;
                element.querySelector(".c-testimonial__author").appendChild(testimonialLinkElement);
            }
        });
    }
}

// After DOM is loaded, populate the testimonials
document.addEventListener("DOMContentLoaded", function() {
    populateTestimonials();
});