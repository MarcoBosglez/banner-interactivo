window.onload = loadCards; // Start the counter when the page loads

let items = document.querySelectorAll('.slider .item');
let active = 0;
let zIndex = 2;
let currentIndex = 0;

const gradients = [
    "linear-gradient(225deg, #d88b8b, #e8b77a, #9cbc6b, #78b2cc, #a784c8)", // Muted pastels
    "linear-gradient(225deg, #d77a50, #cc4a58, #a83284, #573aa6, #7c44b8)", // Deeper warm tones
    "linear-gradient(225deg, #5bc8ad, #4ba892, #4c9075, #2f7065, #16655b)", // Deeper aquas
    "linear-gradient(225deg, #d56347, #c2483c, #b03624, #a32a5e, #9a526d)", // Deeper corals and pinks
    "linear-gradient(225deg, #75b87b, #58a565, #419652, #2d6f3d, #1e4b2c)", // Rich greens
    "linear-gradient(225deg, #7aa6d1, #5a8eb6, #3c6890, #2a4e6b, #1a2e44)"
];

function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 2;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${62*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt + zIndex;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-62*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt + zIndex;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    let background = document.getElementById('banner');
    background.style.backgroundImage = `${gradients[currentIndex]}`;
    currentIndex = (currentIndex + 1) % gradients.length;

}
loadShow();

function loadCards() {
    setInterval(() => {
        active += 1;
        if (active == items.length) {
            active = 0
        }
        loadShow();
    }, 2500);
}