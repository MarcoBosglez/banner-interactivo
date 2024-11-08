window.onload = loadCards; // Start the counter when the page loads

let items = document.querySelectorAll('.slider .item');
let active = 0;
let zIndex = 1;
let currentIndex = 0;

const gradients = [
    "linear-gradient(to bottom, rgba(255,0,150,0.3), rgba(0,204,255,0.3))",
    "linear-gradient(to bottom, rgba(155,104,0,0.3), rgba(255,0,0,0.3))",
    "linear-gradient(to bottom, rgba(0,153,255,0.3), rgba(255,255,0,0.3))"
];

function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 2;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${80*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt + zIndex;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-80*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
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