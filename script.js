document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const logoLink = document.querySelector('.logo a');

    // ------------------------------------
    // 1. FUNCIONALIDADE DO MENU (MOBILE)
    // ------------------------------------
    const toggleMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.toggle('active');
        }
    };

    const closeMenu = () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (logoLink) {
        logoLink.addEventListener('click', closeMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ------------------------------------
    // 2. FUNCIONALIDADE CARROSSEL PRODUTOS (Manual)
    // ------------------------------------
    const carouselTrackWrapper = document.querySelector('.carousel-track-wrapper');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtnProdutos = document.querySelector('.carousel-container .prev-btn'); // Seletor mais específico
    const nextBtnProdutos = document.querySelector('.carousel-container .next-btn'); // Seletor mais específico

    // O seletor foi tornado mais específico para evitar conflito com os novos botões do Hero Carousel
    if (carouselTrackWrapper && prevBtnProdutos && nextBtnProdutos) {
        nextBtnProdutos.addEventListener('click', () => {
            const firstItem = carouselTrack.querySelector('.produto-item');
            if (firstItem) {
                const itemWidth = firstItem.offsetWidth;
                carouselTrackWrapper.scrollBy({
                    // Rola 2 itens (itemWidth * 2) + o espaço entre eles (24px)
                    left: (itemWidth * 2) + 24, 
                    behavior: 'smooth'
                });
            }
        });

        prevBtnProdutos.addEventListener('click', () => {
            const firstItem = carouselTrack.querySelector('.produto-item');
            if (firstItem) {
                const itemWidth = firstItem.offsetWidth;
                carouselTrackWrapper.scrollBy({
                    left: -((itemWidth * 2) + 24),
                    behavior: 'smooth'
                });
            }
        });
    }

    // ------------------------------------
    // 3. FUNCIONALIDADE CARROSSEL HERO (Automático e Manual)
    // ------------------------------------
    function initHeroCarousel() {
        const slides = document.querySelectorAll('.hero-carousel .slide');
        const prevBtnHero = document.querySelector('.hero-carousel .prev-btn'); // Novo seletor
        const nextBtnHero = document.querySelector('.hero-carousel .next-btn'); // Novo seletor
        
        if (!slides.length) return;
        
        let currentSlide = 0;
        let autoSlideInterval;
        const slideInterval = 10000;
        
        const goToSlide = (index) => {
            // Remove active de todos
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Garante que o índice atual fique dentro dos limites
            currentSlide = (index + slides.length) % slides.length;
            
            // Adiciona active ao slide atual
            slides[currentSlide].classList.add('active');

            // Pausa e reinicia o auto-slide após interação manual
            startAutoSlide();
        };
        
        const nextSlide = () => {
            goToSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            goToSlide(currentSlide - 1);
        };
        
        const startAutoSlide = () => {
             // Limpa o intervalo anterior para evitar duplicação
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
            autoSlideInterval = setInterval(nextSlide, slideInterval);
        };

        // Eventos de clique nas setas
        if (nextBtnHero) {
            nextBtnHero.addEventListener('click', nextSlide);
        }
        
        if (prevBtnHero) {
            prevBtnHero.addEventListener('click', prevSlide);
        }
        
        // Pausa auto slide quando mouse está sobre o carousel
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel) {
            heroCarousel.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            heroCarousel.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
        }
        
        // Inicia o carrossel na carga da página
        goToSlide(currentSlide);
        startAutoSlide();
    }

    // Inicializa o carousel do banner
    initHeroCarousel();
});