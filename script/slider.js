let slidesR = document.querySelectorAll('.img_sliders');
let slidesL = document.querySelectorAll('.img_sliders');

const next = document.querySelector('.strelka2');
const prev = document.querySelector('.strelka1');
let parent = document.querySelector('.row5_slider');

function reload() {
    slidesR.forEach(item => {
        item.classList.remove('img_aktive');
    });
    slidesL.forEach(item => {
        item.classList.remove('img_aktive');
    });
}


let offsetR = 0;
let offsetL = 0;
let setR = 0
let setL = 0

function right() {
    setL = 0;
    offsetL = 0;
    parent.appendChild(slidesR[offsetR]);
    if (offsetR + 1 == slidesR.length) {
        offsetR = -1;
    }
    offsetR++;

    slidesL = [];
    slidesL = document.querySelectorAll('.img_sliders');

    reload();

    slidesR[setR + 3].classList.add('img_aktive');
    if (setR + 4 == slidesR.length) {
        setR = -4; 
    }
    setR++;

}

function left() {
    setR = 0;
    offsetR = 0;
    parent.prepend(slidesL[offsetL + 4]);
    if (offsetL + 4 == 0) {
        offsetL = 1;
    }
    offsetL--;

    slidesR = [];
    slidesR = document.querySelectorAll('.img_sliders');

    reload();

    slidesL[setL + 1].classList.add('img_aktive');
    if (setL == -1) {
        setL = slidesL.length - 1; 
    }
    setL--;

}




next.addEventListener('click', right);
prev.addEventListener('click', left);


function changeImagePrev() {
    prev.src = 'img/vektorhover.png';
}
function changeImagePrev1() {
    prev.src = 'img/Vector.png';
}

function changeImageNext(src) {
    next.src = 'img/vektorhover.png';
}
function changeImageNext1(src) {
    next.src = 'img/Vector.png';
}

prev.addEventListener('mouseover', changeImagePrev);
prev.addEventListener('mouseout', changeImagePrev1);
next.addEventListener('mouseover', changeImageNext);
next.addEventListener('mouseout', changeImageNext1);