/* 

    DOM

        Organiza los elementos del documento en "nodos" en un árbol jerárquico.

    Nodo -> Todo elemento individual de nuestro documento.

    Tipos de Nodo

        1. Nodo de Documento.
        2. Nodo de Elementos.
        3. Nodo de Atributo.
        4. Nodo de Texto.
        5. Nodo de Comentarios.

*/

/* 

    Nodo de Documento

        Este Nodo representa el documento completo del HTML. Incluye el contenido ddese la "raiz" - root, hasta los elementos hijos.

    Para acceder usamos.

        -> document.

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 

    Nodo Elemento

    Para seleccionar Nodos de Elementos, usamos:

        getElementsByTagName("etiqueta")

    Se escribe después del Nodo Document

*/

/* let title = document.getElementsByTagName("p") */

/* console.log(title); */

/* 

    Nodos de Atributo

        Son los nodos que accedemos através de su clase o su ID.

    getElementById("nombreId")
    getElementbyClassName("nombreClase")

    querySelector("nombreSelector") -> El primer elemento que encuentre con ese selector
    querySelectorAll("nombreSelector") -> Seleccionar todo los elementos con el mismo selector.

*/

/* 
let title = document.getElementById("title");

console.log(title.innerText);
console.log(title.id);
console.log(title);

let texts = document.getElementsByClassName("paragraph");

console.log(texts);
console.log(texts[0].textContent);
console.log(texts[1].textContent);
 */


// let titulo = document.querySelector("#h1"); // Tag

// let titulo = document.querySelector("#title"); // Id

let titulo = document.querySelector(".title"); // Class

console.log(titulo);

// let parrafos = document.querySelectorAll("p"); //Tag

// let parrafos = document.querySelectorAll("#paragraph") // Id - No bueno

let parrafos = document.querySelectorAll(".paragraph"); // Class - Recomendado o más usado

console.log(parrafos)



/* 

    Nodo de Texto 

        Son los elementos de texto contenido en las etiquetas de HTML.

        .innerText
        .textContent

*/


let subtitulos = document.querySelector(".subtitle");

console.log(subtitulos.textContent);


/* 

    Nodos de Comentarios

        Tienen un valor de 8 dentro del DOM.

*/

let comentario = document.COMMENT_NODE;

console.log(comentario);