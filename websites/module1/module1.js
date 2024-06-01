document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    const pdfFiles = [
        { buttonId: "pdfButton1", filePath: "./pdf1/Module 1.pdf" },
        { buttonId: "pdfButton2", filePath: "./pdf1/History of Unix.pdf" },
        { buttonId: "pdfButton3", filePath: "./pdf1/Operating system.pdf" },
        { buttonId: "pdfButton4", filePath: "./pdf1/Inside Linux.pdf" },
        { buttonId: "pdfButton5", filePath: "./pdf1/Parts of OS.pdf" },
        { buttonId: "pdfButton6", filePath: "./pdf1/Virtual memory.pdf" }
    ];

    pdfFiles.forEach(({ buttonId, filePath }) => {
        document.getElementById(buttonId).addEventListener("click", function() {
            pdfViewer.data = filePath;
        });
    });
});