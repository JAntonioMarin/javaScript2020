//ES5 - Variables 
var nombre5 = 'Pablo';
var edad = 35;
nombre5 = 'Carlos';
console.log(nombre5);

//ES6 - Variables 
const nombre6 = 'Pedro';
let edad6 = 28;
//nombre6 = 'Ana'; //No se puede, da error
edad6 = 29;
console.log(nombre6);
console.log(edad6);


//Bloque y alcance de las variables
var test;
let test2;
test = 10;
test2 = 10
function prueba(){
    test2 = 15;
    test = 15;
}
prueba();
console.log(test);
console.log(test2);

//Template strings

let nombre = 'Pablo';
let apellido = 'Vasquez';
const ciudad = 'Granada'
const nacimiento = 1985;

function calcularEdad(year){
    return 2019 - year
}

//ES5
console.log(nombre+' '+apellido+ ' nació en '+ciudad+' y su edad es '+calcularEdad(nacimiento));
//ES6
console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`);

//Funciones de cadenas

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombre} `.repeat(5));
console.log(nombreCompleto.includes('blo'));
console.log(nombreCompleto.startsWith('Pa'));
console.log(nombreCompleto.endsWith('uez'));

// Funciones Flecha

const years = [2000, 2005, 2008, 2012];

//ES5

var edad5f = years.map(function(el){
    return 2020 - el;
});
console.log(edad5f);

//ES6

let edad6f = years.map(el => 2020 - el);
console.log(edad6f);
edad6f = years.map((el, index)=> `Edad ${index + 1}: ${2020 - el}`);
console.log(edad6f);

edad6f = years.map(
    (el,index) => {
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad ${index+1}: ${edad}`;
    }
);
console.log(edad6f);