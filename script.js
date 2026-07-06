

// Scroll section for active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=()=>{
    sections.forEach(section=>{
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



// MenuIcon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



//  Darkmode toggle

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = ()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    
};



//testimonial swapper
var swiper=new Swiper(".mySwiper",{
    slidePerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el : ".swiper-pagination",
        clickable : true
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
})


// Scroll to reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true,
    delay:500,
});

ScrollReveal().reveal('.home-content, .heading, .self', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form, .social-media a', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h4, .home-content p, .about-content', {origin: 'right'});



// Name slicing

const textElement = document.getElementById("animated-text");
const text = "VINAY KUMAR HS";
let index = 0;

function sliceText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(sliceText, 350); 
    } else {
        setTimeout(() => {
            textElement.textContent = ""; 
            index = 0; 
            sliceText(); 
        }, 1100); 
    }
}

sliceText()



// Message to Admin



// Function to show a success message when form is submitted
// Wait until the page loads completely
document.addEventListener("DOMContentLoaded", function () {

    console.log("Page loaded");

    emailjs.init("J5ThxfElzC0bwSa4E");
    console.log("EmailJS initialized");

    const form = document.getElementById("contactForm");
    console.log("Form:", form);

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        console.log("Submit clicked");

        emailjs.sendForm(
            "service_2g8sm9q",
            "template_q779g4q",
            this
        )
        .then(function (response) {
            console.log("SUCCESS!", response);

            Swal.fire({
                icon: "success",
                title: "Message Sent!"
            });

            form.reset();

        })
        .catch(function (error) {
            console.error("FAILED!", error);

            Swal.fire({
                icon: "error",
                title: "Failed!",
                text: JSON.stringify(error)
            });
        });

    });

});
