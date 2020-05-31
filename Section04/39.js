// Valores verdaderos y falsos

// Valores falsos: undefined, null, 0, ''
//Valores verdaderos: NOT valores falsos

var edad;
edad = '';

if(edad){
    console.log('Variable definida');
} else {
    console.log('Variable no definida');
}

// Operadores de igualdad

// == Igual

edad = 10;

if(edad == '10'){
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

if(edad != '10'){
    console.log('Son desiguales');
} else {
    console.log('Son iguales');
}

if(edad === '10'){
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}