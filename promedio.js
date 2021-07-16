function calcMediaArid(lista) {
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++ ) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista/lista.length;
    console.log(`La sumatoria de la lista es: ${sumaLista}\nEl promedio es: ${promedio}`)

    const res = document.getElementById("resultadoPromedio");    
    return res.innerText = `El promedio es: ${promedio}`;
}

function darMediaArid() {
    const input1 = document.getElementById("InputValores");
    const lista1 = input1.value;

    const arrayInput1 = Array.from(lista1.split(","), Number);
    console.log(arrayInput1);

    calcMediaArid(arrayInput1);
}


// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//       sumaLista = sumaLista + lista[i];
//     }
  
//     const sumaLista = lista.reduce(
//       function (valorAcumulado = 0, nuevoElemento) {
//         if(valorAcumulado == 0) {
//             console.log("Si")
//             return (1 / nuevoElemento);
//         } else {
//             console.log("No")
//             return valorAcumulado + (1 / nuevoElemento);
//         }
//       }, 0
//     );
  
//     const promedioLista = sumaLista / lista.length;
  
//     console.log(lista1)
//     return promedioLista;
// }