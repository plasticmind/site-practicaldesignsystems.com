// # Fire confetti upon successful newsletter submission
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                if (mutation.addedNodes[i].dataset.element === "success") {
                    confetti();
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