window.onload = function() {
    const content = document.getElementById("content");
    content.style.opacity = 0;
    
    // Fade in effect
    let opacity = 0;
    const fadeIn = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(fadeIn);
            slideText(); // Start sliding after fade-in completes
        } else {
            opacity += 0.02;
            content.style.opacity = opacity;
        }
    }, 30);

    // Slide-in effect
    function slideText() {
        let pos = -50; // Start position outside the banner
        content.style.transform = `translateX(${pos}px)`;
        const slide = setInterval(function() {
            if (pos >= 0) {
                clearInterval(slide);
            } else {
                pos += 2;
                content.style.transform = `translateX(${pos}px)`;
            }
        }, 10);
    }
};
