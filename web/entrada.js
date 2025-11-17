{ 
let logo = document.getElementById("logo")
logo.addEventListener('mouseover', function() {
    logo.style.transform = 'scale(1.2)';
});
logo.addEventListener('mouseout', function() {
    logo.style.transform = 'scale(1)';
});
}
{ 
    
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
    }   
{ 
let inputs = document.querySelectorAll("#dni, #nombre, #email, #edad,#apellidos");
inputs.forEach(input => {
    input.addEventListener("focus", enfocar);
    input.addEventListener("blur", desenfocar);
});
function enfocar() {
    this.style.backgroundColor = "pink";
}
function desenfocar() {
    this.style.backgroundColor = "white";
}
}
function actualizarPrecio() {
    let tipoEntrada = document.getElementById("tipo-entrada").value;
    let zona = document.getElementById("zona").value;
    let edad = parseInt(document.getElementById("edad").value);
    let precioInput = document.getElementById("precio");

    let precio = 0;

    if (tipoEntrada === "adulto") {
        if (zona === "zona1") {
            precio = 80;  
        } else if (zona === "zona2") {
            precio = 60;  
        }
    } else if (tipoEntrada === "infantil") {
        precio = 30;  
    }

    precioInput.value = precio + "€";

    if (tipoEntrada === "infantil" && edad >= 18) {
        alert("La entrada infantil solo es válida para menores de 18 años.");
        return false;  
    } else if (tipoEntrada === "adulto" && edad < 18) {
        alert("La entrada de adulto solo es válida para mayores de 18 años.");
        return false;  
    }
    return true;
}

function validar() {
    let dni = form1.dni.value;
    let nombre = form1.nombre.value;
    let apellidos = form1.apellidos.value;
    let email = form1.email.value;
    let tipoEntrada = form1["tipo-entrada"].value;
    let edad = parseInt(form1.edad.value);
    

    let dniRegex = /^\d{8}[A-Za-z]$/;  
    if (!dniRegex.test(dni)) {
        alert("El DNI debe tener el formato correcto (8 dígitos seguidos de una letra).");
        return false;
    }

    if (nombre.trim() === "") {
        alert("Tienes que poner un nombre.");
        return false;
    }

    if (apellidos.trim() === "") {
        alert("Tienes que poner unos apellidos.");
        return false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("El email no tiene el formato correcto.");
        return false;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, introduce una edad válida.");
        return false;
    }

    if (tipoEntrada === "infantil" && edad >= 18) {
        alert("La entrada infantil solo es válida para menores de 18 años.");
        return false;
    }

    if (tipoEntrada === "adulto" && edad < 18) {
        alert("La entrada de adulto solo es válida para mayores de 18 años.");
        return false;
    }

    alert("¡Compra exitosa! Será redirigido a los términos y condiciones de la compra para finalizar.");
    window.location.href = "./adicionales/primera.html"; 

    return false; 
    
}