document.getElementById("contactoForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensaje enviado correctamente");
});

const form = document.getElementById("formContacto");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Mensaje enviado correctamente ✔️");
    form.reset();
  });
}
