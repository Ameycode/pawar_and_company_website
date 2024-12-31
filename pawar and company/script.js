// Tab functionality
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach((tab) => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Automatic Image Slider
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll('.slider img');
    slides.forEach((slide) => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    showTab('home'); // Display the Home tab by default
    showSlides(); // Start the image slider
});
