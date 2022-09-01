//Listas, arreglos o arrays
const lista = [1, "hola", true, undefined];
const lista2 = new Array(2, false, "hola2", undefined, true, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiaomi",
  isWhite: false,
  contacto: ["Juan", "Pedro", "Maria"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: 32,
  },
  "altura-tarjeta": 4,
};

movil.anio = 2019;
movil.marca = "Samsung";

console.log(movil);
console.log(movil.marca);
console.log(movil.contacto[1]);
console.log(movil.tarjeta.marca);

//Fechas
//Librerias de apoyo: Momento.js
const ahora = new Date();
console.log(ahora);

const fechaMilis = new Date(10); //utilizando los milisegundos
console.log(fechaMilis);

const fechaCadena = new Date(1995, 10, 11);
console.log(fechaCadena);

const fechaValores = new Date(2022, 7, 06);
console.log(fechaValores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();
console.log(dia, mes, anio);
