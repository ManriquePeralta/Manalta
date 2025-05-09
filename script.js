const animados = document.querySelectorAll('.animado');

const mostrarAnimados = () => {
    animados.forEach(el => {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (top < window.innerHeight - 100 && bottom > 100) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', mostrarAnimados);
