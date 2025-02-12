let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

const showSlides = () => {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[currentSlide].classList.add('active');

    // Update current slide index
    currentSlide = (currentSlide + 1) % slides.length;
};

// Change slide every 3 seconds
setInterval(showSlides, 3000); 
showSlides(); // Show the first slide initially