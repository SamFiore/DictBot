// Arrays, son arreglos, son otro tipo de datos, que nos permiten guardar y gestionar información.
// Los arreglos son listas de datos con distintas posiciones de guardado de datos y organizarlos

// Existen dos conceptos dentro de los arrays:
// los elementos, son los datos que hemos guardado;
// el índice, representa la posición que se esta guardando (empezando del 0, 1, 2, etc.)

var listaDeCompras = [];
// agregar elementos
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
// recuperarlos

//console.log(listaDeCompras);
//listaDeCompras[1];

var elementosDelArray = listaDeCompras[1];
console.log(elementosDelArray)

// con .length, nos permite ver cuantos elementos hay en nuestro array

console.log(listaDeCompras.length);

// los arrays, también son un objeto global, esto significa que estan asociados a una serie de métodos
// los metodos son aquellas funciones nativas o preestablecidas en el lenguaje de programación, son 
// utiles para ahorrar líneas de código y realizar tareas de manera más simple

var colores = ['amarillo', 'azul'];
//con .push agregamos elementos al final de nuestro array
colores.push('rojo');
// con .unshift agregamos elementos al indice de nuestro array
colores.unshift('verde');
// con .pop eliminamos el último elemento de nuestro array
colores.pop();
// con .shift eliminamos el primer elemento de nuestro array
colores.shift();

console.log(colores)

// con .includes nos permite determinar si el array incluye o no algún elemento, devolviendo true o false
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
var incluyeDali = pintores.includes('Dali');
var incluyeMonet = pintores.includes('Monet');
console.log(incluyeDali);
console.log(incluyeMonet);

// con .every, nos permite saber si todos los elementos de un array cumplen con una condición

/* var numeros = [18 , 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumplenCondicion); */

// con .split, nos permite separar palabra o elementos, si se pone comillas, separa la palabras por cada
// letra, si no, filtra las palabras por cada caracter que encuentre igual al que agregamos en el split.
// Este metodo nos permite transformas strings en arreglos
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
// acá corrijo la última letra que esta mal
palabraSeparada.pop();
palabraSeparada.push('y')
console.log(palabraSeparada)
// PRUEBA con a, separa cada vez que encuentra la a y la omite, volviendolo un array
var palabra2 = 'ManolitoManolasoManotas'
var palabraSeparada2 = palabra2.split('a');
console.log(palabraSeparada2);

// con .join podemos volver a unir lo que separamos con .split, que al igual, indicamos las dos comillas
// o lo que hayamos puesto, así junta todos los caracteres y no deja espacio vacío. Esto nos permite
// transformar arreglos en strings
var palabraArreglada = palabraSeparada.join('');
var palabraArreglada2 = palabraSeparada2.join('a')
console.log(palabraArreglada);
console.log(palabraArreglada2);

// con .forEach (cada uno), nos permite recorrer cada uno de los elementos del array
numeros = [1 , 2, 3, 4];
numeros.forEach((num) => console.log(num));
numeros.forEach((num) =>{if (num === 3) { console.log(num) }} )

// con .map, este crea una copia del arreglo original y le puede agragar cambios
 var masUno = numeros.map(num => {return num + 1})
 console.log(masUno);





