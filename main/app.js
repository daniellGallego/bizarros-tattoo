// variables 
let nav = document.getElementById("nav");
let menu= document.getElementById("enlaces");
let open= document.getElementById("open");
let botton= document.getElementsByClassName("btn-header");
let close=true;
let btnclose=document.getElementById("close");
let video=document.getElementById("video-artist");
let bizarro=document.getElementById("bizarros");
let videoPlay = document.getElementById("video-play");
let videoAmy = document.getElementById("video-amy");
let videoW= document.getElementById("video-w");


// event listeners

open.addEventListener("click", opened);
window.addEventListener("resize", screenAdjust);
btnclose.addEventListener("click", closeVideo);
videoAmy.addEventListener("click", playAmy);
videoW.addEventListener("click", playW);

// funciones
// abrir menu y cerrar menu responsive
function opened(){
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
function screenAdjust(){
    if (screen.width >= 780) {
        close = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width')
   }
}

//cerrar el video en la seccion de artistas
function closeVideo(){
    video.classList.remove("open-screen");
    video.classList.add("close-screen");
    
}
// hacer visible el video
function viewVideo(){
    video.classList.remove("close-screen");
    video.classList.add("open-screen")
}

// ver video de amy
function playAmy(){
    viewVideo();
    videoPlay.src=("img/amy-movie.mp4");
}

// ver video de w
function playW(){
    viewVideo();
    videoPlay.src=("img/video2.mp4");
}