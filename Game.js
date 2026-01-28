// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        image: "top-view-soil.jpg",
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        image:"top-view-soil.jpg",
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        image: "top-view-soil.jpg",
        answer: "4"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const img = document.getElementById("question-image");
function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;


    img.src = q.image;
    optionsEl.innerHTML = "";
    
    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", selectOption);
        optionsEl.appendChild(button);
       
    });
}

function selectOption(e) {
    const selected = e.target.textContent;
    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
        score++;
        e.target.style.backgroundColor = "green";
    } else {
        e.target.style.backgroundColor = "red";
        // show correct answer
        Array.from(optionsEl.children).forEach(btn => {
            if (btn.textContent === correct) btn.style.backgroundColor = "green";
        });
    }

    // disable all buttons after selecting
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
        nextBtn.style.display = "none";
    }
});

// start the game
loadQuestion();
