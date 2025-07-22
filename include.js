document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar el footer");
      return res.text();
    })
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(err => console.error("Error al cargar el footer:", err));
});
