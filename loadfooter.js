document.addEventListener('DOMContentLoaded', async () => {
    try {
        const footerPath = window.location.pathname.endsWith('/') || window.location.pathname === '/index.html' ?
            './footer.html' : '../../footer.html';

        const response = await fetch(footerPath);
        if (!response.ok) throw new Error('Network response was not ok');
        document.getElementById('footer-placeholder').innerHTML = await response.text();
    } catch (error) {
        console.error('Error loading footer:', error);
    }
});
