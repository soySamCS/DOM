/* 

    Métodos de navegación

    Estos métodos nos permiten movernos entre los elementos relacionados en el DOM.

*/

// Refencias

const padre = document.getElementById("parent");
const hijo = document.getElementById("child");
const hermano = document.getElementById("sibling");

// parentMode -> Devuélve el nodo padre del elemento.

console.log(hijo.parentNode);

// childNodes -> Devuélve una colección (NodeList) de todos los nodos hijos, incluyendo elementos de HTML, texto y comentarios.

console.log(padre.childNodes);

// children -> Devuélve una colección de (HMTLCollection) de los nodos hijos que son elementos. Ignora nodos de texto o comentarios

console.log(padre.children);

// firstChild -> Devuelve el primer nodo hijo puede ser un nodo de texto, comentario o elemento.

console.log(padre.firstChild);

// firstElementChild -> Devuelve el primer nodo hijo que sea un elemento.

console.log(padre.firstElementChild);

// lastChild -> Devuelve el último nodo hijo, puede ser nodo de texto, comentario o elemento

console.log(padre.lastChild);

// lastElementChild -> Devuélve el último nodo hijo que sea un elemento.

console.log(padre.lastElementChild);

// nextSibling -> Devuélve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento.

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

// nextElementSibling -> Devuélve el siguiente nodo hermano que sea un elemento.

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

// previousSibling -> Devuélve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

// previousElementSibling -> Devuélve el anterior nodo hermano que sea elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);