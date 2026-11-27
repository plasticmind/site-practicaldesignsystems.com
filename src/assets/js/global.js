// # Fire confetti upon successful newsletter submission
// The confetti library loads only after a successful signup, so it doesn't
// slow down every page view.
function fireConfetti() {
    if (window.confetti) { window.confetti(); return; }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    script.onload = function() { window.confetti(); };
    document.head.appendChild(script);
}

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                if (mutation.addedNodes[i].dataset && mutation.addedNodes[i].dataset.element === "success") {
                    fireConfetti();
                    observer.disconnect();
                }
            }
        }
    });
});

if (document.querySelector('.formkit-form')) {
    observer.observe(document.querySelector('.formkit-form'), {
        childList: true,
        subtree: true
    });
}

// # Auto-resize textarea elements
// Thanks, Stephan! https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function(element) {
        element.style.boxSizing = 'border-box';
        var offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', function(event) {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset + 'px';
        });
        element.removeAttribute('data-autoresize');
    });
}

// After DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // == Auto-resize textarea elements
    addAutoResize();

});