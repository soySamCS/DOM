/* 

    Handler - Funciones

    El handler en un evento es una función que se ejecuta cuando el evento ocurre.

    Hay tres formas de escribir la funión Handler

        1. Como una función externa 👽
        2. Como una función anónima 🥸
        3. Como una función flecha 🏹


    Función externa:

        Esta función se escribe por afuera del evento y se pasa como argumento al addEventListener.

            function funcionManejadora(){
                // Código a ejecutar
            }

            elemento.addEventListener (tipoEvento , handler);

    Función anónima:

        Esta función se escribe dentro del evento y no tiene nombre.

            elemento.addEventListener(tipoEvento , function(){ // Código a ejecutar } );

    Función flecha

        Esta función se escribe dentro del evento, no tiene nombre, pero es más concisa.

            elemento.addEventListener(tipoEvento , () => { // Código a ejecutar} );

        * Cuando el código que se ejecuta tiene más de 1 linea se debe escribir entre  llaves, si el código que se ejecuta solo tiene 1 linea, se pueden omitir las llaves

*/

/* Referencias */

const externa = document.getElementById("externa");
const anonima = document.getElementById("anonima");
const flecha = document.getElementById("flecha");

/* Función Externa */

function funcionExterna() {
    console.log("¡Click en el botón externa 👽!");
}

externa.addEventListener ('click' , funcionExterna);

/* Función Anónima */

anonima.addEventListener('click' , function(){
    console.log("¡Click en el botón anonima🥸!" )});


/* Función flecha */

flecha.addEventListener('click' , () => console.log("¡Click en el botón de flecha 🏹!"));