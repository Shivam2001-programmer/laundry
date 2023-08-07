document.addEventListener('DOMContentLoaded', function () {
  var offcanvasToggle = document.querySelectorAll('[data-toggle=offcanvas]');

  for (var i = 0; i < offcanvasToggle.length; i++) {
    offcanvasToggle[i].addEventListener('click', function () {
      var rowOffcanvas = document.querySelector('.row-offcanvas');
      rowOffcanvas.classList.toggle('active');
    });
  }
});