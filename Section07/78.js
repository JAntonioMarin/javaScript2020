// Agregar elementos a una lista y evento submit

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');

form.addEventListener('submit', agregarItem);

function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);

    lista.appendChild(li);
}