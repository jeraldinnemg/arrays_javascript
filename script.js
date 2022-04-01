const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
 
//Obtener en un nuevo array las edades menores a 18.

function edadMenor18(edad) {
    let array=[];
    for (let i=0; i<edad.length; i++){
        if (edad[i] < 18){
            array.push(edad[i]);
        }
    }
    return array;
}
//let imprimeEdades= edadMenor18(edades);
//console.log(imprimeEdades)

//Obtener en un nuevo array las edades mayor o igual a 18.
function edadMayor18(edad) {
    let array=[];
    for (let i=0; i<edad.length; i++){
        if (edad[i] > 18){
            array.push(edad[i]);
        }
    }
    return array;
}
//let imprimeEdades= edadMayor18(edades);
//console.log(imprimeEdades)

//Obtener en un nuevo array las edades igual a 18
function edadIgual18(edad) {
    let array=[];
    for (let i=0; i<edad.length; i++){
        if (edad[i] == 18){
            array.push(edad[i]);
        }
    }
    return array;
}
//let imprimeEdades= edadIgual18(edades);
//console.log(imprimeEdades)

//Obtener el menor.
min=Math.min.apply(null, edades);
//console.log(min);

//Obtener el mayor. 
max=Math.max.apply(null, edades);
//console.log(max)

// Con ciclo for y condicional
function menor(edad){
    let minimo=edad[0];
    for (let i=0; i<edad.length; i++){
        if (edad[i]<minimo){
            minimo= edad[i];
        }
    }
    return minimo;
}
//let imprimeMinimo= menor(edades);
//console.log(imprimeMinimo);

function mayor(edad){
    let maximo=edad[0];
    for (let i=0; i<edad.length; i++){
        if (edad[i]>maximo){
            maximo= edad[i];
        }
    }
    return maximo;
}
//let imprimeMaximo= mayor(edades);
//console.log(imprimeMaximo);

//Obtener el promedio de edades.
function promedioEdades(edad){
    let suma=0;
    let promedio=0;
    for (let i=0; i<edad.length; i++){
        suma= suma + edades[i]
        promedio = suma/edad.length

    }
    return promedio;
}

//let resultado = promedioEdades(edades);
//console.log(resultado);


//Incrementar en 1 todas las edades.

function incrementarEdades(edad){
    for (let i=0; i<edad.length; i++){
        edad[i]=edad[i]+1
    }
    return edad
}

//et imprimeIncremento = incrementarEdades(edades);
//console.log(imprimeIncremento);