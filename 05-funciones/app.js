
// Funciones
// Función que salude al usuario

let nombreUsuario = prompt('dime tu nombre')

// Declaración de una función
function saludar ( nombre = 'desconocido' ){
    console.log('Función ejecutada...')
    return `Bienvenido ${nombre}`
    console.log ('Esto nunca se va a ver')
}
// Llamado de una función
console.log ( saludar ( nombreUsuario ) )

// Hacer una función que multiplique 2 numeros. La función debe retornar solamente el resultado de la operación. LLamar a la función "multiplicar"

function multiplicar(a, b) {
    return a * b;
}
let resultado = multiplicar(5, 3);
console.log(`El resultado de la multiplicación es: ${resultado}`); 

// Crear una función que le diga cuanto debe ahorrar al mes según sus ingresos. Que la función se llame "calcularAhorro"

function calcularAhorro(ingresosMensuales, porcentajeAhorro) {
    return (ingresosMensuales * porcentajeAhorro) / 100;
}
let ingresos = 3000;
let porcentaje = 20; 

let ahorroMensual = calcularAhorro(ingresos, porcentaje);
console.log(ahorroMensual);
