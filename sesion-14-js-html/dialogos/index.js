const boton = document.querySelector("#btn");

// console.log(boton);

boton.addEventListener("click", () => {
  //   alert("Se ha hecho click");
  //   confirm("estas de acuerdo?") && console.log("OK");
  //   confirm("estas de acuerdo?") ? console.log("OK") : console.log("NO!");

  const respuesta = confirm("Seguro?");

  if (respuesta) {
    console.log("Estas de acuerdo");
  } else {
    console.log("No estas de acuerdo");
  }
});

const btnInfo = document.querySelector("#info");

btnInfo.addEventListener("click", () => {
  const nombre = prompt("Cual es tu nombre?");

  if (nombre) {
    console.log(`Tu nombre es ${nombre}`);
  } else {
    console.log("No has introducido nada");
  }
});

const lista = [
  {
    nombre: "Jean Carlos",
    edad: 26,
  },
  {
    nombre: "Luffy",
    edad: 19,
  },
  {
    nombre: "Nico Robin",
    edad: 28,
  },
];
console.log(lista);
console.table(lista);
