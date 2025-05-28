function navigateTo(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Update the page title from the new <head>
            const newTitle = doc.querySelector('title')?.textContent || 'Alix C. Architecture';
            document.title = newTitle;

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
                newDiv.style.transition = '';
                newDiv.style.opacity = '';
            }, { once: true });

            // Update the browser history
            history.pushState({}, '', url);
        })
        .catch(error => console.error('Navigation failed:', error));
}


const link = document.querySelector('.title');

link.addEventListener('click', (event) => {
    if (link.href.startsWith(window.location.origin)) {
        event.preventDefault();
        navigateTo(link.href);
    }
});