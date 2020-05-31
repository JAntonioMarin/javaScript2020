// Ejercicio de codificación 2

// Sin utilizar arrays

var NOTAMEDIA = 13;

var promedioPablo = (14 + 8 + 16) / 3;
var promedioMaria = (12 + 18 + 10) / 3;

if (promedioPablo > promedioMaria){
    console.log('El promedio de Pablo es mayor que el de María');
} else if (promedioMaria > promedioPablo){
    console.log('El promedio de Maria es mayor que el de Pablo');
} else {
    console.log('El promedio es el mismo');
}

if (promedioPablo > NOTAMEDIA){
    console.log('Pablo está aprobado');
} else {
    console.log('Pablo está suspenso');
}

if (promedioMaria > NOTAMEDIA){
    console.log('Maria está aprobada');
} else {
    console.log('Maria está suspensa');
}