document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    const pdfFiles = [
        { buttonId: "pdfButton1", filePath: "./pdf2/Module 2.pdf" },
        { buttonId: "pdfButton2", filePath: "./pdf2/Keyboard Keys and Their Explanation.pdf" },
        { buttonId: "pdfButton3", filePath: "./pdf2/Oracle Virtual Box User Manual.pdf" },
        { buttonId: "pdfButton4", filePath: "./pdf2/Red Hat Enterprise Linux 7 Installation Guide en US.pdf" },
        { buttonId: "pdfButton5", filePath: "./pdf2/CentOS Installation Guide.pdf" },
        { buttonId: "pdfButton6", filePath: "./pdf2/Changing from 32 to 64bit.pdf" }
    ];

    pdfFiles.forEach(({ buttonId, filePath }) => {
        document.getElementById(buttonId).addEventListener("click", function() {
            pdfViewer.data = filePath;
        });
    });
});