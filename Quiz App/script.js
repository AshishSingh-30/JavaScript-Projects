const quizData = [
    {
        question: "What is best programming language for build Games ?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "php",
        correct: "c"
    }, {
        question: "Which programming language is best to buid Web Application ?",
        a: "Java",
        b: "Django",
        c: "Javacsript",
        d: "React",
        correct: "c"
    }, {
        question: "Which programming language is best to buid Application ?",
        a: "Flutter",
        b: "Python",
        c: "React",
        d: "Java",
        correct: "a"
    }, {
        question: "Which is not database ?",
        a: "MySql",
        b: "MongoDB",
        c: "Cloud",
        d: "Express",
        correct: "d"
    }, {
        question: "HTML is used for ?",
        a: "Fun",
        b: "Structure",
        c: "Routing",
        d: "Design",
        correct: "b"
    },
];

const quizEL = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit")

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
    deSelected();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitbtn.addEventListener("click", () => {
    //check to the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizEL.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
});