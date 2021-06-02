const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelectorAll('#nav ul li a');
const navContainer = document.querySelector('#header .container');
//ver si puedo quitar la clase nav links
navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('nav-open');
    })
})