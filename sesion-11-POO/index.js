const persona = {
  nombre: "Jean Carlos",
  edad: 26,
  isDeveloper: false,
  saludo: function () {
    console.log("Hello");
  },
};

// console.log(persona);
persona.saludo();

const otra_persona = {
  nombre: "El Pepe",
  edad: 20,
  isDeveloper: false,
  saludo: function () {
    console.log("Hello");
  },
};

otra_persona.saludo();

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre, //nombre: nombre
    edad,
    isDeveloper,
    saludo: function () {
      console.log("HELLO");
    },
  };
};

const nuevaPersona = creaPersona("Luffy", 19, false);
nuevaPersona.saludo();
console.log(nuevaPersona);

const nuevaPersona2 = creaPersona("Mark", 38, true);
nuevaPersona2.saludo();
console.log(nuevaPersona2);
