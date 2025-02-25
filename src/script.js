let navLinkEls = document.querySelectorAll('.nav_link');
let sectionEls= document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () =>{
    sectionEls.forEach(section => {
        if(section.offsetTop - 150 <= window.scrollY ){
            currentSection = section.id;
            //small changeg
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

//aboout page
window.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-image');
    const textElements = document.querySelectorAll('.animated-text');

    window.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const moveX = (e.clientX / innerWidth) * 20 - 10;
        const moveY = (e.clientY / innerHeight) * 20 - 10;
        image.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    });

    textElements.forEach((el, index) => {
        el.style.transition = `opacity 1s ease ${index * 0.3}s, transform 1s ease ${index * 0.3}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

function openPaymentModal() {
    document.getElementById("paymentModal").style.display = "flex";
}


function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}


window.onclick = function (event) {
    let modal = document.getElementById("paymentModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("paymentModal");
    const closeBtn = document.querySelector(".close");
    const checkoutBtn = document.querySelector(".checkout-btn");

    // Function to open the modal
    window.openPaymentModal = function () {
        if (modal) {
            modal.style.display = "flex";  // Show modal
        } else {
            console.error("Modal element not found!");
        }
    };

    // Function to close the modal
    window.closePaymentModal = function () {
        if (modal) {
            modal.style.display = "none";  // Hide modal
        }
    };

    // Add event listener to Close button
    if (closeBtn) {
        closeBtn.addEventListener("click", closePaymentModal);
    }

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closePaymentModal();
        }
    });
});

