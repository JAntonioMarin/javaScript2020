/// Arraus en ES6+///  

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