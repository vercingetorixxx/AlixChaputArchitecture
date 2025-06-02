const projectImages = document.querySelectorAll('.projectImgContainer');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        if (document.fullscreenElement === image) {
            document.exitFullscreen();
            document.documentElement.style.removeProperty('--coverImageHeight');
        }
        else {
            image.requestFullscreen();
            document.documentElement.style.setProperty('--coverImageHeight', '100vh');
        }
    });
});