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

// Referencia a los objetos

let trabajador = {
    nombre: 'Juan Antonio',
    edad: 34,
    sueldo: 1200
}

let cambiarSueldo = (trabajador, cantidad) => {
    trabajador.sueldo = cantidad;
}

cambiarSueldo(trabajador, 1600);
console.log(trabajador);

// Metodos

let objetoPrueba = {
    nombre: 'Juan Antonio',
    edad: 34,
    sueldo: 1200,
    metodoPrueba: function(){
        return 'Escribiendo desde el método Prueba';
    },
    cambiarEdad: function(edad){
        this.edad = edad;
    }
}

let result = objetoPrueba.metodoPrueba();
console.log(result);

// Uso de this
objetoPrueba.cambiarEdad(45);
console.log(objetoPrueba.edad);

// Objetos String

let nombre = ' Juanaco el bueno ';
let clave = '1234clave5678';

console.log(nombre.length);
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log((nombre.trim().toUpperCase()));
console.log(clave.includes('clave', 0));

// Destructuracion de objetos parte 1

const respuesta = {
    codigo: 200,
    data : {
        persona: {
            nombre: 'Pepe Jose',
            direccion: {
                ciudad: 'Lima',
                pais: 'Peru'
            }
        }
    }
}

let {codigo : aliasCodigo, data : {persona : {nombre: aliasNombre}}} = respuesta;
console.log(aliasCodigo);
console.log(aliasNombre);

console.log(respuesta);

