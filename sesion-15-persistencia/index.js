// localStorage.setItem("nombre", "Jean Carlos");
localStorage.setItem("nombre", "Luffy");

console.log(localStorage.getItem("nombre"));

// localStorage.setItem(
//   "persona",
//   JSON.stringify({
//     nombre: "Nico Robin",
//     edad: 28,
//   })
// );

// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Jean Carlos");

/* Cookies */

document.cookie = "nombreCookie=JeanCookie";

document.cookie =
  "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);
