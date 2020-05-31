// Sentencias condicionales

var nombre = 'Pablo';
var edad = 15;

if (edad < 12){
    console.log(nombre+ ' es un niño');
} else if (edad > 11 && edad < 18){
    console.log(nombre+ ' es un adolescente');
} else if (edad > 17 && edad < 60){
    console.log(nombre+ ' es un adulto');
} else {
    console.log(nombre+ ' es un anciano');
}