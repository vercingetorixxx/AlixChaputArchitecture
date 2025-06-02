const projectImages = document.querySelectorAll('.projectImgContainer');

projectImages.forEach(image => {
	image.addEventListener('click', () => {
		if (document.fullscreenElement === image) {
			document.exitFullscreen();
		}
		else {
			image.requestFullscreen();
			document.documentElement.style.setProperty('--coverImageHeight', '100vh');
		}
	});
});

document.addEventListener('fullscreenchange', () => {
	if (!document.fullscreenElement) {
		document.documentElement.style.removeProperty('--coverImageHeight');
	}
});