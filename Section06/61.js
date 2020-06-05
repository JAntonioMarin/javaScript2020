// Operaciones con arrays

var frutas = new Array('Pera', 'Uva','Sandia', 'Manzana');
console.log(frutas);

for(var i=0; i<=frutas.length -1; i++){
    console.log(frutas[i]);
}

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
});

frutas.push('Naranja');
console.log(frutas);
frutas.unshift('Fresas');
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

var pos = frutas.indexOf('Uva');
console.log(pos);

frutas.splice(1,1);
console.log(frutas);