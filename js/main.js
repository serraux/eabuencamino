document.addEventListener('DOMContentLoaded', () => {
    const fadeItems = document.querySelectorAll('.fade-item');
    
    fadeItems.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-4');
        el.classList.add('opacity-100', 'translate-y-0');
      }, i * 200); // efecto secuencial
    });
  });
  

  

  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  // Mostrar/Ocultar menú al hacer clic en el botón
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  // Cerrar el menú al hacer clic en cualquier enlace dentro del menú
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    });
  });


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
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
  });
