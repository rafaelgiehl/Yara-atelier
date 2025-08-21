document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos principais
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const logoLink = document.querySelector('.logo a'); // Seleciona o link do logo

    // Função para fechar o menu
    const closeMenu = () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    };

    // Abre/fecha o menu ao clicar no botão hambúrguer
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Fecha o menu ao clicar em qualquer link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao clicar no logo
    if (logoLink) {
        logoLink.addEventListener('click', closeMenu);
    }
});