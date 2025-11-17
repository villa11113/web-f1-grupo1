document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener('mouseover', function() {
            logo.style.transform = 'scale(1.05)';
            logo.style.boxShadow = '0 0 10px #E10600';
        });
        logo.addEventListener('mouseout', function() {
            logo.style.transform = 'scale(1)';
            logo.style.boxShadow = 'none';
        });
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
    
    const contrasenaInput = document.getElementById("contrasena");
    const imagenOjo = document.getElementById("imagen");

    if (imagenOjo && contrasenaInput) {
        imagenOjo.addEventListener("click", togglePasswordVisibility);
    }

    function togglePasswordVisibility() {
        if (contrasenaInput.type === "password") {
            contrasenaInput.type = "text";
        } else {
            contrasenaInput.type = "password";
        }
        
        if (imagenOjo.src.includes("vercontra.jpg")) {
            imagenOjo.src = "images/ojo/novercontra.jpg";
        } else {
            imagenOjo.src = "images/ojo/vercontra.jpg";
        }
    }
});

function validar() {
    const usuario = document.forms["form2"]["usuario"].value.trim();
    const contrasena = document.forms["form2"]["contrasena"].value.trim();

    if (usuario === "" || contrasena === "") {
        alert("ERROR: El campo Usuario y/o Contraseña no pueden estar vacíos.");
        return false;
    }

    if (usuario === "alumno" && contrasena === "sanluis") {
        alert("Acceso concedido. Credenciales correctas.");
        window.location.href = "tratarDatos.php";
        return false;
    } else {
        alert("ERROR: Usuario o Contraseña incorrectos.");
        return false;
    }
}
