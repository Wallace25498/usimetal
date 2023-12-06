const cabecalho = document.querySelector(".header")
const logo = document.querySelector(".Logo")
const logoEscrito = document.querySelector(".logo-escrito")

window.addEventListener("scroll",function(){
  if(window.scrollY > 20){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
    cabecalho.classList.add("header-small"); //TROCA P CLASSE MENOR
    logo.classList.add("sumiu")
    logoEscrito.classList.remove("sumiu")
} else{
    cabecalho.classList.remove("header-small"); //VOLTA P MENU GRANDE ORIGINAL
    logo.classList.remove("sumiu")
    logoEscrito.classList.add("sumiu")
}
})