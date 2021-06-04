const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelectorAll('#nav ul li a');
const nav= document.querySelector("#nav");
const navContainer = document.querySelector('#header .container');
const darkToggle = document.querySelector(".theme-switch");
const colorTags= document.querySelectorAll(".color");
const body= document.querySelector("body");
const header= document.querySelector("#header");


// Open nav on mobile
navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('nav-open');
    nav.classList.add('nav-transition');
});

// Close nav on mobile when select a section
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('nav-open');
    })
})

// Run dark mode
darkToggle.addEventListener('click', () => {
    colorTags.forEach(color => {
        color.classList.toggle('dark');
    })
});

// Change background color of header when scrolls 
//ARREGLAR ESTO PORQUE SI CAMBIO A MODO OSCURO O CLARO TENGO QUE HACER SCROLL PARA QUE SE NOTE EL CAMBIO
window.addEventListener('scroll',()=>{
    if(window.scrollY>0){
        if(body.classList.contains('dark')){
            header.style.backgroundColor = 'hsl(0, 0%, 8%)';
        }else{
            header.style.backgroundColor = 'hsl(310, 13%, 54%)';
        }
    }else{
        header.style.backgroundColor = 'transparent';
    }
});