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

function cuadrado(num){
    return num * num;
}

console.log(cuadrado(5));

const personas = [
    {
        nombre:'Pablo',
        edad:20
    },{
        nombre:'Ana',
        edad: 25
    }, {
        nombre:'Carlos',
        edad: 30
    },
    {
        nombre:'Pepe',
        edad:35
    }
];
const menores30 = personas.filter(function(persona){
    return persona.edad <30;
});

console.log(menores30);
//Función flecha
const menores30flecha = personas.filter((persona) => persona.edad < 30);
console.log(menores30flecha);

//Destrucción
//ES5
var datos = ['Pablo', 25];

var nombre5 = datos[0];
var edad5 = datos[1];
console.log(nombre5);
console.log(edad5);

//ES6 
var [nombre6d,edad6d]= ['Pablo', 25];
console.log(nombre6d);
console.log(edad6d);

const persona = {
    nombrec: 'Carlos',
    edadc: 30
}
const {nombrec,edadc} = persona;
console.log(nombrec);
console.log(edadc);

const {nombrec: n, edadc: e} = persona;
console.log(n);
console.log(e);

//Ejemplo de destruccion

const calcularMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad > 18 ? true : false;
    return [edad, mayoria];
}

const [edad2, mayoria] = calcularMayoriaEdad(1990);
console.log(edad2);
console.log(`Es mayor de edad: ${mayoria}`);

// Mapas

const datosm = new Map();
datosm.set('nombre', 'Grover');
datosm.set('edad', 30);
datosm.set(1, 'grover@email.com');
datosm.set(2, 'otro@gmail.com');
datosm.set('movil', 99999);

console.log(datosm.get('nombre'));
console.log(datosm.get(2));

//datosm.delete(2);

datos.forEach((value,key)=>{
    console.log(`${key} : ${value}`);
})

// Operador de propagacion (spread operator)

var suma = function(a,b,c,d){
    return a+ b+ c + d;
}

var ope1 = suma(10,20,30,40);
console.log(ope1);

var valores = [10,20,30,40];
const oper2 = suma(...valores);
console.log(oper2);

const rrhh = ['Pedro', 'Pepe', 'Luis'];
const contabilidad = ['Felipe', 'Carlos', 'Maria'];
const empresa = [...rrhh, ...contabilidad ];

console.log(empresa);

