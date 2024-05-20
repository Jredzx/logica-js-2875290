console.log ("Ejecutando")

//let altura = prompt("Por favor, ingrese su altura en cm:");

/*altura = Number(altura);

if (altura <= 150) {
    alert("Persona de altura baja");
} else if (altura >= 151 && altura <= 170) {
    alert("Persona de altura media");
} else if (altura >= 171) {
    alert("Persona alta");
} else {
    alert("Por favor, ingrese un valor numérico válido.");
}

            let notaMatematicas = prompt("Por favor, ingrese su nota en Matemáticas:");
            let notaEspanol = prompt("Por favor, ingrese su nota en Español:");
            let notaSociales = prompt("Por favor, ingrese su nota en Sociales:");

            notaMatematicas = Number(notaMatematicas);
            notaEspanol = Number(notaEspanol);
            notaSociales = Number(notaSociales);

            let promedio = (notaMatematicas + notaEspanol + notaSociales) / 3;

            if (promedio === 10) {
                alert("Promedio Excelente");
            } else if (promedio > 7 && promedio < 10) {
                alert("Promedio Bueno");
            } else if (promedio <= 7) {
                alert("Promedio Insuficiente");
            } else {
                alert("Por favor, ingrese valores numéricos válidos para las notas.");
            }
        
function seleccionarJugador() {

    let estatura = prompt("Por favor, ingrese su estatura en centímetros:");
    estatura = Number(estatura);


    let velocidad = prompt("Por favor, ingrese su velocidad en segundos (por ejemplo, tiempo en correr 100 metros):");
    velocidad = Number(velocidad);


    let edad = prompt("Por favor, ingrese su edad:");
    edad = Number(edad);

    const estaturaMinima = 180;
    const velocidadMinima = 10; 

    if (isNaN(estatura) || isNaN(velocidad) || isNaN(edad)) {
        alert("Por favor, ingrese valores numéricos válidos para estatura, velocidad y edad.");
        return; 
    }


    if (estatura >= estaturaMinima && velocidad >= velocidadMinima) {

        if (edad < 18) {
            alert("Felicitaciones, ha sido seleccionado para las divisiones menores del equipo de baloncesto.");
        } else {
            alert("Felicitaciones, ha sido seleccionado para el equipo profesional de mayores.");
        }
    } else {

        alert("Lo sentimos, no cumple con los requisitos para ingresar al equipo de baloncesto.");
    }
}

// Llamar a la función para ejecutar el código
seleccionarJugador();*/

// ejercicio 4
let total = prompt ("Ingrese el total de escritorios comprados");
let totalescritorios = (parseFloat(total)) *200;
let precioescritorio = 200;
let diez = (parseFloat(totalescritorios)) *0.1;
let veinte = (parseFloat(totalescritorios)) *0.2;
let cuarenta = (parseFloat(totalescritorios)) *0.4;
let menos5 = (parseFloat(totalescritorios)) - (parseFloat(diez));
let menos10 = (parseFloat(totalescritorios)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalescritorios)) - (parseFloat(cuarenta));
if (total >= 5 & total <10){
    console.log("El precio es " + totalescritorios + " Con el descuento el precio es " + menos10)
}else if (total > 10){
    console.log("El precio es " + totalescritorios + " Con el descuento el precio es " + mas10)
}else {
    console.log("El precio es " + totalescritorios + " Con el descuento el precio es " + menos5)
}

// ejercicio 5
alert("Lista de frutas disponibles:\n- Manzana\n- Plátano\n- Naranja\n- Fresa\n- Piña");
let frutaelegida = prompt("Ingrese el nombre de la fruta").toLowerCase();
let cantidad = prompt("Ingrese la cantidad que desea comprar");
let valores = {
    "manzana": 1400,
    "plátano": 1000,
    "naranja": 1200,
    "fresa": 500,
    "piña": 2000,
};
let valorporunidad = valores[frutaelegida];
let total1 = valorporunidad * cantidad;
alert("Fruta: " + frutaelegida + "\nValor por unidad: $" + parseFloat(valorporunidad) + "\nValor total: $" + parseFloat(total));
