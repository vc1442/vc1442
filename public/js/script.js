// JavaScript for interactions and animations

// Example function for a simple animation
function fadeIn(element) {
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    requestAnimationFrame(tick);
}

// Example usage: fade in an element with id "myElement"
// const myElement = document.getElementById('myElement');
// fadeIn(myElement);