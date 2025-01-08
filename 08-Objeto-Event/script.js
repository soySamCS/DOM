/* 

    Objeto Event

    El Objeto event representa un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse y proporciona información sobre las propiedades y métodos para manejarlo.

    Para acceder al objeto event (e)se pasa automáticamente como un argumento al la función manejadora.

    Sintaxis

        function funcionManejadora(event){
            //Código a ejecutar...
            console.log(event) // Mostrará la lista de propiedades y métodos.
        }

    Propiedades del objeto event:

        - type: Devuélve el tipo de evento.
        - target: Devuélve el elemento dóne ocurre el evento.
        - timeStamp: Devuélve la marca de timpo en milisegundos desde la última carga   de la página.

        - code : Devuélve el código e la tecla presionada.
        - key : Devuélve el valor de la tecla presionada.

        - clientX : Devuélve la posición horiontal del puntero del mouse en relación a la ventana del navegador.
        - clientY : Devuélve la posición vertical del puntero del mouse en relación a la ventana del navegador.

*/

const button = document.getElementsByClassName("button");
button[0].addEventListener('click' , mostrarObjetoEvento);

function mostrarObjetoEvento(event){
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.timeStamp);
    console.log(event.target.innerText);
}

document.addEventListener('keydown' , function(e)
{
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
})

document.addEventListener('mousemove' , (e) => {
    /* console.log(e) */
    console.log("Coord X:" + e.clientX + " Coord Y:" + e.clientY);
})