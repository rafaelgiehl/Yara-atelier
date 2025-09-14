document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade do Menu Hambúrguer ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const logoLink = document.querySelector('.logo a');

    // Abre e fecha o menu
    const toggleMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.toggle('active');
        }
    };

    // Fecha o menu
    const closeMenu = () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    };

    // Adiciona os event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (logoLink) {
        logoLink.addEventListener('click', closeMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- Funcionalidade do Carrossel de Destaques ---
    const carouselTrackWrapper = document.querySelector('.carousel-track-wrapper');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Verifica se os elementos do carrossel existem na página
    if (carouselTrackWrapper && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const firstItem = carouselTrack.querySelector('.produto-item');
            if (firstItem) {
                // Rola o wrapper, que é o elemento com overflow: hidden;
                const itemWidth = firstItem.offsetWidth;
                carouselTrackWrapper.scrollBy({
                    left: itemWidth + 24, // 24px é o espaçamento de 1.5rem
                    behavior: 'smooth'
                });
            }
        });

        prevBtn.addEventListener('click', () => {
            const firstItem = carouselTrack.querySelector('.produto-item');
            if (firstItem) {
                // Rola o wrapper, que é o elemento com overflow: hidden;
                const itemWidth = firstItem.offsetWidth;
                carouselTrackWrapper.scrollBy({
                    left: -(itemWidth + 24), // 24px é o espaçamento de 1.5rem
                    behavior: 'smooth'
                });
            }
        });
    }

});