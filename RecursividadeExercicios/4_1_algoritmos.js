const arrNumeros = [-4, -2, 0, 5, 11]
const somaNumeros = soma(arrNumeros)

console.log(somaNumeros)

function soma(arrNumeros){
    const head = arrNumeros.shift();
    
    return arrNumeros.length !==0 ? head + soma(arrNumeros) : head;
}