// Estado del cajero
let saldo = 50000;
let montoSolicitado = 50000;

// Validaciones EN ORDEN

if (montoSolicitado <= 0) {

    console.log("⛔ Monto inválido");

}

else if (montoSolicitado % 1000 !== 0) {

    console.log("⛔ Solo montos múltiplos de $1000");

}

else if (montoSolicitado > saldo) {

    console.log("⛔ Saldo insuficiente");

}

else {

    console.log("✅ Retiro exitoso");
    console.log("Entregado:", montoSolicitado);
    console.log("Saldo restante:", saldo - montoSolicitado);

}
