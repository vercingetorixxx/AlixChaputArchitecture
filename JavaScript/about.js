// -------- .siContainer flip ----------- //


document.querySelectorAll('.siContainer').forEach(container => {
    container.addEventListener('click', () => {
        container.querySelector('.flipper').classList.toggle('flipped');
        container.classList.add('flipping');

        // Remove flipping class after transition ends
        setTimeout(() => {
        container.classList.remove('flipping');
        }, 1000);
    });
});


// -------- image slideshow ----------- //


const container = document.querySelector('.coverImage');
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = slides.querySelectorAll('img');
let imageWidth = container.clientWidth;
let currentIndex = 0;

function updateTransform() {
    slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Set initial position
updateTransform();

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateTransform();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateTransform();
});

window.addEventListener('resize', () => {
    imageWidth = container.clientWidth;
    updateTransform();
});