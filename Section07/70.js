// Obtener elementos por id, por tag y por clase

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(header);

headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Adios';
headerTitle.innerHTML = '<h3>Prueba</h3>'; 

// getElementsByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);
items[0].textContent = 'Prueba de cambiado';

// getElementsByTagName
var items = document.getElementsByTagName('li');
items[2 ].textContent = 'Prueba02';