window.addEventListener('load',()=>{
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

    // Change background color of header when run dark mode 
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

// Change background color of header when scrolls 
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

//Creating skill circles
jQuery(document).ready(function($){
    let circles=$('.skill-circle');
    const createCircle=(newClassName)=>{
        let element=$(newClassName);
        let percentage=element.attr('data-percentage');
        let circle=new ProgressBar.Circle(newClassName,{
            color: 'hsl(310, 13%, 54%)',
            strokeWidth: 3,
            trailWidth: 1,
            trailColor: 'hsla(310, 13%, 54%,.5)',
            easing: 'easeInOut',
            duration: 1500,
            text: {
                autoStyleContainer: false
            },
            from: { color: 'hsl(310, 13%, 54%)', width: 1 },
            to: { color: 'hsl(310, 13%, 54%)', width: 3 },

            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                circle.setText('');
                } else {
                circle.setText(value);
                }

            }
            
        })

    circle.animate(percentage);

    }
        circles.each((index,element)=>{
            let newClassName='circle-element-'+index;
            $(element).addClass(newClassName);
            createCircle('.'+newClassName);
        })
})

//Creating skill lines
jQuery(document).ready(function($){
    let lines=$('.skill-line');
    const createLine=(newClassName)=>{
        let element=$(newClassName);
        let percentage=element.attr('data-percentage');
        let line=new ProgressBar.Line(newClassName,{
            color: 'hsl(310, 13%, 54%)',
            strokeWidth: 3,
            trailWidth: 1,
            trailColor: 'hsla(310, 13%, 54%,.5)',
            easing: 'easeInOut',
            duration: 1500,
            text: {
                style: {
                    position: 'absolute',
                    right: '0',
                    left:'0',
                    bottom: '15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            from: { color: 'hsl(310, 13%, 54%)', width: 1 },
            to: { color: 'hsl(310, 13%, 54%)', width: 3 },

            step: function(state, line) {
                line.path.setAttribute('stroke', state.color);
                line.path.setAttribute('stroke-width', state.width);

                var value = Math.round(line.value() * 100);
                if (value === 0) {
                line.setText('');
                } else {
                line.setText(value);
                }

            }
            
        })

    line.animate(percentage);

    }
        lines.each((index,element)=>{
            let newClassName='line-element-'+index;
            $(element).addClass(newClassName);
            createLine('.'+newClassName);
        })
})

});