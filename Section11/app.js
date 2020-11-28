/// Arrays en ES6+///  

const ceviche = ['pescado', 'mariscos', 'cebolla'];

console.log(ceviche);
console.log(ceviche.length);

ceviche[0] = 'papas';
console.log(ceviche);
console.log(ceviche[2]);

// Agregar/quitar elemento al inicio/final
//Al final
ceviche.push('limón');
console.log(ceviche);
ceviche.pop();
console.log(ceviche);
//Al inicio
ceviche.unshift('pimiento');
console.log(ceviche);
ceviche.shift();
console.log(ceviche);

//Agregar/quitar elemento con splice

ceviche.splice(1,1);
console.log(ceviche);
ceviche.splice(1,0,'limón');
console.log(ceviche);

//Bucle sobre matrices

ceviche.forEach(function(item, index){
    console.log(index);
    console.log(item);
})

// Recorrer un array

for(let i=0; i < ceviche.length; i++){
    console.log(`Indice ${i}: ${ceviche[i]}`)
}

// Busqueda

console.log(ceviche.indexOf('cebolla'))

const ceviche2 = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'carne'
    },
]
console.log(ceviche2)
const index = ceviche2.findIndex(function(ing, index){
    console.log(ing);
    return ing.titulo === 'carne';
})
console.log(index);

// Ampliando la busqueda

const buscarIngrediente = function(ceviche2, titulo){
    const index = ceviche2.findIndex(function(ing, index){
        return ing.titulo === titulo
    })
    return index;
}
console.log(ceviche2[buscarIngrediente(ceviche2, 'pescado')]);
