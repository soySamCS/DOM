/* 

  Seleccionar el elemento h1 a través de su clase

*/

const titulo = document.querySelector(".titulo");


/* 

  Seleccionamos el nodo seleccionado

  - Nodo expandido -> <h1>...<h1>
  - Nodo abstracto -> h1.titulo

  Algunos navegadores optimizan la representación de los nodos en la consola. (Chrome)

*/

console.log(titulo);

/* 


  Objeto style

   Accedemos a él usando la notación de (.)

    elemento.style

   Resultado es CSS Style Declaration. Es una lista que representa todas las propiedades de estilos en un elemento.

  Únicamente muestra el valor de los estilos en linea declarados directamente en el elemento html.

*/

console.log(titulo.style);

/* 

  Propiedades de Estilo

  Accedemos a las propiedades usando la propiedad de (.)

    elemento.style.nombrePropiedad

  A diferencia de CSS, las propiedades en JS las escribimos usando el formato camelCase.

    CSS -> background-color  (kebab-case)
    JS  -> backgroundColor   (camelCase)

*/

console.log("Valores en linea. Color: " + titulo.style.color + " Fondo: " + titulo.style.backgroundColor);