// -------- index tranasition ----------- //


function navigateTo(url) {
	fetch(url)
		.then(response => response.text())
		.then(html => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, 'text/html');

			// Update the page title from the new <head>
			const newTitle = doc.querySelector('title')?.textContent || 'Alix C. Architecture';
			document.title = newTitle;

			// Compute Set of new stylesheet hrefs
			const docHrefs = new Set([...doc.querySelectorAll('link[rel="stylesheet"]')].map(link => link.href));
			const oldScriptSrcs = new Set([...document.querySelectorAll('script')].map(script => script.src));

			// Add new CSS stylesheets
			doc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
				if (!document.querySelector(`link[href="${link.href}"]`)) {
					document.head.appendChild(link.cloneNode());
				}
			});

			// Extract the new #main-content from the <body>
			const newContent = doc.querySelector('#main-content').innerHTML;

			// Create a new div for the content with initial opacity 0
			const newDiv = document.createElement('div');
			newDiv.className = 'page-content';
			newDiv.innerHTML = newContent;
			newDiv.style.opacity = '0';

			const container = document.getElementById('content-container');
			container.appendChild(newDiv);

			const currentContent = document.getElementById('current-content');

			// Animate the transition
			requestAnimationFrame(() => {
				currentContent.style.opacity = '0';
				newDiv.style.opacity = '1';
			});

			// Clean up after the transition ends
			newDiv.addEventListener('transitionend', () => {
				container.removeChild(currentContent);
				newDiv.id = 'current-content';

				// Remove old styles
				document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
					if (!docHrefs.has(link.href)) {
						link.remove();
					}
				});

				doc.querySelectorAll('script').forEach(script => {
					if (!oldScriptSrcs.has(script.src)) {
						const newScript = document.createElement('script');
						newScript.src = script.src;
						doc.body.appendChild(newScript);
					}
				});

				// document.querySelectorAll('script').forEach(script => script.remove());

				// const scripts = doc.querySelectorAll('script');
				// scripts.forEach(script => {
				//     const newScript = document.createElement('script');
				//     newScript.src = script.src;
				//     document.body.appendChild(newScript);
				// });

			}, { once: true });

			// Update the browser history
			history.pushState({}, '', url);
		})
		.catch(error => console.error('Navigation failed:', error));
}