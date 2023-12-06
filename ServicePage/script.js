const foto = document.querySelector(".container-foto");
const fade = document.querySelector("#fade");
const zoom = document.querySelector("#zoom");
const fotoZoom = document.querySelector("#img-zoom")
const buttonClose = document.querySelector(".close")
const video = document.getElementById("introducao-video");

// video.volume = 0.06

const toggleFade = () =>{
    fade.classList.toggle("hide");
    zoom.classList.toggle("hide");
}

buttonClose.addEventListener("click", function(){
    toggleFade();
})

document.querySelectorAll('.container-foto').forEach((el) =>
  el.addEventListener('click', (event) => {
    
    toggleFade();
    
    fotoZoom.setAttribute('src', event.target.src);
    
  })
);



const menu=document.querySelector('.menu')
const Navmenu=document.querySelector('.nav-menu')

menu.addEventListener('click',() => {
    menu.classList.toggle('ativo');
    Navmenu.classList.toggle('ativo');
}) 