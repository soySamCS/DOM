/* 

    Obtenemos un elemento de referencia.

        - Este es el nodo de HTML  donde vamos a crear un nuevo elemento.

*/

const movies = document.getElementById("movies")

/* 

    Crear un nuevo elemento usamos createElement

        document.createElement("tipoEelemento"")

     - El tipo de elemento pasa como string "" o ''
     - Se debe guardar en una variable o constante

*/

const newMovie = document.createElement("li");

/* 

    Para agregar el elemento al DOM desde la referencia usamos el método append()

        elementoReferencia.append(nuevoElemento)

     - Nuevo elemento no pasa como string.

*/

movies.append(newMovie);

/* 

    Agregamos texto al nuevo elemento con innerText

        element.innerText = valor

     - Valor pasa con string "" o ''

*/

newMovie.innerText = "Los Mitchell contra las máquinas 🤯"

/* 

    Agregamos las clases al nuevo elemento con el métoo add()

        elemento.classList.add(clase)

     - La clase pasa como string "" o ''
     - El método acepta más de un parámetro separándolos con comas ,

*/

newMovie.classList.add("list-item" , "bg-two");

/* 

    Solias y solitos agreguen un 5to elemento.

*/

const newMovie2 = document.createElement("li");

movies.append(newMovie2);

newMovie2.innerText = "The Amazing Spider-man 😎"

newMovie2.classList.add("list-item" , "bg-one");