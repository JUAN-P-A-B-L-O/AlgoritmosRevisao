const arrNumeros = [12, 144,-4, -2, 334, 30, 5, 11]
const maiorValor = achaMaiorValor(arrNumeros)

console.log(maiorValor)

function achaMaiorValor(arrNumeros, maiorValor = arrNumeros[0]) {
    const valorAtual = arrNumeros.shift();
    const valorRetornado = valorAtual > maiorValor ? valorAtual : maiorValor

    return arrNumeros.length === 0 ? valorRetornado : achaMaiorValor(arrNumeros, valorRetornado);
}//