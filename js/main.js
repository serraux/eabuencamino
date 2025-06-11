document.addEventListener('DOMContentLoaded', () => {
    const fadeItems = document.querySelectorAll('.fade-item');
    
    fadeItems.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-4');
        el.classList.add('opacity-100', 'translate-y-0');
      }, i * 200); // efecto secuencial
    });
  });
  

  

 document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("custom-mobile-menu");
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");

    let isOpen = false;

    // Función para abrir/cerrar el menú
    function toggleMenu() {
      isOpen = !isOpen;

      if (isOpen) {
        menu.classList.remove("hidden", "w-0");
        menu.classList.add("block", "w-full");
        iconOpen.classList.add("hidden");
        iconClose.classList.remove("hidden");
      } else {
        menu.classList.remove("block", "w-[80%]");
        menu.classList.add("hidden", "w-0");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
      }
    }

    // Click en el botón hamburguesa
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el clic se propague al body
      toggleMenu();
    });

    // Click global: cierra si el clic es fuera del menú o botón
    document.addEventListener("click", (e) => {
      if (
        isOpen &&
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        isOpen = false;
        menu.classList.remove("block", "w-full");
        menu.classList.add("hidden", "w-0");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
      }
    });
  });



// nuevo menu nav 
/*
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const customMenu = document.getElementById("custom-mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");
  
  let isOpen = false;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    if (isOpen) {
      customMenu.classList.remove("hidden");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
    } else {
      customMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (isOpen && !customMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      isOpen = false;
      customMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });
});
*/







//fade-in iamen individual therapy
document.addEventListener('DOMContentLoaded', () => {
    const fadeItems = document.querySelectorAll('.fade-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target); // se activa solo una vez
        }
      });
    }, {
      threshold: 0.2 // activa cuando el 20% del elemento es visible
    });

    fadeItems.forEach(item => observer.observe(item));
  });

  //Javascript para controlar el carrusell
 
  const images = document.querySelectorAll('.carousel-img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  // Botones
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  // Autoavance cada 5 segundos
  setInterval(() => {
    nextImage();
  }, 5000);

  // Swipe en móviles
  let touchStartX = 0;
  let touchEndX = 0;

  const carousel = document.getElementById('carousel');

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    const threshold = 50; // Mínima distancia para considerar como swipe

    if (swipeDistance > threshold) {
      nextImage(); // Swipe izquierdo → siguiente
    } else if (swipeDistance < -threshold) {
      prevImage(); // Swipe derecho → anterior
    }
  }

  // Mostrar la imagen inicial
  showImage(current);

/**Animacion imagen en seccion about us */ 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.fade-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
  });

 
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-4");
          entry.target.classList.add("opacity-100", "translate-y-0");

          // Si el elemento tiene una clase de animación, la deja activada
          // La animación ya debe estar definida en el CSS (como fade-in-up, zoom-in, etc.)
          observer.unobserve(entry.target); // Solo una vez
        }
      });
    }, {
      threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
  });

