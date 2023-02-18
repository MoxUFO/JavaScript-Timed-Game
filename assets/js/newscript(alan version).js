let startSection = document.getElementById('start-screen')
let quizSection =document.getElementById('quiz-screen')
let hourGlass = document.getElementById('countdown')
let kickStart = document.getElementById('start-quiz')
let playCard =document.querySelectorAll('section')
let questionField = document.getElementById('question')
let buttonNumOne = document.getElementById('btn-1')
let buttonNumTwo = document.getElementById('btn-2')
let buttonNumThree = document.getElementById('btn-3')
let buttonNumFour = document.getElementById('btn-4')
let timeLeft;
let qindex = 0
// console.log(playCard)
let questionsArr = [
 {
    question: "What's my name?",
    choices: ['nelson', 'kev', 'tommy', 'dave'],
      answer:'0'
  },
  {
    questio: "What's my name?",
    choices: [ 'nelson', 'kev', 'tommy', 'dave'],
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
  },
  {
    question: "?",
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
  },
  
];
function getrQuestion (){
  questionF.textContent = questionsArr[qindex].question
}

function checkAnswer(event){
  let userAnswer = event.target.id
  if (userAnswer === questionsArr.answer){
    answer.textContent = 'correct';
    
  } else {
    answer.textContent = 'incorrect';
  }
}


console.log(questionsArr[4].choices[1])
 for ( let i = 0; i < questionsArr.length;i++ ) {
  // console.log(questionsArr[i])
  if (questionsArr[i]===questionsArr[0]){
    // console.log(questionsArr[i].question)
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

    // console.log(questionsArr[3].choices[1].correct)


  }


  
 }








 function startQuiz(event){
  event.preventDefault()
    gameClock()
    startSection.classList.add('hide')
    quizSection.classList.remove('hide')



 
    



}





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


 



kickStart.addEventListener('click', startQuiz);