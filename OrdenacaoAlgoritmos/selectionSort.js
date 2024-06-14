const arrListaDesordenada = [10, 3, 5, 1, 12, 235, 12, 0, -2]
const arrListaOrdenada = ordenarListaSelectionSort(arrListaDesordenada)

console.log(arrListaOrdenada)


function ordenarListaSelectionSort(arr) {
    let arrCopy = arr.slice();
    const listaOrdenada = [];
    
    while (arrCopy.length > 0) {
        let menorElemento = arrCopy[0];
        let indice = 0;

        for (let l = 1; l < arrCopy.length; l++) {
            if (arrCopy[l] < menorElemento) {
                menorElemento = arrCopy[l];
                indice = l;
            }
        }

        listaOrdenada.push(menorElemento);
        
        arrCopy.splice(indice, 1);
    }

    return listaOrdenada;
}