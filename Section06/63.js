// Creando objetos de forma literal

var persona = {
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona);
console.log(persona.apellido);
console.log(persona['trabajo']);

persona.esCasado = false;
console.log(persona.esCasado);