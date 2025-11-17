let logo = document.getElementById("logo")
logo.addEventListener('mouseover', function() {
    logo.style.transform = 'scale(1.2)';
});
logo.addEventListener('mouseout', function() {
    logo.style.transform = 'scale(1)';
});




let menuItems = document.querySelectorAll('nav > ul > li');

menuItems.forEach(item => {
    let subMenu = item.querySelector('ul'); 

    if (subMenu) {
        item.addEventListener('mouseover', function() {
            subMenu.style.display = 'block'; 
        })
        item.addEventListener('mouseout', function() {
             subMenu.style.display = 'none'; 
        })
     }
})

setInterval("cambiarFoto()", 3000)
function cambiarFoto(){
let fotos = ["./images/carrusel/1.png","./images/carrusel/2.png","./images/carrusel/3.png","./images/carrusel/4.png","./images/carrusel/5.png","./images/carrusel/6.png","./images/carrusel/7.png","./images/carrusel/8.png","./images/carrusel/9.png","./images/carrusel/10.png"]
let titulos = ["Guggenheim", "Parrilla de salida", "Celebración en el podio", "Parada en boxes", "Brasil 2025", "F1 en Bilbao", "Gastronomía", "Bilbao", "Coche de Russell", "Pupi y Guggenheim"];
let numero = Math.floor(Math.random()*10)
let texto = document.getElementById("titulo")
let imagen = document.getElementById("imagen")
texto.innerHTML= titulos[numero]
imagen.src = fotos[numero]
}





