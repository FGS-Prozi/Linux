document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    document.getElementById("pdfButton1").addEventListener("click", function() {
        pdfViewer.src = "./Complete Linux Training Syllabus.pdf";
    });
});
