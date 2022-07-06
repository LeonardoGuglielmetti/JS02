//Variable Globales
let stock = 10;
let opcion;

//Funciones

const registrarVenta = (cant) => {
    if (stock > cant) {
        stock = stock - cant;
        console.log(´El nuevo stock es de ${stock} unidades.´);
    }
}

const reponer = (cant) => {
    stock = stock + cant;
    console.log(`El nuevo stock es de ${stock} unidades`);

}

//Menu

do {
    opcion = Number(prompt('Ingrese una opcion:\n\n1 - Registrar una venta\n2 - Reponer\n3 - Salir'));
    let cant

    switch (key) {
        case 1:
            cant = Number(prompt('Ingrese la cantidad de unidades a reponer'))
            registrarVenta(cant);            
            break;

        case 2:
            cant = Number(prompt('Ingrese la cantidad de unidades que ingresaron'))
            reponer();
            break;

        case 3:
            alert('Hasta luego');
            break;
    
        default:
            alert('Opcion incorrecta');
            break;
    }
} while (opcion !== 3);