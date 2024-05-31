const questions = [
    {
        question: "Jakie jest stolica Polski?",
        answers: ["Warszawa", "Kraków", "Gdańsk", "Wrocław"],
        correct: 0
    },
    {
        question: "Który ocean jest największy?",
        answers: ["Atlantycki", "Spokojny", "Indyjski", "Arktyczny"],
        correct: 1
    },
    {
        question: "Który kontynent jest najmniejszy?",
        answers: ["Azja", "Australia", "Europa", "Antarktyda"],
        correct: 1
    },
    {
        question: "Jaka jest chemiczna formuła wody?",
        answers: ["H2O", "O2", "CO2", "NaCl"],
        correct: 0
    },
    {
        question: "Ile dni ma rok przestępny?",
        answers: ["365", "366", "364", "367"],
        correct: 1
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