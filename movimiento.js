document.addEventListener('DOMContentLoaded', function() {
    const movingLabel = document.getElementById('movingLabel');
    const labels = movingLabel.querySelectorAll('span');
    let index = 0;

    // Inicializa todos los labels menos el primero como ocultos
    labels.forEach((label, i) => {
        if (i !== 0) label.style.display = 'none';
    });

    function showNextLabel() {
        labels[index].style.opacity = '1'; // Añade transición de opacidad
        setTimeout(() => {
            labels[index].style.display = 'none';
            index = (index + 1) % labels.length;
            labels[index].style.display = 'block';
            labels[index].style.opacity = '1'; // Añade transición de opacidad
        }, 50); // Tiempo para la transición de opacidad
    }

    setInterval(showNextLabel, 5000); // Cambia el mensaje cada 5 segundos
});
