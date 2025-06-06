const links = document.querySelectorAll('a.title');
const link = document.querySelector('a.title');

links.forEach(link => {
	link.addEventListener('click', (event) => {
		if (link.href.startsWith(window.location.origin)) {
			event.preventDefault();
			navigateTo(link.href);
		}
	});
});

document.getElementById("meta-refresh").remove(); // Remove meta refresh if JavaScript is enabled

if (link && link.href) {
	setTimeout(function () {
		navigateTo(link.href);
	}, 6000); // 6000 milliseconds = 6 seconds
}