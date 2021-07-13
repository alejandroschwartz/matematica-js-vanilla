// ----- Codigo del cuadrado  -----

console.group('Cuadrados');

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();
// ----------------------------------------



// ----- Codigo del triangulo  -----

console.group('Tríangulos')

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function alturaTrianguloIso(lado1, lado2, base) {
    if (lado1 === lado2) {
        const altura = Math.sqrt( (lado1*lado1) - ( (base*base)/4) );
        return alert(`Altura de: ${altura} cm. `);
    } else {
        return alert(`No es un triángulo isosceles`);
    }
}

console.groupEnd()
// ----------------------------------------



// ----- Codigo del circulo  -----

console.group('Circulos');

const PI = Math.PI; 

function diamCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diamCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd()
// ----------------------------------------



// Aquí interactuamos con el HTML

// ---------- Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value);

    const resultado = document.getElementById("resCuadrado");
    resultado.innerText = `El perimetro del cuadrado es: ${perimetro.toFixed(2)} cm`;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado(value);

    const resultado = document.getElementById("resCuadrado");
    resultado.innerText = `El area del cuadrado es: ${area.toFixed(2)} cm2`;
}

// ---------- Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = parseInt(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(input3.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    const resultado = document.getElementById("resTriangulo");
    resultado.innerText = `El perimetro del triangulo es: ${perimetro.toFixed(2)} cm`;
}
function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(input3.value);

    const input4 = document.getElementById("InputTrianguloAltura");
    const valueAltura = parseInt(input4.value);

    const area = areaTriangulo(valueBase, valueAltura);

    const resultado = document.getElementById("resTriangulo");
    resultado.innerText = `El area del triangulo es: ${area.toFixed(2)} cm2`;
}

function calcularAlturaTrianguloIso() {
    const input1 = document.getElementById("InputTrianguloIso1");
    const valueLado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTrianguloIso2");
    const valueLado2 = parseInt(input2.value);

    const input3 = document.getElementById("InputTrianguloIsoBase");
    const valueBase = parseInt(input3.value);

    alturaTrianguloIso(valueLado1, valueLado2, valueBase);
}

// ---------- Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);

    const resultado = document.getElementById("resCirculo");
    resultado.innerText = `El perimetro del circulo es: ${perimetro.toFixed(2)} cm`;
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);

    const resultado = document.getElementById("resCirculo");
    resultado.innerText = `El area del circulo es: ${area.toFixed(2)} cm2`;
}
// ----------------------------------------