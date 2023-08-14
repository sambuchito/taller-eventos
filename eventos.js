const divButton = document.querySelector("div");
const button = document.querySelector("button");

document.addEventListener("DOMContentLoaded", () =>{
        divButton.addEventListener("click", () =>{
        alert("Hola!! Soy el div");
        });
        button.addEventListener("click", () =>{
        Event.stopPropagation();
        alert("Holaaa, soy el botón!");
    });
});