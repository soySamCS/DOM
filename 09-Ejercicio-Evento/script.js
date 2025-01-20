/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detectamos evento del movimiento del mouse */

document.addEventListener("mousemove" , (e) => {
    /* console.log(e.clientX);
    console.log(e.clientY); */

    /* Guardamos las coordenadas en variables. */
    let mouseX = e.clientX
    let mouseY = e.clientY

    /* Aplicar las coordenadas al evento emojiCursor */
    emojiCursor.style.left = `${mouseX}px`;
    emojiCursor.style.top = `${mouseY}px`;

} );

/* Cambiar el emoji al presionar una tecla */

document.addEventListener("keydown" , (e) =>{

    /* Utilizamos Switch para asignar un nuevo emoji */
    switch (e.key){
        case "1":
            emojiCursor.textContent = "✌️";
            break;
        case "2":
            emojiCursor.textContent = "🐢";
            break;
        case "3":
            emojiCursor.textContent = "🥸";
            break;
        case "4":
            emojiCursor.textContent = "🩴";
            break;
        case "5":
            emojiCursor.textContent = "😸";
            break;
        default:
            emojiCursor.textContent = "🏹";
    }
} );