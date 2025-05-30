// -------------- Lightmode & Darkmode --------------- //


const toggleDarkButtons = document.querySelectorAll('.darkModeToggle');

toggleDarkButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (document.body.classList.contains('darkmode')) {
            document.body.classList.remove('darkmode');
            document.body.classList.add('lightmode');
            localStorage.setItem('theme', 'light');
        } else if (document.body.classList.contains('lightmode')) {
            document.body.classList.remove('lightmode');
            document.body.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('darkmode'); // Default to darkmode
            localStorage.setItem('theme', 'dark');
        }
    });
});

const toggleLightButtons = document.querySelectorAll('.lightModeToggle');

toggleLightButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (document.body.classList.contains('darkmode')) {
            document.body.classList.remove('darkmode');
            document.body.classList.add('lightmode');
            localStorage.setItem('theme', 'light');
        } else if (document.body.classList.contains('lightmode')) {
            document.body.classList.remove('lightmode');
            document.body.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('lightmode'); // Default to lightmode
            localStorage.setItem('theme', 'light');
        }
    });
});

const savedTheme = localStorage.getItem('theme');
document.body.classList.remove('darkmode', 'lightmode');

if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
} else if (savedTheme === 'light') {
    document.body.classList.add('lightmode');
}


// -------- STICKY NAVBAR ----------- //


const mainNav = document.querySelector('.mainNav');
const hamIcon = document.querySelector('.hamIcon');
const hamburger = document.querySelector('.hamburger');
const threshold = window.innerHeight / 6;
console.log(threshold);

if (mainNav || hamIcon){
    function handleScrolldown(){
        if (window.scrollY > threshold) {
            [mainNav, hamIcon, hamburger].forEach(el => el.classList.add('hidden'));
        } 
        else {
            [mainNav, hamIcon, hamburger].forEach(el => el.classList.remove('hidden'));
        }
    }

    window.addEventListener('scroll', handleScrolldown);
    handleScrolldown();
}

// -------- rotating asterisks ----------- //


const asterisks = document.querySelectorAll('.asterisk');

asterisks.forEach(asterisk => {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const angle = scrollY / 3; // 1 degree per 3 pixels scrolled
        asterisk.style.transform = `rotate(${angle}deg)`;
    });
});


// -------- dynamic headers ----------- //


function getNumberOfLines(element) {
    element.offsetHeight;
    const range = document.createRange();
    range.selectNodeContents(element); // Selects all content inside the .header element
    const rects = range.getClientRects(); // Gets rectangles for each line
    return rects.length; // Number of rectangles = number of lines
}

const headers = document.querySelectorAll('.header');

// Store original text content for each header to avoid cumulative errors
headers.forEach(header => {
    header.dataset.originalText = header.textContent.trim(); // Save original text
});

function logRects() {
    headers.forEach(header => {
        console.log(getNumberOfLines(header));
    })
};

function bracketManager () {
    headers.forEach(header => {
        const lines = getNumberOfLines(header);
        const originalText = header.dataset.originalText;

        if (lines > 1) {
            header.textContent = originalText;
        }

        if (lines === 1) {
            header.textContent = `{ ${originalText} }`;
        }
    })
};

window.addEventListener('load', () => {
    logRects();
    bracketManager();
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        logRects();
        bracketManager();
    }, 100);
});


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