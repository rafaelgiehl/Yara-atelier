document.addEventListener('DOMContentLoaded', () => {
    // Código para controlar o menu de navegação em telas pequenas
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Você pode adicionar outras funcionalidades aqui, como:
    // - Lógica para um formulário de contato
    // - Efeitos de animação na página
});