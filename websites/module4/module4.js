document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    const pdfFiles = [
        { buttonId: "pdfButton1", filePath: "./pdf4/Module 4.pdf" },
        { buttonId: "pdfButton2", filePath: "./pdf4/1 Command Syntax.pdf" },
        { buttonId: "pdfButton3", filePath: "./pdf4/2.1 File Permissions and Ownership.pdf" },
        { buttonId: "pdfButton4", filePath: "./pdf4/2.2 File Permission (Numerically).pdf" },
        { buttonId: "pdfButton5", filePath: "./pdf4/3 Getting Help.pdf" },
        { buttonId: "pdfButton6", filePath: "./pdf4/4 TAB Completion.pdf" },
        { buttonId: "pdfButton7", filePath: "./pdf4/5 Adding Text to Files.pdf" },
        { buttonId: "pdfButton8", filePath: "./pdf4/6 Pipes.pdf" },
        { buttonId: "pdfButton9", filePath: "./pdf4/7 File Maintenance Commands.pdf" },
        { buttonId: "pdfButton10", filePath: "./pdf4/8 File Display Commands.pdf" },
        { buttonId: "pdfButton11", filePath: "./pdf4/9 Filters Text Processing Commands.pdf" },
        { buttonId: "pdfButton12", filePath: "./pdf4/10 Finding System Information.pdf" },
        { buttonId: "pdfButton13", filePath: "./pdf4/11 File Permissions Cheat Sheet.pdf" },
        { buttonId: "pdfButton14", filePath: "./pdf4/12 Access Control Lists.pdf" }
    ];

    pdfFiles.forEach(({ buttonId, filePath }) => {
        document.getElementById(buttonId).addEventListener("click", function() {
            pdfViewer.data = filePath;
        });
    });
});