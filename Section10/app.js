////// Manejo de clases en JavaScript //////

class Persona{
    constructor(nombre ,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona('Pablo', 30);
const persona2 = new Persona('Ana', 25);
console.log(persona1.nombre);
console.log(persona2.nombre);