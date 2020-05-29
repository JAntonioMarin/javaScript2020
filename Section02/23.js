// Ejercicio de codificación 1
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var imcLuis = pesoLuis / (alturaLuis^2);
var imcCarlos = pesoCarlos / (alturaCarlos^2);

console.log("IMC de Luis: "+imcLuis);
console.log("IMC de Carlos: "+imcCarlos);

var carlosSuperiorLuis = imcCarlos > imcLuis;

console.log("¿Es el IMC de Carlos mayor a la de Luis?: "+carlosSuperiorLuis);