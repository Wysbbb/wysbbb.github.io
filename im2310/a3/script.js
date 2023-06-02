const contents = document.querySelectorAll(".distort");
let currentPos = window.pageYOffset;
const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

const callDistort = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    contents.forEach((content) => {
        content.style.transform = "skewY(" + speed + "deg)";
    });

    currentPos = newPos;
};

let text = document.getElementById('text');
let lightLeft = document.getElementById('light-left');
let lightRight = document.getElementById('light-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (window.scrollY >= maxScrollHeight) {
        return; 
    }

    requestAnimationFrame(callDistort);

    text.style.marginTop = value * 2.5 + 'px';
    lightLeft.style.left = value * -1.5 + 'px';
    lightRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
}, { passive: true });
