let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const caption = document.querySelector(".caption");
let autoSlide;

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
    caption.textContent = slides[currentIndex].getAttribute("data-caption");
    caption.style.opacity = 1;

    resetAutoSlide();
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

function autoScroll() {
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Set auto-scroll speed here
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoScroll();
}

document.addEventListener("DOMContentLoaded", () => {
    autoScroll();
    showSlide(currentIndex);
});
