// Agregar elementos a una lista y evento submit

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');

//Evento submit del formulario
form.addEventListener('submit', agregarItem);
//Evento click de la lista
lista.addEventListener('click', eliminarItem);

function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);

    lista.appendChild(li);
}

function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }        
    }
}