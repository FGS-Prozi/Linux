document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Określenie ścieżki do pliku stopki w zależności od lokalizacji
        const footerPath = window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' ?
            './footer.html' : '../../footer.html';

        // Ładowanie i wstawienie zawartości pliku stopki za pomocą fetch i async/await
        const response = await fetch(footerPath);
        if (!response.ok) throw new Error('Network response was not ok');
        document.getElementById('footer-placeholder').innerHTML = await response.text();
    } catch (error) {
        console.error('Error loading footer:', error);
    }
});
