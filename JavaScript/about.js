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


// -------- dynamic introcontainer ----------- //


const introContentWrapper = document.getElementById('introContentWrapper');
const introContent = document.getElementById('introContent');
const root = document.documentElement;
const elWidth = root.style.getPropertyValue('--elWidth');

function resizeIntroContent() {
    if (window.innerWidth > 1024) {
        // Get the fixed height of #introContent
        const fixedHeight = parseFloat(getComputedStyle(introContentWrapper).height);

        // Clone #introContent for offscreen measurement
        const clone = introContentWrapper.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.height = 'auto'; // Allow text to expand naturally
        document.body.appendChild(clone);
        const introTextClone = clone.querySelector('#introText');

        // Binary search for optimal width
        let minWidth = 100;           // Minimum width in pixels
        let maxWidth = window.innerWidth; // Maximum width (container width)
        const precision = 1;          // Precision in pixels

        while (maxWidth - minWidth > precision) {
            const testWidth = (minWidth + maxWidth) / 2;
            clone.style.width = testWidth + 'px';
            const textHeight = introTextClone.offsetHeight;

            if (textHeight > fixedHeight) {
                // Text is too tall; increase width to reduce height
                minWidth = testWidth;
            } else {
                // Text fits; try a smaller width
                maxWidth = testWidth;
            }
        }

        // Use the smallest width where text height <= fixedHeight
        const optimalWidth = maxWidth;
        introContentWrapper.style.width = optimalWidth + 'px';

        // Clean up the clone
        document.body.removeChild(clone);
    } 
    else {
        introContentWrapper.style.width = '100%';
        introContent.style.width = elWidth.trim();
    }
};


if (window.innerWidth > 1024) {
    window.addEventListener('load', () => {

        resizeIntroContent();

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeIntroContent, 100);
        });
        
    });
}


// -------- rest button ----------- //


const border = document.querySelector('.border');
const rest = document.querySelector('.rest');
const rest2 = document.querySelector('.rest2')

rest.addEventListener('click', () => {
    border.classList.remove('moveDown');
    border.classList.add('moveUp');
    resizeIntroContent();
    document.body.style.overflow = 'auto';

    logRects();
    bracketManager();
});

rest2.addEventListener('click', () => {
    border.classList.add('moveDown');
    document.body.style.overflow = 'hidden';
});