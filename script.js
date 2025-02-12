// JavaScript for autoplay images
const images = document.querySelectorAll('.autoplay-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Initialize the first image
images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === 0) {
        img.classList.add('active');
    }
});

setInterval(showNextImage, 3000); // Change image every 3 seconds