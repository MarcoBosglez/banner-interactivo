
    console.log("JavaScript is running!");
    
    const content = document.getElementById("logo");
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
    }, 50);

