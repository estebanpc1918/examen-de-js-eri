window.onload = function() {
    let cambiarTitulo = prompt("¿Deseas cambiar el título de la página? (sí/no)");

    if (cambiarTitulo.toLowerCase() === "sí" || cambiarTitulo.toLowerCase() === "si") {
        let nuevoTitulo = prompt("Introduce el nuevo título:");
        document.getElementById("titulo").textContent = nuevoTitulo; 
        document.title = nuevoTitulo;  
    }

    let cambiarSubtitulo = prompt("¿Deseas cambiar el subtítulo? (sí/no)");

    if (cambiarSubtitulo.toLowerCase() === "sí" || cambiarSubtitulo.toLowerCase() === "si") {
        let nuevoSubtitulo = prompt("Introduce el nuevo subtítulo:");
        document.getElementById("subtitulo").textContent = nuevoSubtitulo;  
    }

    let cambiarParrafo = prompt("¿Deseas cambiar el párrafo? (sí/no)");

    if (cambiarParrafo.toLowerCase() === "sí" || cambiarParrafo.toLowerCase() === "si") {
        let nuevoParrafo = prompt("Introduce el nuevo párrafo:");
        document.getElementById("parrafo").textContent = nuevoParrafo; 
    }}