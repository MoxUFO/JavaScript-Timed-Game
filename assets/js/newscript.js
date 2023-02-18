let startSection = document.getElementById('start-screen')
let quizSection =document.getElementById('quiz-screen')
let hourGlass = document.getElementById('countdown')
let kickStart = document.getElementById('start-quiz')
let playCard =document.querySelectorAll('section')
let questionField = document.getElementById('question')
let allAnswer = document.getElementById('answers')
let buttonNumOne = document.getElementById('btn-1')
let buttonNumTwo = document.getElementById('btn-2')
let buttonNumThree = document.getElementById('btn-3')
let buttonNumFour = document.getElementById('btn-4')
let timeLeft;
let qindex = 0;
let i;
// console.log(playCard)
let questionsArr = [
 {
    question: "What's my name?",
    choices: [
      {
        answer: "Nelson",
        correct: true,
      },
      {
        answer: "Alex",
        correct: false,
      },
      {
        answer: "Kev",
        correct: false,
      },
      {
        answer: "The Space COwboy",
        correct: false,
      },
    ],
    correctAnswer: 'Nelson'
  },
  {
    questio: "What's my name?",
    choices: [
      {
        answer: "Welson",
        correct: true,
      },
      {
        answer: "Alex",
        correct: false,
      },
      {
        answer: "Kev",
        correct: false,
      },
      {
        answer: "Mike",
        correct: false,
      },
    ],
    correctAnswer: 'Welson'
  },
  {
    question: "What's my name?",
    choices: [
      {
        answer: "Belson",
        correct: true,
      },
      {
        answer: "Alex",
        correct: false,
      },
      {
        answer: "Kev",
        correct: false,
      },
      {
        answer: "Mike",
        correct: false,
      },
    ],
    correctAnswer: 'Belson'
  },
  {
    question: "what is my name?",
    choices: [
      {
        answer: "Telson",
        correct: true,
      },
      {
        answer: "Alex",
        correct: false,
      },
      {
        answer: "Kev",
        correct: false,
      },
      {
        answer: "Mike",
        correct: false,
      },
    ],
    correctAnswer: 'Telson'
  },
  {
    question: "Where should the script tag be located?",
    choices: [
      {
        answer: "Before the closing body tag",
        correct: true,
      },
      {
        answer: "Out West",
        correct: false,
      },
      {
        answer: "At location X",
        correct: false,
      },
      {
        answer: "How Should I know?",
        correct: false,
      },
    ],
    correctAnswer: "befroe the closing body tag "
  },
  
];

 

  

 function startQuiz(event){
  event.preventDefault()
    gameClock()
    startSection.classList.add('hide')
    quizSection.classList.remove('hide')
}

 i = 0
let questionPresented = questionsArr[i].question
questionField.textContent = questionPresented

let answerOnePresented = questionsArr[i].choices[0].answer
buttonNumOne.textContent = answerOnePresented
let answerTwoPresented = questionsArr[i].choices[1].answer
buttonNumTwo.textContent = answerTwoPresented
let answerThreePResented = questionsArr[i].choices[2].answer
buttonNumThree.textContent = answerThreePResented
let answerFourPresented = questionsArr[i].choices[3].answer
buttonNumFour.textContent = answerFourPresented

let rightAnswer = questionsArr[i].correctAnswer 
// console.log(rightAnswer === questionsArr[i].choices[i].answer )
// console.log(questionsArr[i].choices[i].answer)




allAnswer.addEventListener('click', function(event){

    let userPick = event.target.textContent
    // console.log(userPick)

  if ( rightAnswer === userPick){
    console.log('hi')
  }
 
   
   
})









function gameClock() {
    timeLeft =  10;

    gameTime = setInterval(function(){
  if (timeLeft <= 1){
    clearInterval(gameTime)
  }
  timeLeft--
  hourGlass.textContent = 'Time Left: ' + timeLeft;
}, 500);
} 

function nextQuestion (){

}


 



kickStart.addEventListener('click', startQuiz);
