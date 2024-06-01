document.addEventListener("DOMContentLoaded", function() {
    const pdfViewer = document.getElementById("pdfViewer");

    const pdfFiles = [
        { buttonId: "pdfButton1", filePath: "./pdf3/Module 3.pdf" },
        { buttonId: "pdfButton2", filePath: "./pdf3/1 Linux Structure.pdf" },
        { buttonId: "pdfButton3", filePath: "./pdf3/3 Linux vs Windows.pdf" },
        { buttonId: "pdfButton4", filePath: "./pdf3/4 Logging On To System.pdf" },
        { buttonId: "pdfButton5", filePath: "./pdf3/5 Linux File System.pdf" },
        { buttonId: "pdfButton6", filePath: "./pdf3/6 File System Detail.pdf" },
        { buttonId: "pdfButton7", filePath: "./pdf3/7 File Names.pdf" },
        { buttonId: "pdfButton8", filePath: "./pdf3/8 Passwords Standards.pdf" },
        { buttonId: "pdfButton9", filePath: "./pdf3/9 Change Password in Linux.pdf" },
        { buttonId: "pdfButton10", filePath: "./pdf3/10 Difference between locate and find command in Linux.pdf" },
        { buttonId: "pdfButton11", filePath: "./pdf3/11 Wildcards.pdf" },
        { buttonId: "pdfButton12", filePath: "./pdf3/12 Soft Link and Hard Links.pdf" },
        { buttonId: "pdfButton13", filePath: "./pdf3/13 List files and directories.pdf" }
    ];

    pdfFiles.forEach(({ buttonId, filePath }) => {
        document.getElementById(buttonId).addEventListener("click", function() {
            pdfViewer.data = filePath;
        });
    });
});