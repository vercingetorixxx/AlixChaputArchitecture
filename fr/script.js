const toggleDarkButtons = document.querySelectorAll('.dark-mode-toggle');

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



const toggleLightButtons = document.querySelectorAll('.light-mode-toggle');

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


const mainnav = document.querySelector('.mainnav');
const hamicon = document.querySelector('.hamicon');
const hamburger = document.querySelector('.hamburger');
const threshold = window.innerHeight / 6;
console.log(threshold);

function handleScrolldown(){
    if (window.scrollY > threshold) {
        [mainnav, hamicon, hamburger].forEach(el => el.classList.add('hidden'));
    } 
    else {
        [mainnav, hamicon, hamburger].forEach(el => el.classList.remove('hidden'));
    }
}

window.addEventListener('scroll', handleScrolldown);
handleScrolldown();


// -------- si-container flip ----------- //


document.querySelectorAll('.si-container').forEach(container => {
    container.addEventListener('click', () => {
        container.querySelector('.flipper').classList.toggle('flipped');
        container.classList.add('flipping');
        
        // Remove flipping class after transition ends
        setTimeout(() => {
        siContainer.classList.remove('flipping');
        }, 100);
    });
});