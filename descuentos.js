function calcularPrecio(pre, des) {
    const porcentajaPagar = 100 - des;
    const precioFinal = (porcentajaPagar*pre)/100;

    const resultadoPrecio = document.getElementById("ResultadoPrecio");
    resultadoPrecio.innerText = `El precio final es: $ ${precioFinal}`;
}

function traerValores() {
    const input1 = document.getElementById("InputPrecio");
    const precioInicial = parseInt(input1.value);
    
    const input2 = document.getElementById("InputDescuento");
    const descuento = parseInt(input2.value);
    
    calcularPrecio(precioInicial, descuento);
}