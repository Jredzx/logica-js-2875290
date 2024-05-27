
/*const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');

//Crear el evento
miBtn.addEventListener('click', function (){
    pantalla.style.color = 'blueviolet'; //cambia el color
    pantalla.innerText = "Ejecutando script 🤑"; //Cambia el texto dentro de las etiquetas
    pantalla.style.fontFamily = 'Cursive'
})*/


/*let p = {
    style: {
    color: 'rojo',
    fontSize: '3em'
    }, 
    innerText: 'holamundo'
    onclick: 'función'
}

p.style.color = 'blue';*/

        // Ejercicio contador

        //1. Captura de variables
        let contador = 0;
        const maximo = 20;
        const minimo = 0;
        const display = document.getElementById('contador');
        
        //2. Creación de funciones
        function incrementar() {
            if (contador < maximo) {
                contador++;
                actualizarDisplay();
            }
        }

        function decrementar() {
            if (contador > minimo) {
                contador--;
                actualizarDisplay();
            }
        }

        //3. Llamado de eventos
        function actualizarDisplay() {
            display.innerText = contador;
        }


