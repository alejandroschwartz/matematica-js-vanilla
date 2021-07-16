function crearModa(lista) {
    const lista1Count = {};
    
    lista.map(
        function(elemento) {
            if(lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    console.log(lista1Count);
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1] 
        }
    );
    console.log(lista1Array);
    
    const moda = lista1Array[lista1Array.length - 1];
    console.log(moda);

    const res = document.getElementById("resultadoPromedio");    
    return res.innerText = `La moda es: ${moda[0]} y se repite ${moda[1]} veces.`;
}

function darModa() {
    const input1 = document.getElementById("InputValores");
    const lista1 = input1.value;

    const arrayInput1 = Array.from(lista1.split(","), Number);
    console.log(arrayInput1);

    // const listaPrueba = [
    //     1,
    //     2,
    //     3,
    //     1,
    //     100,
    //     200,
    //     500,
    //     40000000,
    //     350,
    //     480,
    //     1,
    //     3,
    //     2,
    //     1,
    //     2,
    //     2,
    // ];

    const res = crearModa(arrayInput1);
    console.log(`La moda es: ${res[0]} y se repite ${res[1]} veces.`);
}