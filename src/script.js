let navLinkEls = document.querySelectorAll('.nav_link');
let sectionEls= document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () =>{
    sectionEls.forEach(section => {
        if(section.offsetTop - 150 <= window.scrollY ){
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

  /*popup*/
let  popup = document.querySelector('.popup');

 function openPopup(){
     popup.classList.add('openPopup');
 }

 function closePopup(){
     popup.classList.remove('openPopup');
 }
  
// Handle sign-up button click
if (signUpBtn) {
    signUpBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'login.html';
    });
}

