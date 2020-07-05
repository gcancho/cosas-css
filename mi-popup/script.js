let btnMostrarPopup = document.getElementById('btn-abrir-popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    overlay = document.getElementById('overlay');

btnMostrarPopup.addEventListener('click', function () {
    overlay.classList.add('activo');
});

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('activo');
});