// Check if the user prefers reduced motion
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

// Check if the browser supports CSS blend modes
const supportsBlendMode = ('CSS' in window && 'supports' in window.CSS) && window.CSS.supports('mix-blend-mode', 'multiply');

// Select the SVG elements (shapes) we want to animate
const logo = document.querySelector('.c-logo--icon');
const shapes = document.querySelectorAll('.c-logo--icon .c-logo__shape');
const shape_outlines = document.querySelectorAll('.c-logo--icon .c-logo__shape--outline');
const shape1 = document.querySelector('.c-logo--icon .c-logo__shape--blue');
const shape2 = document.querySelector('.c-logo--icon .c-logo__shape--green');
const shape3 = document.querySelector('.c-logo--icon .c-logo__shape--red');


// Define starting positions for each shape
// Todo: Make these dynamic based on the SVG's viewBox
const s1_start = 50;
const s2_start = -50;
const s3_start = 20;

// Define a starting opacity
const opacity_start = 0;

// Define a scroll threshold (in pixels) where the animation should stop (only if logo exists)
const scrollThreshold = logo ? logo.offsetTop + 50 : 0;

// Define debounce duration (in milliseconds)
const debounceDuration = 2;

// Variable to store the debounce timer
let debounceTimer;

function prepareAnimation() {
    // Set the initial opacity and position of the shapes
    if (shapes !== null) {
        shapes.forEach((shape) => {
            shape.style.cssText = 'opacity:' + opacity_start + ';';
        });
        shape1.setAttribute('transform', 'translate(' + s1_start + ', 0)');
        shape2.setAttribute('transform', 'translate(' + s2_start + ', 0)');
        shape3.setAttribute('transform', 'translate(' + s3_start + ', 0)');
    }
}

// Ease our animation
function easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5 ?
        (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 :
        (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

// Function to handle the scroll event
function handleScroll() {

    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the relative scroll position (0 to 1) based on the scroll threshold
    const relativeScroll = Math.min(scrollTop / scrollThreshold, 1);

    // Apply easing function to the relative scroll position
    const easedScroll = easeInOutBack(relativeScroll);

    // Apply translation to the SVG elements based on the scroll position

    shape1pos = s1_start - (easedScroll * s1_start);
    shape2pos = s2_start - (easedScroll * s2_start);
    shape3pos = s3_start - (easedScroll * s3_start);
    shape_opacity = opacity_start + (easedScroll * (1 - opacity_start));

    // outline opacity should start at 1 and end at 0
    outline_opacity = 1 - (easedScroll * (1 - opacity_start));


    shapes.forEach((shape) => {
        shape.style.cssText = 'opacity:' + shape_opacity + ';';
    });
    shape_outlines.forEach((outline) => {
        outline.style.cssText = 'opacity:' + outline_opacity + ';';
    });
    shape1.setAttribute('transform', 'translate(' + shape1pos + ', 0)');
    shape2.setAttribute('transform', 'translate(' + shape2pos + ', 0)');
    shape3.setAttribute('transform', 'translate(' + shape3pos + ', 0)');
}

// Debounced scroll event listener
function debounceScroll() {
    // Clear any existing debounce timer
    clearTimeout(debounceTimer);

    // Set a new debounce timer
    debounceTimer = setTimeout(handleScroll, debounceDuration);
}


// After DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // == Add the debounced scroll event listener to the window
    if (supportsBlendMode === true && shape1 !== null) {
        prepareAnimation();
        window.addEventListener('scroll', debounceScroll);
    }

});