const usuarios = [
    "Sofía", "Mateo", "Valentina", "Diego", "Camila",
    "Sebastián", "Lucía", "Tomás", "Isabela", "Joaquín",
    "Mariana", "Alejandro", "Martina", "Gabriel", "Ana"
];

const x = parseInt(prompt("Ingrese la posición inicial (x):"));
const y = parseInt(prompt("Ingrese la posición final (y):"));

if (x >= 0 && x < usuarios.length && y > x && y <= usuarios.length) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<h2>Usuarios en el rango seleccionado:</h2><ul>";
    
    for (let i = x; i < y; i++) {
        resultadoDiv.innerHTML += `<li>${usuarios[i]}</li>`;
    }
    
    resultadoDiv.innerHTML += "</ul>";
} else {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p>Rango no son corectos.Por favor, ingrese los valores correctos.</p>";
}
