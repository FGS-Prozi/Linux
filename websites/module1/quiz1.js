const questions = [
    { //Question 1. Answer 2.
        question: "What is Linux?",
        answers: [
            "It is computer system",
            "It is an operating system",
            "It is an application runs on Windows",
            "All of the above"
        ],
        correct: 1
    },
    { //Question 2. Answer 1.
        question: "Which one of the following is correct?",
        answers: [
            "Hardware --> operating system --> applications --> users",
            "Operating system --> users --> networking --> storage",
            "Hardware --> operating system --> users --> applications",
            "Hardware --> users"
        ],
        correct: 0
    },
    { //Question 3. Answer 2.
        question: "Unix was first developed in which decade?",
        answers: [
            "2010-2018",
            "1970-1980",
            "1990-2000",
            "2000-2010"
        ],
        correct: 1
    },
    { //Question 4. Answer 1.
        question: "Who came up with Linux?",
        answers: [
            "Linus Torvalds",
            "Linus James",
            "Pengium",
            "Bell Labs"
        ],
        correct: 0
    },
    { //Question 5. Answer 4.
        question: "Which of the following is incorrect?",
        answers: [
            "Linux is open source",
            "Mostly Linux is virus free",
            "Linux is not as user friendly as Windows",
            "Commands used in Linux are exactly same as Windows DOS commands"
        ],
        correct: 3
    },
    { //Question 6. Answer 4.
        question: "Unix is mostly used by?",
        answers: [
            "Oracle/Sun",
            "HP-UX",
            "AIX",
            "All of the above"
        ],
        correct: 3
    },
    { //Question 7. Answer 4.
        question: "Which of the following is correct?",
        answers: [
            "MAC operating system can only be installed and supported on Apple Hardware",
            "CentOS is same as Redhat but without technical support",
            "Windows cannot be installed on SPARC processor",
            "All of the above"
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

    // Hide the next button
    document.getElementById('next-btn').classList.add('hidden');
}

window.onload = loadQuiz;