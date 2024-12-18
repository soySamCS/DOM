/* 

    Evento

        Un evento es una acción o succeso que ocurre en el navegador o un elemento DOM. Puede ser iniciadio por el usuario o sistema y pueden ser "manejados" mediante Javascript.

    Manejar Eventos

        Significa escribir un código que "reaccione" de cierta manera cuando algo específico suceda. Para manejar eventos es importante conocer algunos concepto claves.

    1. Target (Blanco)

        El elemento del DOM en el que occurrió el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.target

    2. Event listener (Escuchador)

        Evento listener es el "oído" que esta atento a que ocurra un evento en un elemento específico. Usamos el método addEventListener para escuchar eventos.

    3. Trigger (Disparador)

        Es simplemento el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario o sistema para activar el evento.

        + Hacer click
        + Mover el ratón
        + Escribir en un input

    4. Event Handler (Manejador)

        El evento handler es la función que se ejecuta cada vez que ocurre un evento. Con código JS le dicimos que hace el event handler.

        + Mostrar un mensaje
        + Cambiar el color
        + Lanzar una alerta
        + ...

    Sintaxis

        target.eventListener( trigger, eventHandler )

        - target: Element dónde occure el evento.
        - listener: Escucha y detecta el evento.
        - trigger: La acción que ocurre en el evento
        - handler: la función que se ejecuta al occurir el evento.

*/

/* 

    Seleccionar el elemento

*/

const button = document.getElementById("button");

/* 

    Manejar el evento

*/

button.addEventListener("click" , mostrarMensaje);

/* 

    Definición la función

*/

function mostrarMensaje() {
    console.log("¡Lo has presionado!");
}