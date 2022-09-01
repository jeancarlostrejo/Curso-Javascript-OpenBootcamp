const persona = {
  nombre: "Jean Carlos",
  edad: 26,
};

console.log(persona);

function obtenDobleEdad(edad) {
  return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);
