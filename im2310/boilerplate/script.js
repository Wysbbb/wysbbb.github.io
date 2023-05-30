
const content = document.querySelector(".distort");
let currentPos = window.pageYOffset;

const callDistort = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;

    console.log("test");
};




let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let cloudLeft = document.getElementById('cloud-left');
let cloudRight = document.getElementById('cloud-right');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
requestAnimationFrame(callDistort);

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    cloudLeft.style.left = value * 0.5 + 'px';
    cloudRight.style.left = value * -0.5 + 'px';
}, {passive: true});
