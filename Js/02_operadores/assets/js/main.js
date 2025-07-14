let numero1 = 20;
let numero2 = 10;
let numero3 = 30;
let numero4 = "20";
let resultado = 0;

console.log("<-----Operadores arimeticos----->")

resultado = numero1 + numero2;
console.log("Resultado de la suma: "+ resultado);

resultado = numero1 - numero2;
console.log("Resultado de la resta: "+ resultado);

resultado = numero1 * numero2;
console.log("Resultado de la multiplicación: "+ resultado);

resultado = numero1 / numero2;
console.log("Resultado de la división: "+ resultado);

resultado = numero1 % numero2;
console.log("Resultado del módulo de la división: "+ resultado);

resultado = numero1 ** numero2;
console.log("Resultado de la potencia: "+ resultado);

console.log("<-----Operadores de incremento y decremento----->");

numero1++;
console.log("Resultado post-incremento: " + numero1);

++numero1;
console.log("Resultado pre-incremento: " + numero1);

numero1--;
console.log("Resultado post-decremento: " + numero1);

--numero1;
console.log("Resultado pre-decremento: " + numero1);

console.log("<-----Operadores de asignación----->")

numero3 += 3;
console.log("Resultlado de suma asignación: " + numero3)

numero3 -= 2;
console.log("Resultlado de resta asignación: " + numero3)

console.log("<-----Operadores relacionales o de comparación----->")

//Igual que
console.log(numero1 == numero4); //Revisa el valor
console.log(numero1 === numero4); //Revisa el valor y tipo de dato

//Diferente que
console.log(numero1 != numero4); //Revisa el valor
console.log(numero1 !== numero4); //Revisa el valor y tipo de dato

//Menor que
console.log(numero2 < numero1)

//Mayor que
console.log(numero1 > numero2)

//Menor o igual que
console.log(numero2 <= numero1)

//Mayor o igual que
console.log(numero1 >= numero2)

console.log("<-----Operadores Lógicos----->")

let valor = 15;
let valorMinimo = 0;
let valorMaximo = 10;

//AND - Todas las condiciones se deben de cumplir

if (valor >= valorMinimo && valor <= valorMaximo){
    console.log("Se cumple")
}else{
    console.log("No se cumple")
}

//OR - No se deben cumplir todas las condiciones

if (valor >= valorMinimo || valor <= valorMaximo){
    console.log("Se cumple")
}else{
    console.log("No se cumple")
}

console.log("<-----Operadores Ternarios----->")

resultado = (10 > 5) ? 'Verdadero' : 'Falso';
console.log(resultado)

let valorNumero = 110;
resultado = (valorNumero % 2 == 0) ? 'Es par' : 'Es impar';
console.log(resultado)