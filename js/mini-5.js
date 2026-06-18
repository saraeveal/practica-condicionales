// Estado del jugador
let vidas = 2;
let puntaje = 400;

// Operadores ternarios
let estado =
    (vidas > 0)
    ? "Sigues vivo 🎮"
    : "Game Over 💀";

let mensajePuntaje =
    (puntaje >= 1000)
    ? "¡Nuevo récord! 🏆"
    : "Sigue sumando 💪";

// Mostrar resultados
console.log(estado);
console.log(mensajePuntaje);