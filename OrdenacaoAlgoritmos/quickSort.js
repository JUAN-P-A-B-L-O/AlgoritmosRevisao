const arrListaDesordenada = [10, 3, 5, 1.4, 12, 235,230, 12, 0, -2]
const arrListaOrdenada = ordenarListaQuickSort(arrListaDesordenada)

console.log(arrListaOrdenada)


function inverteArray(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr;
}

function obterArrMenoresEarrMariores(arr, pivo) {
    const arrMaioresQueOindice = []
    const arrMenoresQueOindice = []

    arr.forEach(element => {
        if (element < pivo) arrMenoresQueOindice.push(element)
        else {
            arrMaioresQueOindice.push(element)
        }
    });

    return { arrMenoresQueOindice, arrMaioresQueOindice }
}

function arrendondarParaBaixo(number) {
    return Math.floor(number)
}

function ordenarListaQuickSort(arr) {
    if (arr.length === 2) {

        if (arr[0] > arr[1]) {
            arr = inverteArray(arr)
        }

        return arr;
    }
    if (arr.length <= 1) return arr;

    const indicePrimeiroElemento = 0
    const pivo = arr.splice(0, 1)
    
    const { arrMenoresQueOindice, arrMaioresQueOindice } = obterArrMenoresEarrMariores(arr, pivo)

    return ordenarListaQuickSort(arrMenoresQueOindice).concat(pivo, ordenarListaQuickSort(arrMaioresQueOindice))
}