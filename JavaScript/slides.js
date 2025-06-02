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


// -------- rest button ----------- //


const border = document.querySelector('.border');
const rest = document.querySelector('.rest');
const rest2 = document.querySelector('.rest2')

rest.addEventListener('click', () => {
	border.classList.remove('moveDown');
	border.classList.add('moveUp');
	if (typeof resizeIntroContent === 'function') {
		resizeIntroContent();
	}
	document.body.style.overflow = 'auto';

	logRects();
	bracketManager();
});

rest2.addEventListener('click', () => {
	border.classList.add('moveDown');
	document.body.style.overflow = 'hidden';
});