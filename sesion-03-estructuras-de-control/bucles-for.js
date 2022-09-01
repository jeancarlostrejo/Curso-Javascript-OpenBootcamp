// Bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
  // Esto es el bucle
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

// Estructura for...of
for (let valor of lista) {
  console.log(valor);
}

// Estructura forEach
lista.forEach((valor) => {
  console.log(valor);
});

// Estructura for...in
//Para recorrer las propiedades
let persona = {
  nombre: "Jean Carlos",
  apellido: "Trejo",
  edad: 26,
  isDeveloper: false,
};
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
