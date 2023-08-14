/* aqui está mi primer intento: 
const divButton = document.querySelector("div");
const button = document.querySelector("button");

document.addEventListener("DOMContentLoaded", () =>{
        divButton.addEventListener("click", () =>{
        alert("Hola!! Soy el div");
        });
        button.addEventListener("click", () =>{
        e.stopPropagation();
        alert("Holaaa, soy el botón!");
    });
});
*/


// aqui arranca solucion definitiva:

function saludar() {
    alert("Hola tu!");
}

const botonSaludar = document.getElementById("saludarBoton");
botonSaludar.addEventListener("click", function (e) {
    // aqui se detiene la propagación del evento click para evitar que llegue al div
    e.stopPropagation();
    // aqui se llama a la función saludar
    saludar();
});

//  aqui el manejador de eventos para el div
const divContainer = document.getElementById("container");
divContainer.addEventListener("click", function () {
    alert("Holaaa! Soy el div");
});
