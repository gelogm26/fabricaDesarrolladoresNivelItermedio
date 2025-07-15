// Datos estudiante

//Entrada de datos

let nombreEstuadiante = prompt("Ingrese nombre del estudiante: ");
let edadEstudiante = parseInt(prompt("Ingrese edad del estudiante: "));
let telefonoEstudiante = parseInt(prompt("Ingrese telefono del estudiante: "))
let direccionEstudiante = prompt("Ingrese dirección del estudiante: ")
let promedioNotas = parseFloat(prompt("Ingrese promedio del estudiante: "));
let emailEstudiante = prompt("Ingrese email del estudiante: ")

//Salida datos
//Template string ` ` para no concatenar uno por uno(Es como la función f string en python)
console.log("Datos estudiante");
console.log(`Nombre estudiante: ${nombreEstuadianteEstudiante}`)
console.log(`Edad estudiante: ${edadEstudiante}`)
console.log(`Telefono estudiante: ${telefonoEstudiante}`)
console.log(`Dirección estudiante: ${direccionEstudiante}`)
console.log(`Promedio notas estudiante: ${promedioNotas}`)
console.log(`Email estudiante: ${emailEstudiante}`)