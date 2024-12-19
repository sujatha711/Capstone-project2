const questions=[
    { question:"Which sea is lies between Asia and Africa?",
        answers:[
            {text:"Black sea",correct:false},
            {text:"Baspian sea",correct:false},
             {text:"Indian sea",correct:false},
             {text:"Red sea",correct:true},
        ]},

        {
            question:"Which country has the strongest Army in the world?",
            answers:[
                {text:"India",correct:false},
                {text:"USA",correct:true},
                {Text:"Russia",correct:false},
                {text:"China",correct:false},
            ]

        },
        {
            question:"Which country has most number of Dams in the world?",
            answers:[{text:"United states",correct:true},
            {text:"China",correct:false},
            {text:"Russia",correct:false},
            {text:"India",correct:false},]
        },

        {question:"Rand is currncy of which country?",
            answers:[{text:"Russia",correct:false},
                {text:"South africa",correct:true},
                {text:"south korea",correct:false},
                {text:"Canada",correct:false},] 

        }]


const questionElement = document.getElementById("question");
const buttonContainer = document.getElementById("buttons");
const nextButton = document.getElementById("nextbutton");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(button, answer));
        buttonContainer.appendChild(button);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

function selectAnswer(button, answer) {
    const isCorrect = answer.correct;
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }
    
    Array.from(buttonContainer.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

