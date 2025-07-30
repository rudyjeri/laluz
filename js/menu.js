(function () {
  // Esperar hasta que el DOM completo esté disponible (incluyendo navbar.html si se carga dinámicamente)
  document.addEventListener("DOMContentLoaded", () => {
    // Espera a que el navbar esté realmente en el DOM (en caso de que se cargue con fetch)
    const waitForNavbar = setInterval(() => {
      const navToggle = document.getElementById('navToggle');
      const navClose = document.getElementById('navClose');
      const navMenu = document.getElementById('navMenu');
      const navOverlay = document.getElementById('navOverlay');
      const navDropdowns = document.querySelectorAll('.nav__dropdown');

      if (!navToggle || !navMenu) return; // Si no están aún, sigue esperando
      clearInterval(waitForNavbar); // Ya están cargados, detenemos la espera

      // 👉 Abrir menú hamburguesa
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav__link--show');
        navOverlay?.classList.add('nav__overlay--show');
        navMenu.style.visibility = 'visible';
      });

      // 👉 Función para cerrar
      function closeMenu() {
        navMenu.classList.remove('nav__link--show');
        navOverlay?.classList.remove('nav__overlay--show');
        setTimeout(() => {
          navMenu.style.visibility = 'hidden';
        }, 300);
      }

      // 👉 Cerrar desde botón o fondo
      navClose?.addEventListener('click', closeMenu);
      navOverlay?.addEventListener('click', closeMenu);

      // 👉 Submenús responsive
      navDropdowns.forEach(item => {
        const toggleLink = item.querySelector('.nav__link');
        toggleLink?.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            const isActive = item.classList.contains('active');
          if (!isActive) {
  e.preventDefault(); // Primer clic: abrir submenú
  navDropdowns.forEach(i => i.classList.remove('active'));
  item.classList.add('active');
} else {
  // Segundo clic: dejar que el enlace navegue normalmente
  item.classList.remove('active'); // Opcional: cerrar después de navegar
}

          }
        });
      });
    }, 100); // Verifica cada 100ms


  const searchToggle = document.getElementById('searchToggle');
  const searchBox = document.getElementById('searchBox');
  const searchClose = document.getElementById('searchClose');

  searchToggle.addEventListener('click', () => {
    searchBox.classList.add('active');
  });

  searchClose.addEventListener('click', () => {
    searchBox.classList.remove('active');
  });

    // 👉 Mostrar imágenes al hacer scroll
    const imageLinks = document.querySelectorAll(".image-link");
    function showOnScroll() {
      imageLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        link.classList.toggle("visible", rect.top < window.innerHeight - 100);
      });
    }
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();

    // 👉 Alerta de descarga
    document.querySelectorAll(".boton-descarga").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("✅ Tu descarga está comenzando...");
      });
    });
  });
})();