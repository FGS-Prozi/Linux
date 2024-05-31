const questions = [
    { //Question 1. Answer 3.
        question: "What is Virtual Box?",
        answers: [
            "It is pre-configured at the hardware level",
            "It is installed on top of an operating system for applications to share resources",
            "It is installed on top of an operating system to run multiple operating system and share resources",
            "It allows us to run only MAC on a Windows PC"
        ],
        correct: 2
    },
    { //Question 2. Answer 3.
        question: "How to install Oracle Virtual Box on your computer?",
        answers: [
            "Go to virtualbox.edu, go down to \"Virtualbox platform packages\", select the package based on your operating system, download and install",
            "Download the ISO image and execute it",
            "Go to virtualbox.org, go down to \"Virtualbox platform packages\", select the package based on your operating system, download and install",
            "All of the above"
        ],
        correct: 2
    },
    { //Question 3. Answer 1.
        question: "Which of the following are Linux distributions?",
        answers: [
            "CentOS, Redhat, SUSE",
            "Windows, CentOS, Redhat, SUSE",
            "CentOS, Redhat, SUSE, Debian, Ubuntu, MAC",
            "CentOS, Redhat, SUSE and VMWare"
        ],
        correct: 0
    },
    { //Question 4. Answer 1.
        question: "A virtual machine can run which of the following?",
        answers: [
            "Operating system",
            "Database",
            "Application",
            "Storage"
        ],
        correct: 0
    },
    { //Question 5. Answer 4.
        question: "What is Linux Open Source?",
        answers: [
            "It cannot be copied",
            "It cannot be replicated",
            "The programming source code is available and canot be editable",
            "The programing source code is available which can be copied and then it can be editable"
        ],
        correct: 3
    },
    { //Question 6. Answer 1.
        question: "The Linux installation wizard ask you the following questions",
        answers: [
            "Language, Hostname, Network, Packages, File partition, root password",
            "Language, Hostname and the number of employees",
            "Language, Hostname, Network, Packages, File partition, and RAID",
            "All of the above"
        ],
        correct: 0
    },
    { //Question 7. Answer 4.
        question: "What are the different ways to install an Operating system?",
        answers: [
            "ISO image",
            "Disc",
            "Network install",
            "All of the above"
        ],
        correct: 3
    },
    { //Question 8. Answer 4.
        question: "Which of the following is NOT true regarding VMware player and Oracle VirtualBox?",
        answers: [
            "They both allow you to run a \"virtual\" or guest operating system (OS) inside your main (host) OS",
            "They both are virtual machine software suites for x86 and x64 computers",
            "Both are free software",
            "VMWare player is used for Windows OS and Oracle VirtualBox is used for only Linux OS"
        ],
        correct: 3
    }
];

let currentQuestionIndex = 0;
const userAnswers = [];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question hidden';
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="answers">
                ${q.answers.map((answer, i) => `
                    <li>
                        <label>
                            <input type="radio" name="question${index}" value="${i}">
                            ${answer}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionDiv);
    });

    // Show the first question
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questionsDivs = document.querySelectorAll('.question');
    questionsDivs.forEach((div, i) => {
        if (i === index) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    });
}

function nextQuestion() {
    const selected = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selected) {
        alert("Proszę wybrać odpowiedź przed przejściem do następnego pytania.");
        return;
    }

    userAnswers[currentQuestionIndex] = parseInt(selected.value);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    let score = 0;
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="answers">
                ${q.answers.map((answer, i) => `
                    <li class="${i === q.correct ? 'correct' : (i === userAnswers[index] ? 'incorrect' : '')}">
                        ${answer}
                    </li>
                `).join('')}
            </ul>
            <p>Twoja odpowiedź: ${q.answers[userAnswers[index]]} (${userAnswers[index] === q.correct ? 'Poprawna' : 'Niepoprawna'})</p>
        `;
        quizContainer.appendChild(questionDiv);

        // Add horizontal rule to separate questions
        const hr = document.createElement('hr');
        quizContainer.appendChild(hr);

        if (userAnswers[index] === q.correct) {
            score++;
        }
    });

    document.getElementById('result').innerText = `Twój wynik: ${score} z ${questions.length}`;
    document.getElementById('next-btn').classList.add('hidden');
}

window.onload = loadQuiz;