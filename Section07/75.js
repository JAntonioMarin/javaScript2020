// Crear elementos y nodos

//createElement
var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title', 'Hola mundo');

console.log(nuevoDiv);

//createTextNode

var nuevoNodoText = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodoText);
console.log(nuevoDiv);

var contenedor = document.querySelector('header .container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevoDiv, h1);