// Ejercicio de codificacion 4

var evaluaPorcentaje = function(nombre, respuestasPositivas, respuestasNegativas){
    var porcentajeFinal = (100/(respuestasPositivas+respuestasNegativas)) * respuestasPositivas;
    console.log(`${nombre} el porcentaje de acierto es del ${porcentajeFinal}%`);
    var puntuacion = 'D';
    if(porcentajeFinal>90){
        puntuacion = 'A';
    }else if(porcentajeFinal >=70){
        puntuacion = 'B';
    }else if(porcentajeFinal >= 45){
        puntuacion = 'C';
    }
    console.log(`Tu puntuación es: ${puntuacion}`)
}

evaluaPorcentaje('Juan', 3, 1);