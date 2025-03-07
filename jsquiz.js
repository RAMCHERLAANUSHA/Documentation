const questions=[
    {
        question:"Inside which HTML element do we put in the JavaScript?",
        answers:[
            {text: "&ltjs&gt",correct: false},
            {text: "&ltjavascript&gt",correct: false},
            {text: "&ltscript&gt",correct: true},
            {text: "&ltjsscript&gt",correct: false},
        ]
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers:[
            {text: "The &ltbody&gt Section",correct: false},
            {text: "The &lthead&gt Section",correct: false},
            {text: "Both the &ltbody&gt and &lthead&gt Section",correct: true},
            {text: "&ltstyle&gt",correct: false},
        ]
    },
    {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers:[
            {text: "&ltscript src='xxx.js'&gt",correct: true},
            {text: "&ltscript name='xxx.js'&gt",correct: false},
            {text: "&ltscript href='xxx.js'&gt",correct: false},
            {text: "&ltscript src='xxx'&gt",correct: false},
        ]
    },
    {
        question:"The external JavaScript file must contain the &ltscript&gt tag.",
        answers:[
            {text: "false", correct: true},
            {text: "true",correct: false},
            {text: "both",correct: false},
            {text: "none",correct: false},
        ]
    },
    {
        question:"How do you write 'Hello World' in an alert box?",
        answers:[
            {text: "msgBox('Hello World');", correct: false},
            {text: "alert('Hello World');",correct: true},
            {text: "alertBox('Hello World');",correct: false},
            {text: "msg('Hello World');",correct: false},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers:[
            {text: "function:myFunction()", correct: false},
            {text: "function myFunction()",correct: true},
            {text: "function=myFunction()",correct: false},
            {text: "function:myFunction",correct: false},
        ]
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        answers:[
            {text: "x", correct: false},
            {text: "=",correct: true},
            {text: "*",correct: false},
            {text: "-",correct: false},
        ]
    },
    {
        question:"How to write an IF statement in JavaScript?",
        answers:[
            {text: "if i==5 then", correct: false},
            {text: "if i=5 then",correct: false},
            {text: "if i=5",correct: false},
            {text: "if (i==5)",correct: true},
        ]
    },
    {
        question:"How does a WHILE loop start?",
        answers:[
            {text: "while (i <= 10; i++)", correct: false},
            {text: "while (i <= 10)",correct: true},
            {text: "while i = 1 to 10;)",correct: false},
            {text: "while (i++)",correct: false},
        ]
    },
    {
        question:"How does a FOR loop start?",
        answers:[
            {text: "for (i = 0; i <= 10)", correct: false},
            {text: "for (i = 0; i <= 10; i++)",correct: true},
            {text: "for (i <= 10; i++)",correct: false},
            {text: "for i = 1 to 10",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answerbtns");
const nextbutton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionindex];
    let questionNumber = currentQuestionindex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function reset(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("wrong");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }else{
            button.classList.add("wrong");
        }
        button.disabled = true;
    });
    selectbtn.style.backgroundColor = "rgb(21, 148, 159)"
    nextbutton.style.display = "block";
}

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
})

function handleNextbutton(){
    currentQuestionindex++;
    if (currentQuestionindex < questions.length){
        showQuestion();
    }else{
        getCertificate();
    }
}

function getCertificate(){
    reset();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    let data2 = { scores: score};
    localStorage.setItem('scored', JSON.stringify(data2));
    nextbutton.innerHTML = "Get Certification";
    nextbutton.addEventListener('click', function() {
        window.location.href = 'jscertificate.html';
    });
    nextbutton.style.display = "block";
}

startQuiz();