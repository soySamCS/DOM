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

console.log("Valores en linea: Color: " + titulo.style.color + ". Fondo: " + titulo.style.backgroundColor + ".");

/* 

  Método de propiedad

    Asignar el valor de la propiedad de estilo en el elemento seleccionado.

      elemento.style.nombrePropiedad = "valor"

    - Forma más directa y legible de asignar propiedades.
    - Sólo admite asignar propiedades con formato camelCase.

*/

titulo.style.color = "greenyellow"
titulo.style.backgroundColor = "darkblue"

console.log("Valores asignados con JS: Color: " + titulo.style.color + ". Fondo: " + titulo.style.backgroundColor + ".");

/* 

  Método setProperty()

    Asignamos una propiedad de estilo al elemento seleccionado

      elemento.style.setProperty(nombrePropiedad, valor, important);

    - Más flexible y poderoso.
    - Las propiedades se escribem en formato kebab-case.
    - Parámetro "important" es opcional.

*/

titulo.style.setProperty("color", "violet");
titulo.style.setProperty("background-color", "lightblue", "important");

console.log("Valores asignados con setProperty: Color: " + titulo.style.color + ". Fondo: " + titulo.style.backgroundColor + ".");

/* 

  Eliminar valores de propiedades

    Usamos el método de propiedad y le definimos una cadena de texto vacía.

      elemento.stlye.nombrePropiedad = ""

    Esto elimina los valor previamente definidos en JS y los estilo en linea. (Solo aplica los de CSS)

*/

/* 
titulo.style.color = "";
titulo.style.backgroundColor = "";
 */

/* 

  Método removeProperty

    Esto elimina la propiedad de estilo.

      elemento.style.removeProperty(nombrePropiedad);

    - Las propiedades se pasan en fortmato kebab-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");