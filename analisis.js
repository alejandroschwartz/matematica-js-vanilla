function calcularSalarios(valor) {

    //  ----------  Helpers  ----------
    function esPar(numerito) {
        return (numerito % 2 === 0);
    };
    
    function calcMediaArid(lista) {
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
        const promedio = sumaLista/lista.length;
        console.log("Prom: " + promedio);
        return promedio;
    };
    
    // ---------- Calculadora de mediana ----------
    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2);
    
        if (esPar(lista.length)) {
            const personitaMitad1 = lista[mitad - 1];
            const personitaMitad2 = lista[mitad];
    
            const mediana = calcMediaArid([personitaMitad1, personitaMitad2]);
            return mediana;
        } else {
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }
    
    // ----------  Mediana general ----------
    const salarioArg = argentina.map(
        function(personita) {
            return personita.salary;
        }
    );
    const salarioArgSorted = salarioArg.sort(
        function(salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );
    const medianaGeneralArg = medianaSalarios(salarioArgSorted);
    
    // ---------- Mediana top10 % ----------
    const spliceStart = (salarioArgSorted.length * (100 - valor) ) / 100;
    const spliceCount = salarioArgSorted.length - spliceStart;
    const salariosArgTop10 = salarioArgSorted.splice(
        spliceStart, 
        spliceCount,
    );
    const medianaArgTop10 = medianaSalarios(salariosArgTop10);
    console.log(`La mediana general Arg: ${medianaGeneralArg}, y del top ${valor}% Arg: ${medianaArgTop10}`,);

    const res = document.getElementById("resultadoSalario");    
    return res.innerText = `La mediana general Arg: ${medianaGeneralArg}, y del top ${valor}% Arg: ${medianaArgTop10}`;
} 

function darSalario() {
    const input1 = document.getElementById("InputValores");
    const valor1 = input1.value;

    calcularSalarios(valor1)
}