/* 

   1. Seleccionamos el elemento por su ID
   2. Los mostramos por consola

*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

console.log(titulo);
console.log(lista);

/* 

    innerText

        Devuelve un "string" del contenido visible desntro de un elemento.

            elemento.innerText
        
        - Excluye los elementos ocultos.
        - Excluye los espacios en el documento.
        - Excluye las etiquetas HTML.

*/

console.log("Resultados con innerText");
console.log(titulo.innerText);
console.log(lista.innerText);

/* 

    textConten

        Devuelve un "string" del contenido visible de un contenido.

            elemento.textContent

        - Incluye los espacios.
        - Incluye los elementos ocultos.
        - Excluye las etiquetas HTML.

*/

console.log("Resultados con textContent");
console.log(titulo.textContent);
console.log(lista.textContent);

/* 

    innerHTML

        Devuelve un "string" con la estructura interna en elemento seleccionado.

            elemento.innerHTML

*/

console.log("Resultados con innerHTML");
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 

    Modificar el contenido con innerText

        Asignamos el valor al elemento seleccionado.

            elemento.innerText = "string"

*/

titulo.innerText = "Miembros del equipo Noble 😭"
lista.innerText = "Desaparecidos en combate 😥"

/* 

    Modificar el contenido con texContent

        Asignamos  el calor al aelemetno seleccionado

            elemento.textConten = "string"

*/

titulo.textContent = "Mis personajes favoritos de Halo Reach 🤖"
lista.textContent = "Cargando..."

/* 

    Modificar el contenido con innerHTML

        Asignamos el valor al elemento seleccionado incluyendo las etiquetas HTML

            element.innerHTML = "<tag>...</tag>"

*/

titulo.innerHTML = "Los miembros del equipo <span>Noble</span>"
lista.innerHTML = `<li>Noble 1 Carter</li>
                    <li>Noble 2 Kat</li>
                    <li class = "oculto">Noble 5 Jorge</li>
                    <li>Noble 6 Clasificado</li>`