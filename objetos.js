//Estructura de datos que me sirven para representar entidades de la vida real en programación

const alumno1 = {
nombre: Juan Manuel,
apellido: GeolocationCoordinates,
edad: 28,
dni: 37243567,
domicilio: {
    calle: 'Avenida Monroe',
    numero: '2114',
    ciudad: 'Ciudad Autonoma de Buenos Aires'
}
}

const alumno2 = {
    nombre: Agustina
    apellido: Kisner
    edad: 27
    dni: 38478312
    }

    console.log(alumno1.nombre)
    console.log(alumno1.apellido)
    console.log(alumno1.domicilio.calle)
    console.log(alumno1.domicilio.numero)
    console.log(alumno2.dni)
    alumno2.nombre = 'Maria Agustina'
    console.log(alumno2.nombre)

    //Objetos a partir de un constructor

    function Clase(tipo, horario, profe) {
        this.tipo = tipo;
        this.horario = horario;
        this.profe = profe;
    }

    const Clase1 = new Clase('Yoga','8 Horas','Diana');
    const Clase2 = new Clase('Reiki','16 Horas','Jose');

    console.log(Clase1)
    console.log(Clase2)

    