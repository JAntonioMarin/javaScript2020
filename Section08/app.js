//ES5 - Variables 
var nombre = 'Pablo';
var edad = 35;
nombre = 'Carlos';
console.log(nombre);

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