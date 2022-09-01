class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }

  saludo() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anhos.`);
  }
}

const nuevaPersona = new Persona("Jean Carlos", 26, false);
console.log(nuevaPersona);
nuevaPersona.saludo();

let numero = 60; //inicializar
console.log(typeof numero);

const nuevaPersona2 = new Persona("Luffy", 19, false);
console.log(typeof nuevaPersona2);
console.log(nuevaPersona2 instanceof Persona);

// instanceof -> similar a typeof pero para clases
