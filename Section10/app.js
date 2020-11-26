////// Manejo de clases en JavaScript //////

class Persona{
    constructor(nombre ,edad, trabajos = []){
        this.nombre = nombre;
        this.edad = edad;
        this.trabajos = trabajos;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}, Trabajo/s: `;

        this.trabajos.forEach((trabajo) => {
            biografia += `${trabajo},`;
        })
        return biografia;
    }
}
const persona1 = new Persona('Pablo', 30, ['Arquitecto', 'Doctor']);
const persona2 = new Persona('Ana', 25, ['Ingeniera', 'Profesora']);
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());