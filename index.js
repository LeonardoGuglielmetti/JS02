//Funciones

//Bloques de códigos que nos sirven a nosotros para poder nombrarlos y poder utilizarlos cuantas vesces querramos

//Las funciones deben denotar una acción. Cuando utilicemos dos o más palabras utilizamos el Camel Case que es que la segunda palabra esté en mayúscula.

function saludar() {
    alert('Bienvenidos a nuestra clase de Yoga');
    }

    saludar ();

    const saludar2 = () => {
        alert('Bienvenido a un estilo de vida');
    } //Esto es una función flecha 

    saludar2() //como el código de JS se lee en línea, es imórtante que la identificación de la variable esté por debajo de la función.

    //Yo podría haver utilizado let en lugar de consol pero ese me permitiría redefinir el valor de mi variable. Lo más recomendable es utilizar consol.
    
const sumar = (nombre, espacio, apellido) => nombre + espacio + apellido;
const valor1 = Text(promt('Ingrese su nombre'));
const valor2 = Text(promt('Ingrese su apellido'));

const valorRetornado = sumar (valor1, valor2);
console.log(valorRetornado)

//console.log("hola");//

//variables y valoress//

let nombre;

nombre = "andres";

console.log(nombre);

let table = parseInt(prompt("Ingresar Numero"));

let resultado;

// Ciclo donde vamos sumando uno en uno y vamos generando la multiplicación a partir del número ingresado via Hardcore

for (let i = 1; i <= 10; i++) {
    resultado = ingresarNumero * i;
    console.log(resultado);
}

//Algoritmo para dar un turno del 1 al 20
for (let i = 1; i <= 20; i++) {
    //Como son turnos, solicitaremos en cada repetición del ciclo un Nombre
    let ingresarNombre = prompt("Ingresar Nombre");
    //Informamos en el turno asignado usando el número de repetición (i).
    alert("Turno N°" + i + "Nombre: " + ingresarNombre);

}

while (ingresarNombre = ingresarNombre) {
    ingresarNombre = prompt("Ingresar otro dato");
    alert("El usuario ingresó" + ingresarNombre)
    //Pongo Ingresar nombre por poner algo genérico pero la idea sería que hasta que Andres no ponga Andres se repita infinitas veces
}

switch (ingresarNombre) {
    case "Andres":
        alert("Hola Andres");
        break;

    case "Camila":
        alert("Hola Camila");
        break;

    default:
        alert("¿Quien sos?");
        break;

}

