document.addEventListener('DOMContentLoaded', () => {
    const footerPath = window.location.pathname === '/index.html' || window.location.pathname === '/' ?
        './footer.html' : '../../footer.html';

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
