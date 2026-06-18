// Dato de entrada
let anio = 2023;

// Condición del año bisiesto
if (
    (anio % 4 === 0 && anio % 100 !== 0)
    ||
    (anio % 400 === 0)
) {
    console.log(anio + " es bisiesto ✅");
}

else {
    console.log(anio + " no es bisiesto ❌");
}
