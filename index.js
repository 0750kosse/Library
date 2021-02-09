const navLinks = document.querySelector(".nav-links");
const openCloseIcon = document.getElementById('icon');

function changeIcon() {
  navLinks.classList.contains('on') ?
    openCloseIcon.classList.replace('fa-bars', 'fa-times') :
    openCloseIcon.classList.replace('fa-times', 'fa-bars')
}

openCloseIcon.addEventListener('click', toggleMenu)

function toggleMenu() {
  navLinks.classList.toggle("on");
  changeIcon();
}














