const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked'); // Esto te ayudará a verificar que el evento se activa
    navLinks.classList.toggle('open');
});
