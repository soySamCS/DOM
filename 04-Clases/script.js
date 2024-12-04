/* 

    Accedemos al primer elemento de la lista

*/

const botanas = document.getElementsByTagName("li");

/* 

    Propiedad classList

     Accedemos a la lista de clases que tiene un elemento

        elemento.classList

     - Devuelve un DOM Token list (Listaddod dde clases en el DOM) en tipo array.

*/

console.log( botanas[0].classList );
console.log( botanas[0].classList[0] ); // Acceso a clases a través de su índice

/*

    Para agregar clases utilizamos el método add()

        elemento.classList.add(clase)

     - El nombre de la clase pasa como string entre "" o ''

*/

botanas[1].classList.add("bg-lightpink");

/* 

    Verificar si existe una clase especifica en un elemento con el método contains()

        elemento.classList.contains("clase")

     - Devuelve true si existe la clase.
     - Devuelve false si no existe la clase.
     - La clase pasa como string

*/

console.log(botanas[2].classList.contains("botana")); // true
console.log(botanas[2].classList.contains("bg-lightgray")); // false

/* 

    Para eliminiar una clase utilizamos el método remove()

        elemento.classList.remove("clase")

     - La clase pasa como un string entre "" o ''

*/

botanas[3].classList.add("bg-lightpink");
botanas[3].classList.remove("bg-lightpink");