const resultadoDiv1 = document.querySelector('#resultado .piloto-resultado:nth-child(1)');
const resultadoDiv2 = document.querySelector('#resultado .piloto-resultado:nth-child(2)');
const resultadoDiv3 = document.querySelector('#resultado .piloto-resultado:nth-child(3)');

{ 
    let logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener('mouseover', function() {
            logo.style.transform = 'scale(1.2)';
        });
        logo.addEventListener('mouseout', function() {
            logo.style.transform = 'scale(1)';
        });
    }
}

{ 
    let menuItems = document.querySelectorAll('nav > ul > li');
    menuItems.forEach(item => {
        let subMenu = item.querySelector('ul');
        if (subMenu) {
            item.addEventListener('mouseover', function() {
                subMenu.style.display = 'block';
            });
            item.addEventListener('mouseout', function() {
                subMenu.style.display = 'none';
            });
        }
    });
} 

let fotos = [
    "./images/sorteo/charles-leclerc.png",
    "./images/sorteo/fernando-alonso.png", 
    "./images/sorteo/george-russell.png",
    "./images/sorteo/lewis-hamilton.png",
    "./images/sorteo/max-verstappen.png",
    "./images/sorteo/carlos-sainz.png",
    "./images/sorteo/esteban-ocon.png",
    "./images/sorteo/lando-norris.png",
    "./images/sorteo/oscar-piastri.png",
    "./images/sorteo/yuki-tsunoda.png" 
];

let titulos = [
    "Charles Leclerc", 
    "Fernando Alonso", 
    "George Russell", 
    "Lewis Hamilton", 
    "Max Verstappen",
    "Carlos Sainz",
    "Esteban Ocon",
    "Lando Norris",
    "Oscar Piastri",
    "Yuki Tsunoda" 
];

let imagenes = document.getElementById("imagen");
let imagenes2 = document.getElementById("imagen2");
let imagenes3 = document.getElementById("imagen3");
let nombres = document.getElementById("titulo");
let nombres2 = document.getElementById("titulo2");
let nombres3 = document.getElementById("titulo3");
let premio = document.getElementById("premio");
let premio2 = document.getElementById("premio2");
let premio3 = document.getElementById("premio3");
let ultimo = document.getElementById("ultimo");

function ocultarResultados() {
    if (resultadoDiv1) resultadoDiv1.classList.remove('mostrar');
    if (resultadoDiv2) resultadoDiv2.classList.remove('mostrar');
    if (resultadoDiv3) resultadoDiv3.classList.remove('mostrar');
    if (premio) premio.classList.remove('acierto');
    if (premio2) premio2.classList.remove('acierto');
    if (premio3) premio3.classList.remove('acierto');
    if (imagenes) imagenes.src = "";
    if (imagenes2) imagenes2.src = "";
    if (imagenes3) imagenes3.src = "";
    if (nombres) nombres.innerHTML = "";
    if (nombres2) nombres2.innerHTML = "";
    if (nombres3) nombres3.innerHTML = "";
    if (premio) premio.innerHTML = "";
    if (premio2) premio2.innerHTML = "";
    if (premio3) premio3.innerHTML = "";
    if (ultimo) ultimo.innerHTML = "";
}

function realizarSorteo() {
    const formElement = document.forms.form;
    if (!formElement) {
        alert("Error: No se encuentra el formulario con name='form'.");
        return false;
    }
    
    ocultarResultados();

    let aleatorio = [];
    while (aleatorio.length < 3) {
        let numero = Math.floor(Math.random() * 10);
        if (!aleatorio.includes(numero)) {
            aleatorio.push(numero);
        }
    }

    if (formElement.piloto1.value === formElement.piloto2.value || formElement.piloto1.value === formElement.piloto3.value || formElement.piloto2.value === formElement.piloto3.value) {
        alert("No se puede elegir el mismo piloto.");
        return false;
    } else {
        imagenes.src = fotos[aleatorio[0]]; 
        nombres.innerHTML = "Primer puesto: " + titulos[aleatorio[0]];
        if (formElement.piloto1.value === titulos[aleatorio[0]]) {
            premio.innerHTML = "¡Felicidades! Has acertado el primer puesto. Premio: 300$";
            premio.classList.add('acierto');
        } else {
            premio.innerHTML = "No acertaste el primer puesto.";
        }
        resultadoDiv1.classList.add('mostrar');

        imagenes2.src = fotos[aleatorio[1]];
        nombres2.innerHTML = "Segundo puesto: " + titulos[aleatorio[1]];
        if (formElement.piloto2.value === titulos[aleatorio[1]]) {
            premio2.innerHTML = "¡Felicidades! Has acertado el segundo puesto. Premio: 200$";
            premio2.classList.add('acierto');
        } else {
            premio2.innerHTML = "No acertaste el segundo puesto.";
        }
        resultadoDiv2.classList.add('mostrar');

        imagenes3.src = fotos[aleatorio[2]];
        nombres3.innerHTML = "Tercer puesto: " + titulos[aleatorio[2]];
        if (formElement.piloto3.value === titulos[aleatorio[2]]) {
            premio3.innerHTML = "¡Felicidades! Has acertado el tercer puesto. Premio: 100$";
            premio3.classList.add('acierto');
        } else {
            premio3.innerHTML = "No acertaste el tercer puesto.";
        }
        resultadoDiv3.classList.add('mostrar');
    }

    ultimo.innerHTML = "Sorteo realizado. ¡Gracias por participar!";
}
