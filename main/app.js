// variables 
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let open = document.getElementById("open");
let botton = document.getElementsByClassName("btn-header");
let close = true;
let btnclose = document.getElementById("close");
let video = document.getElementById("video-artist");
let bizarro = document.getElementById("bizarros");
let videoPlay = document.getElementById("video-play");
let videoAmy = document.getElementById("video-amy");
let videoW = document.getElementById("video-w");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let tattoo = document.getElementById("filter-tattoo");
let piercing = document.getElementById("filter-piercing");
let micro = document.getElementById("filter-micro");
let todos = document.getElementById("filter-todos")
let i = 0;


// arrays galery
const tattooArr = ["img/tattoo1.jpeg", "img/tattoo2.jpeg", "img/tattoo3.jpeg", "img/tattoo4.jpeg",
    "img/tattoo5.jpeg", "img/tattoo6.jpeg", "img/tattoo7.jpeg"
];

const microArr = ["img/micro1.jpeg", "img/micro2.jpeg", "img/micro.jpeg"];

const piercingArr = ["img/piercing1.jpeg", "img/piercing2.jpeg", "img/piercing3.jpeg", "img/piercing4.jpeg"];

var todosArr = tattooArr.concat(microArr).concat(piercingArr);




// event listeners

open.addEventListener("click", opened);
window.addEventListener("resize", screenAdjust);
btnclose.addEventListener("click", closeVideo);
videoAmy.addEventListener("click", playAmy);
videoW.addEventListener("click", playW);
prev.addEventListener("click", prevPhoto);
next.addEventListener("click", nextPhoto);
tattoo.addEventListener("click", tattooF)
micro.addEventListener("click", microF)
piercing.addEventListener("click", piercingF)
todos.addEventListener("click", todosF)


// funciones
// abrir menu y cerrar menu responsive
function opened() {
    if (close) {
        menu.style.width = '50vw';
        close = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        close = true;

    }
}
// cambiar el menu segun el tamaño de la pantalla
function screenAdjust() {
    if (screen.width >= 780) {
        close = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width')
    }
}

//cerrar el video en la seccion de artistas
function closeVideo() {
    video.classList.remove("open-screen");
    video.classList.add("close-screen");

}
// hacer visible el video
function viewVideo() {
    video.classList.remove("close-screen");
    video.classList.add("open-screen")
}

// ver video de amy
function playAmy() {
    viewVideo();
    videoPlay.src = ("img/amy-movie.mp4");
}

// ver video de w
function playW() {
    viewVideo();
    videoPlay.src = ("img/video2.mp4");
}

// funcion recorrer siguiente galeria
function tattooF() {
    gal = tattooArr;
    var galery = document.getElementById("galery-slider");
    galery.src = "img/galerylogo.jpeg";
}

function microF() {
    gal = microArr;
    var galery = document.getElementById("galery-slider");
    galery.src = "img/galerylogo.jpeg";
}

function piercingF() {
    gal = piercingArr;
    var galery = document.getElementById("galery-slider");
    galery.src = "img/galerylogo.jpeg";
}

function todosF() {
    gal = todosArr;
    var galery = document.getElementById("galery-slider");
    galery.src = "img/galerylogo.jpeg";
}

function nextPhoto() {

    var galery = document.getElementById("galery-slider");
    i++;
    if (i >= gal.length) {
        i = 0;
    }


    galery.src = gal[i];


}

function prevPhoto() {
    var galery = document.getElementById("galery-slider");
    i--;
    if (i < 0) {
        i = gal.length - 1
    }
    galery.src = gal[i];

}