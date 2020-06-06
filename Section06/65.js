// Objetos y metodos

var persona = {
    // Propiedades
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento: 1985,
    // Metodos 
    calcularEdad: function(yearNacimiento){
        this.edad = 2020 - this.yearNacimiento;
    }
};

console.log(persona);
persona.calcularEdad();
console.log(persona.edad);