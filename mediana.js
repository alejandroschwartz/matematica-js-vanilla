function darMediana(lista) {

    // console.log("lista: " + lista)
    // console.log(lista)
    function calcMediaArid(lista) {
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
        const promedio = sumaLista/lista.length;
        console.log("Prom: " + promedio);
        return promedio;
    }

    const mitadLista1 = parseInt(lista.length / 2);
    console.log("Mitad lista1: "+ mitadLista1)

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false; 
        }
    };

    let mediana;
    if( esPar(lista.length) ) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
        const promedio1y2 = calcMediaArid([
            elemento1,
            elemento2,
        ]);
        mediana = promedio1y2
        console.log("es par " + mediana)

    } else {
        mediana = lista[mitadLista1];
        console.log("no es par " + mediana)
    };

    console.log(mediana);
    const resultado = document.getElementById("resultadoPromedio");
    return resultado.innerText = `La mediana es: ${mediana}`;
}


function calcularMediana() {
    const input = document.getElementById("InputValores");
    const valor = input.value;
    console.log(input.value);

    const arrayInput = Array.from(valor.split(","), Number);
    console.log(arrayInput);

    // const lista1 = [
    //     100,
    //     200,
    //     500,
    //     40000000,
    //     350,
    //     480,
    //     180,
    // ];
    // console.log(lista1)

    function compararNumero(a,b) {
        return a - b;
    };
    const listar =  arrayInput.sort(compararNumero);
    console.log(listar);

    const res = darMediana(listar);
    console.log("Res: " + res);
}