(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .my-widget-content {
            font-family: Arial, sans-serif;
            font-size: 14px;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);

    const containers = document.querySelectorAll('.my-widget');
    containers.forEach(container => {
        container.innerHTML = `<div class="my-widget-content">¡Hola, soy un widget personalizado!</div>`;
    });
})();

