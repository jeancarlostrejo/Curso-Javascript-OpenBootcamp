// Inheritance - Herencia
class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  saludo() {
    console.log(
      `Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`
    );
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }

  saludo() {
    // Override
    super.saludo();
    console.log(`Y estoy aprendiendo ${this.lenguaje}`);
  }
}

const nuevodev = new Desarrollador("Jean Carlos", 26, "Javascript");
console.log(nuevodev);
nuevodev.saludo();

// Polimorfismo => Varias formas
