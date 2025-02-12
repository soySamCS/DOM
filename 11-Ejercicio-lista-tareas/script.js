// Referencias

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById('taskList');

//Add event listener

addButton.addEventListener("click", createTask);

document.addEventListener("keydown" , (e) => {
    {
        if (e.key === "Enter"){
            createTask();
        }
    }
});

// Funcion manejadora

function createTask() {
    if(taskInput.value){

        /* Creamos el contenedor de una tarea */
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        // Creamos el parrafo de la tarea
        const taskText = document.createElement("p");
        taskText.innerText = taskInput.value;

        // Creamos el contenedor de los iconos
        const taskIcons = document.createElement("div");
        taskIcons.classList.add("task-icons");

        // Crear el icono de check
        const iconChek = document.createElement("i");
        iconChek.classList.add("bi" , "bi-patch-check" , "icon-complete");

        // Crear el icono de trash
        const iconDelete = document.createElement("i");
        iconDelete.classList.add("bi" , "bi-trash" , "icon-delete");

        // Estructura de los elementos
        taskIcons.append(iconChek,iconDelete);
        taskItem.append(taskText, taskIcons);
        taskList.append(taskItem);

        // Escuchadores de los iconos
        iconChek.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.classList.toggle("complete");
        } );

        iconDelete.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.remove();
        } );

         // Regresamos el valor vacío al input
        taskInput.value = "";
    } else {
        alert("Escribe una tarea, por favor 🤔")
    }
}