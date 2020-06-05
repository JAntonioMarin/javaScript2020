// Argumentos por defecto

// Según esta funcion al menos necesita el valor de a
var sumar = function(a,b=0,c=0){
    return a+b+c;
}

console.log(sumar(10,4));
console.log(sumar(10,4,5));
console.log(sumar(10, null, 10));