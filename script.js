var startBTN = document.querySelector(".start-btn")
var quizSection = document.querySelector(".quiz")
var score= 0;
var time= 60;
var timerId;
var timerEl= document.getElementById("time")
var questionIndex= 0
var answers= document.querySelector(".answer-box")
var initialsEl= document.getElementById("initials")
var questions = [
    {
        text: "Question 1: Where does Spongebob work?",
        choices:["A. Krusty Krab","B. Chum Bucket","C. Mrs.Puff's Boating School","D. Rock Bottom"],
        answer: "A. Krusty Krab"
    },
    {
        text: "Question 2: Who stole King Neptune's crown?",
        choices:["A. Mr. Krabs","B. Plankton","C. Squidward","D. Mrs. Puff"],
        answer: "B. Plankton"
    },
    {
        text: "Question 3: How many Spots does Squidward have on his forehead?",
        choices:["A. Seven","B. Four","C. Eight","D. Two"],
        answer: "C. Eight"
    },
    {
        text: "Question 4: Who Wins the snail race?",
        choices:["A. Snellie","B. Gary","C. Rocky"],
        answer: "C. Rocky"
    },
    {
        text: "Question 5: Which year did Breaking Bad first aired?",
        choices:["A. 2008","B. 2012","C. 2010","D. 2009"],
        answer: "A. 2008"
    },
    {
        text: "Question 6: Finish the line: What is wrong with you..",
        choices:["A. Why are you here?","B. Why didn't you ask me?","C. Why are you blue?"],
        answer: "C. Why are you blue?"
    },
]
function startGame(){
    document.querySelector(".start").classList.add("hide");
    quizSection.classList.remove("hide")
    timerId= setInterval(countdown, 1000)
    getQuestion()
}
function countdown(){
    time--
    timerEl.textContent=time
    if(time<= 0){
        endquiz()
    }
}
function getQuestion(){
    var currentquestion= questions[questionIndex]
    var title= document.querySelector(".question")
    title.textContent= currentquestion.text
    answers.innerHTML= ""
    for(var i= 0; i<currentquestion.choices.length; i++){
        var button = document.createElement("button")
        var choice= currentquestion.choices[i]
        button.textContent = currentquestion.choices[i]
        button.setAttribute("class","choice")
        button.setAttribute("value",choice)
        answers.appendChild(button)
    }
    // currentquestion.choices.forEach(function(choice){

    // document.querySelector(".answer-box").append(button)
    // })
}
function questionClick(event){
    var button= event.target
    if(!button.matches(".choice")){
        return
    }
    if(button.value !== questions[questionIndex].answer){
        time-=10
        if(time<0){
            time=0
        }
        timerEl.textContent= time
    }
    questionIndex++
    if(time<=0 || questionIndex === questions.length){
        endquiz()
    }
    else{
        getQuestion()
    }
}
function endquiz(){
    clearInterval(timerId)
    var endscreen= document.querySelector("#end")
    endscreen.removeAttribute("class")
    var finalScore= document.getElementById("final-score")
    finalScore.textContent= time
    quizSection.setAttribute("class", "hide")
}
function saveHighScore(){
    var initials= initialsEl.value.trim()
    if(initials!==""){
        var highscores= JSON.parse(window.localStorage.getItem("highscores")) || []
        var newscore= {
            score: time,
            initials: initials
        }
        highscores.push(newscore)
        window.localStorage.setItem("highscores",JSON.stringify(highscores))
        window.location.href="highscores.html"
    }
}
startBTN.addEventListener("click", startGame)
answers.addEventListener("click", questionClick)
document.getElementById("submit").addEventListener("click",saveHighScore)

var playerName;
var playerScore;
var gameResult = {};
var highscoreList = [];
