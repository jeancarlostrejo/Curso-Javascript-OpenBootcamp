const hTexto = document.getElementById("h-texto");

console.log(hTexto);

hTexto.addEventListener("cambioTexto", (e) => {
  console.log(e.detail);
  hTexto.innerText = e.detail.texto;
  hTexto.style.color = e.detail.color;
});

const cambiarTexto = (nuevoTexto, color) => {
  const evento = new CustomEvent("cambioTexto", {
    detail: {
      texto: nuevoTexto,
      color,
    },
  });

  hTexto.dispatchEvent(evento);
};
