    
//Punto 1
let arrayNumeros = [];

for (var i = 0; i < 10; i++) {
    let numeroRandom = Math.floor(Math.random() * 100);
    arrayNumeros.push(numeroRandom);
}

console.log(arrayNumeros);

//punto2
let Palabra = prompt("ingresa palabras separadas por comas");

let arregloPalabras = Palabra.split(",");

console.log(arregloPalabras);

//punto 3
let arregloNumero = [10, 40, 30, 20, 15, 5];

let resultadoNumero = arregloNumero.sort(function (a, b){
    return a-b;
} );

console.log(resultadoNumero)
console.log (resultadoNumero[5]) 
console.log (resultadoNumero[0])