// Enhanced JavaScript for smooth scrolling, animations, and interactive features

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]')..forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add('fade-in');
        } 
    });
};

window.addEventListener('scroll', animateOnScroll);

// Interactive feature example
const interactiveButtons = document.querySelectorAll('.interactive-button');
interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
});

// Trigger animations on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);