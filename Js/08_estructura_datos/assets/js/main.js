//Arreglos unidimencionales

console.log("<----Arreglos de una dimensión---->");

//Definición
let arregloNumeros = [];
console.log(typeof arregloNumeros);

arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log(arregloNumeros);

console.log("<----Acceder a los datos mediante indexación---->");

console.log(`Primer elemento: ${arregloNumeros[0]}`);
console.log(`Segundo elemento: ${arregloNumeros[1]}`);
console.log(`Quinto elemento: ${arregloNumeros[4]}`);
console.log(`Último elemento: ${arregloNumeros[9]}`);

console.log("Arreglo con diferentes tipos de datos")

let arregloDatos = ["Hola", 43, true, null, 100.25, false, "Otra cadena"];
console.log(`Primer elemento: ${arregloDatos[0]}`);

console.log("Modificar datos del arreglo");
console.log(arregloDatos);
arregloDatos[2] = "¡Hola!, ¿Cómo estás?";
console.log(arregloDatos);

console.log("Métodos para interactuar con la info del arreglo");

console.log("Método push() - Agrega un elemento al final del arreglo");

let arregloPersonas = [];
console.log(arregloPersonas);
arregloPersonas.push("Angelo");
arregloPersonas.push("Diana");
arregloPersonas.push("Maria");
arregloPersonas.push("Ronaldo");
arregloPersonas.push("Juan");
arregloPersonas.push("Juana");
console.log(arregloPersonas);

console.log("Método unshift() - Agrega un elemento al inicio del arreglo");

arregloPersonas.unshift("Manuel");
console.log(arregloPersonas);

console.log("Método pop() - Elimina el último elemento del arreglo y lo devuelve");

console.log(arregloPersonas)
let ultimoDatoArreglo = arregloPersonas.pop();
console.log(arregloPersonas)
console.log(`Último dato: ${ultimoDatoArreglo}`)

console.log("Método shift() - Elimina el primer elemento del arreglo y lo devuelve");

console.log(arregloPersonas)
let primerElementoArreglo = arregloPersonas.shift();
console.log(arregloPersonas);
console.log(`Primer dato del arreglo: ${primerElementoArreglo}`);

console.log("Método splice() - Agrega - elimina o reemplaza elementos en cualquier posición");

console.log(arregloPersonas)
arregloPersonas.splice(1,1,"Modificación con el método splice, primero posición, cantidad de datos, y el valor");
console.log(arregloPersonas)

console.log("Método slice() - Devuelve una copia de una parte del arreglo sin modificar el original - No imprime la última posición del arreglo");

let arregloLetras = ["a", "b", "c", "d"];
let parteArreglo = arregloLetras.slice(1,3)
console.log(arregloLetras);
console.log(parteArreglo);

console.log("Método length() -  Devuelve cuantos elementos tiene el arreglo");

let cantidadElementosArreglo = arregloLetras.length;
console.log(arregloLetras)
console.log(`El arreglo tiene la siguiente cantidad de elementos: ${cantidadElementosArreglo}`)

console.log("<-------------------------------------->")
console.log("Recorrer arreglos con ciclos iterativos");
console.log("<-------------------------------------->")

arregloDatos = ["Hola", 43, true, null, 100.25, false, "Otra cadena"];
console.log(arregloDatos);

console.log("<---Ciclo FOR--->");

for(let i = 0;i <= arregloDatos.length; i++){
    console.log(arregloDatos[i])
}

console.log("<---Ciclo WHILE--->");

let c = 0;

while (c < arregloDatos.length) {
    console.log(arregloDatos[c]);
    c++;
}

console.log("<---Ciclo FOR OF--->");

for(let elemento of arregloDatos){
    console.log(elemento);
}

console.log("<-------------------------------------->")
console.log("Arreglos de múltiples dimensiones");
console.log("<-------------------------------------->")

let arregloBiDimensional = 
[
    [1,2,3], //Posicion 0
    [4,5,6], //Posicion 1
    [7,8,9]  //Posicion 2
]

console.log(arregloBiDimensional)

console.log("<---Acceder a los datos--->");

console.log(arregloBiDimensional[0][0]) //Se accedió al primer arreglo, y a su primer posición)
console.log(arregloBiDimensional[2]) //Se accedió al último arreglo

console.log("<---Modificar elementos de arreglos de múltiples dimensiones--->");

arregloBiDimensional[0] = [0,1,2];
console.log(arregloBiDimensional) //Se modificó todo del primer arreglo
arregloBiDimensional[1][1] = 99;
console.log(arregloBiDimensional) //Se modificó sólo la posición 1 del arreglo en posición 1

console.log("<---Recorrer arreglos de múltiples dimensiones con ciclo for--->");

for(let i = 0; i < arregloBiDimensional.length; i++){
    for(let arregloPequeño = 0; arregloPequeño < arregloBiDimensional[i].length; arregloPequeño++){
        console.log(`Elemento en [${i}[${arregloPequeño}] = ${arregloBiDimensional [i][arregloPequeño]}]`)
    }
}