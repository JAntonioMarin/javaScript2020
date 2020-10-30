// Objetos - Lo básico
let miLibro = {
    titulo: 'El libro de JavaScript',
    autor: 'Grover Pablo Vásquez',
    paginas: 400,
    publicado: false
}

console.log(miLibro.titulo);
console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
miLibro.paginas = 500;
console.log(miLibro.paginas);

// Ejecicio de codificacion Objetos
// nombre, edad, ciudad
// cambiar la edad
// Mostrar datos de la persona
let persona = {
    nombre: 'Juan Antonio',
    edad: 34,
    ciudad: 'Granada'
}
persona.edad = 35;
console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);

//Usando objetos con funciones

let miLibroB = {
    titulo: 'Programación PHP',
    autor: 'Pablo Vazquez',
    paginas: 70,
    publicado: true
}

let getResumen = (libro) => {
    return{
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
    }
}

let libroAResumen = getResumen(miLibro);
let libroBResumen = getResumen(miLibroB);
console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);