const questions = [
    { //Question 1. Answer 2.
            question: "Who came up with Linux Operating System?",
            answers: [
                "John Travolta",
                "Linus Torvalds",
                "Linus Travolta",
                "None of the above"
            ],
            correct: 1
        },
        { //Question 2. Answer 1.
            question: "The Unix operating system was created more than 30 years ago by?",
            answers: [
                "A group of researchers at AT\&T\'s Bell Laboratories",
                "A group of researchers at AT\&T\'s Dell Laboratories",
                "Linus Torvaids",
                "Bell Labs and Verizon"
            ],
            correct: 0
        },
        { //Question 3. Answer 4.
            question: "Which of the following are Linux distributions?",
            answers: [
                "Console",
                "Putty or terminal client",
                "SSH from one command line machine to another",
                "All of the above"
            ],
            correct: 3
        },
        { //Question 4. Answer 3.
            question: "What should be avoided in Linux file system?",
            answers: [
                "Do not use letter",
                "Do not use case-sensitive letters",
                "Do not use spaces",
                "None of the above"
            ],
            correct: 2
        },
        { //Question 5. Answer 1.
            question: "What is the command to change password for a regular user by root?",
            answers: [
                "passwd username",
                "passwd",
                "password",
                "Passwd"
            ],
            correct: 0
        },
        { //Question 6. Answer 4.
            question: "Which of the following is Linux file system type?",
            answers: [
                "xfs",
                "ext2",
                "ext3",
                "All of the above"
            ],
            correct: 3
        },
        { //Question 7. Answer 4.
            question: "What is /root directory is used for?",
            answers: [
                "It is used for all users home directory",
                "It is used for temporary space",
                "It is used for system logs",
                "None of the above"
            ],
            correct: 3
        },
        { //Question 8. Answer 2.
            question: "Which command is used to list files?",
            answers: [
                "pwd",
                "ls",
                "LS",
                "list"
            ],
            correct: 1
        },
        { //Question 9. Answer 1.
            question: "What is absolute path?",
            answers: [
                "An absolute path always begins with a \"/\". This indicates that the path starts at the root directory",
                "An absolute path always begins with a \"/root\". This indicates that the path starts at the root directory",
                "An absolute path always begins with a \"/\". It identifies a location relative to your current position",
                "All of the above"
            ],
            correct: 0
        },
        { //Question 10. Answer 4.
            question: "Which command can be used to create a file?",
            answers: [
                "touch",
                "cp",
                "vi",
                "All of the above",
                "A and B"
            ],
            correct: 3
        },
        { //Question 11. Answer 4.
            question: "How many new directories will be created after running the following command? mkdir {a..c}{1..3}",
            answers: [
                "0",
                "2",
                "3",
                "9"
            ],
            correct: 3
        },
        { //Question 12. Answer 2.
            question: "What is the difference between soft and hard link?",
            answers: [
                "Soft link is created on a directory where hard link is created on file",
                "In soft link if source file is deleted then the link is broken but in hard link deleting a source file will not impact the linked file",
                "In hard link if source file is deleted then the link is broken but in soft link deleting a source file will not impact the linked file",
                "Soft link is created when original source file exist where hard link does not require any source file"
            ],
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