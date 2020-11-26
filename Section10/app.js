////// Manejo de clases en JavaScript //////

class Persona{
    constructor(nombre ,edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}, Profesion/es: `;

        this.profesiones.forEach((trabajo) => {
            biografia += `${trabajo},`;
        })
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }

    getBiografia(){
        return super.getBiografia() + `Nombre: ${this.nombre}, Puesto: ${this.puesto}, Salario: ${this.sueldo}`;
    }
}


const persona1 = new Empleado('Pablo', 30, ['Arquitecto', 'Doctor'], 1000, 'Administrador');
const persona2 = new Empleado('Ana', 25, ['Ingeniera', 'Profesora'], 1500, 'Gerente');
const persona3 = new Persona('Julian', 23, ['Estudiante']);
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());