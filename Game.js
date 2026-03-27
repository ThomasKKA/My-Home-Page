// script.js

const questions = [
    {
        question: "Who was the first Pope of the Catholic Church?",
        image: "4c1e57a5ea983cd90559f4d30acbdde9-st peter pope.jpg",
        options: ["St. Paul", "St. Peter", "St. John", "St. Augustine"],
        answer: "St. Peter"
    },
    {
        question: "How many Sacraments are there in the Catholic Church?",
        image: "sacraments_of_the_catholic_church.png",
        options: ["5", "7", "10", "12"],
        answer: "7"
    },
    {
        question: "Which book is the first book of the Bible?",
        image: "bible-king-james-version-authorized-kjv-1611-best-bible-for-kobo.jpg",
        options: ["Exodus", "Genesis", "Matthew", "Psalms"],
        answer: "Genesis"
    },
    {
        question: "What is the Eucharist?",
        image: "illustration-of-the-seven-catholic-sacraments-e1726836985787.png",
        options: [
            "A prayer book",
            "The Body and Blood of Christ",
            "A church building",
            "A Bible verse"
        ],
        answer: "The Body and Blood of Christ"
    },
    {
        question: "Who is the mother of Jesus?",
        image: "images.jpg",
        options: ["Elizabeth", "Martha", "Mary", "Ruth"],
        answer: "Mary"
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
