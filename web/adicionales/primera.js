let boton1 = document.getElementById("botonPasaPagina1");
let casilla1 = document.getElementById("casillaCheck1");


boton1.addEventListener("click", pasarpag1);

function pasarpag1(e) {
  
    e.preventDefault(); 
    
    if (casilla1.checked) {
     
        alert("Todos los datos son correctos. Será redirigido a la pasarela de pago para finalizar la compra.");
        

        window.location.href = "procesar_compra.php";
        
    } else {
      
        alert("Debes aceptar los términos y condiciones para continuar con la compra.");
    }
}