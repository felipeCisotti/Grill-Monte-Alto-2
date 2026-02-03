
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track-itens');
    const dots = document.querySelectorAll('.dot');
    const updateButton = document.getElementById('openmodal');
    const cancelButton = document.getElementById('cancel');
    const favDialog = document.getElementById('favDialog');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu-open');
            navToggle.classList.toggle('nav-toggle-open');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-menu-open');
                navToggle.classList.remove('nav-toggle-open');
            });
        });
    }

    // Dialog: apenas ligar eventos se elementos existirem e API suportada
    if (favDialog && typeof favDialog.showModal === 'function') {
        if (updateButton) updateButton.addEventListener('click', () => favDialog.showModal());
        if (cancelButton) cancelButton.addEventListener('click', () => favDialog.close());
    }

    // Carousel: proteger contra ausência de elementos
    const itemsPerView = 3;
    let currentIndex = 0;

    if (dots && dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.index) || 0;
                updateCarousel();
            });
        });
    }

    function updateCarousel() {
        const itemEl = document.querySelector('.carousel-item-itens');
        if (!track || !itemEl) return;
        const itemWidth = itemEl.offsetWidth + 30;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        if (dots && dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentIndex]) dots[currentIndex].classList.add('active');
        }
    }

});



