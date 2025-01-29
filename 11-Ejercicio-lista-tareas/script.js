// Referencias

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

//Add event listener

addButton.addEventListener("click", createTask)

// Funcion manejadora

function createTask() {
    if(taskInput.value){
        console.log(taskInput.value);
        taskInput.value = ""; // Regresamos el valor vacío al input
    } else {
        alert("Escribe una tarea, por favor 🤔")
    }
}