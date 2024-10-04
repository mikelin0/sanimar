document.addEventListener('DOMContentLoaded', function() {
    const donationBtn = document.getElementById('donationBtn');
    const supportInfo = document.getElementById('supportInfo');

    // Alterna la visibilidad del contenedor de información al hacer clic en el botón
    donationBtn.addEventListener('click', function() {
        if (supportInfo.style.display === 'none' || supportInfo.style.display === '') {
            supportInfo.style.display = 'block'; // Muestra la información
            donationBtn.textContent = 'Ocultar Información'; // Cambia el texto del botón
        } else {
            supportInfo.style.display = 'none'; // Oculta la información
            donationBtn.textContent = 'Donar Ahora'; // Restaura el texto original del botón
        }
    });
});
