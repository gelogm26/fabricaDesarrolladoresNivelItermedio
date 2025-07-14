//Tipos condicionales en JS

//If
console.log("<--Condicional simple-->")
let edad = 18

if (edad >= 18){
    console.log("Mayor de edad")
}

console.log("<--Condicional con else-->")
edad = 16
if (edad >= 18){
    console.log("Mayor de edad")
}else{
    console.log("Menor de edad")
}

console.log("<--Condicional con else if-->")
nota = 85
if (nota >= 90){
    console.log("Excelente")
}else if( nota >= 70){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}

console.log("<--Condicional anidado-->")
let clave = '123456';
let usuario = 'Admin';

if (usuario == 'Admin'){
    if (clave === '123456'){
        console.log("Acceso permitido")
    }else{
        console.log("Acceso denegado")
    }
}else{
    console.log("Error")
}

console.log("<--Condicional Lógico-->")
edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia === true){
    console.log("Seleccionable")
}else{
    console.log("No seleccionable")
}