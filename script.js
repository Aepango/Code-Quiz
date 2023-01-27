var startBTN = document.querySelector(".start-btn")
var quizSection = document.querySelector(".quiz")
var score= 0;
var questions = [
    {
        text: "Question 1",
        choices:["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 2",
        choices:["a","b","c","d"],
        answer: "b"
    },
    {
        text: "Question 3",
        choices:["a","b","c","d"],
        answer: "c"
    },
    {
        text: "Question 4",
        choices:["a","b","c","d"],
        answer: "d"
    },
    {
        text: "Question 5",
        choices:["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 6",
        choices:["a","b","c","d"],
        answer: "c"
    },
]
function startGame(){
    document.querySelector(".start").classList.add("hide");
    quizSection.classList.remove("hide")
    getQuestion()
}
function getQuestion(){
    document.querySelector(".question").textContent=questions[0].text
    questions[0].choices.forEach(function(choice){
    var button = document.createElement("button")
    button.textContent = choice
    button.setAttribute("value",choice)
    button.onclick= function(){
    if(this.value === questions[0].answer){
        score++
    }
    else{
        console.log("incorrect")
    }
    }
    document.querySelector(".answer-box").append(button)
    })
}
startBTN.addEventListener("click", startGame)