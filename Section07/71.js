// Consulta por selectores

// querySelector

var header = document.querySelector('#main-header');
header.style.border = 'solid 4px #000';

var input = document.querySelector('input');
input.value = 'Hola mundo';

var input2 = document.querySelector('input[type="submit"]');
input2.value = "Enviar";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// querySelectorAll

var item = document.querySelectorAll('.list-group-item');
item[2].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)')
for(var i=0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#bbb';
}
