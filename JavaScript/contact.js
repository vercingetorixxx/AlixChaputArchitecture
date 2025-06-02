// -------- Email Dialog ----------- //


const dialogs = document.querySelectorAll('dialog');
const mainContent = document.querySelector('main');
const successDialog = document.getElementById('successDialog');
const failDialog = document.getElementById('failDialog');

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	fetch(this.action, {
		method: 'POST',
		body: new FormData(this),
		headers: { 'Accept': 'application/json' }
	})
		.then(response => {
			if (response.ok) {
				mainContent.setAttribute("inert", "");
				successDialog.showModal();
				successDialog.style.display = "flex";
			}
			else {
				mainContent.setAttribute("inert", "");
				failDialog.showModal();
				failDialog.style.display = "flex";
			}
		});
});

dialogs.forEach(dialog => {
	dialog.addEventListener("click", () => {
		dialog.close();
		dialog.style.display = "none";
		mainContent.removeAttribute("inert");
	});
})