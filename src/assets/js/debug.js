// Debug mode
const debug = false;
if (debug === true) {

    const debug_holder = document.createElement('div');

    debug_holder.classList.add('c-debug');

    const debugTitle = document.createElement('pre');
    debugTitle.innerHTML = '<b>Debug</b>';
    debug_holder.appendChild(debugTitle);

    const debugSupportsBlendMode = document.createElement('pre');
    debugSupportsBlendMode.innerHTML = 'Supports Blend Mode: ' + supportsBlendMode;
    debug_holder.appendChild(debugSupportsBlendMode);
    console.log("supportsBlendMode: " + supportsBlendMode);

    const debugIsReduced = document.createElement('pre');
    debugIsReduced.innerHTML = 'Is Reduced: ' + isReduced;
    debug_holder.appendChild(debugIsReduced);
    console.log("isReduced: " + isReduced);

    const debugScrollThreshold = document.createElement('pre');
    debugScrollThreshold.innerHTML = 'Scroll Threshold: ' + scrollThreshold;
    debug_holder.appendChild(debugScrollThreshold);
    console.log("scrollThreshold: " + scrollThreshold);

    document.querySelector('body').appendChild(debug_holder);

}