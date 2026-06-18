// Estado del cajero
let saldo = 50000;
let montoSolicitado = 50000;

// Comisión
let comision = (montoSolicitado > 30000) ? 300 : 0;
let tipoComision = (comision > 0) ? "con comisión 💸" : "sin comisión 🙂";

// Validaciones EN ORDEN

if (typeof montoSolicitado !== "number" || isNaN(montoSolicitado)) {

    console.log("⛔ El monto debe ser un número");

}

else if (montoSolicitado > 200000) {

    console.log("⛔ Límite máximo por operación: $200000");

}

else if (montoSolicitado <= 0) {

    console.log("⛔ Monto inválido");

}

else if (montoSolicitado % 1000 !== 0) {

    console.log("⛔ Solo montos múltiplos de $1000");

}

else if (montoSolicitado + comision > saldo) {

    console.log("⛔ Saldo insuficiente (incluyendo comisión)");

}

else {

    console.log("✅ Retiro exitoso", tipoComision);
    console.log("Entregado:", montoSolicitado);
    console.log("Comisión:", comision);
    console.log("Total descontado:", montoSolicitado + comision);
    console.log("Saldo restante:", saldo - montoSolicitado - comision);

}
