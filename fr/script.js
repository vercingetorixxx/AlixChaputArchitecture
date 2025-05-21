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


const toggleDarkButton = document.getElementById('dark-mode-toggle');

toggleDarkButton.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    document.body.classList.remove('lightmode');

    const isDarkMode = document.body.classList.contains('darkmode');

    if (isDarkMode) {
        document.documentElement.style.setProperty(
            '--bg_gradient_colors', 
            `rgb(100, 90, 110) 0%,
            rgb(80, 100, 120) 20%,
            rgb(120, 120, 100) 50%,
            rgb(140, 90, 110) 80%,
            rgb(100, 90, 110) 100%`
        );
        document.documentElement.style.setProperty(
            '--container_background',
            'rgba(0,0,0,0.5)'
        );
    } 
    else {
        document.documentElement.style.setProperty(
            '--bg_gradient_colors', 
            `rgb(225, 216, 230) 0%,
            rgb(210, 230, 240) 20%,
            rgb(240, 240, 220) 50%,
            rgb(255, 220, 230) 80%,
            rgb(225, 216, 230) 100%`
        );
        document.documentElement.style.setProperty(
            '--container_background',
            'rgba(255,255,255,0.5)'
        );
    }
});

const toggleLightButton = document.getElementById('light-mode-toggle');

toggleLightButton.addEventListener('click', () => {
    document.body.classList.toggle('lightmode');
    document.body.classList.remove('darkmode');

    const isLightMode = document.body.classList.contains('lightmode');
    if (isLightMode) {
        document.documentElement.style.setProperty(
            '--bg_gradient_colors', 
            `rgb(225, 216, 230) 0%,
            rgb(210, 230, 240) 20%,
            rgb(240, 240, 220) 50%,
            rgb(255, 220, 230) 80%,
            rgb(225, 216, 230) 100%`
        );
        document.documentElement.style.setProperty(
            '--container_background',
            'rgba(255,255,255,0.5)'
        );
    }
    else {
        document.documentElement.style.setProperty(
            '--bg_gradient_colors', 
            `rgb(100, 90, 110) 0%,
            rgb(80, 100, 120) 20%,
            rgb(120, 120, 100) 50%,
            rgb(140, 90, 110) 80%,
            rgb(100, 90, 110) 100%`
        );
        document.documentElement.style.setProperty(
            '--container_background',
            'rgba(0,0,0,0.5)'
        );
    } 
});