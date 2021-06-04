const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelectorAll('#nav ul li a');
const navContainer = document.querySelector('#header .container');
const darkToggle = document.querySelector("#dark");
const colorTags= document.querySelectorAll(".color");

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('nav-open');
    })
})

darkToggle.addEventListener('click', () => {
    colorTags.forEach(color => {
        color.classList.toggle('dark');
    })
});