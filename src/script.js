let navLinkEls = document.querySelectorAll('.nav_link');
let sectionEls= document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () =>{
    sectionEls.forEach(section => {
        if(section.offsetTop < window.scrollY){
            currentSection = section.id;
        }
    })
    navLinkEls.forEach(link => {
        link.classList.remove('active');
        if(link.hash === `#${currentSection}`){
            link.classList.add('active');
        }
    })
})