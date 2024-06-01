document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    const pdfFiles = [
        { buttonId: "pdfButton1", filePath: "./pdf0/Complete Linux Training Syllabus.pdf" }
    ];

    pdfFiles.forEach(({ buttonId, filePath }) => {
        document.getElementById(buttonId).addEventListener("click", function() {
            pdfViewer.data = filePath;
        });
    });
});
