let startSection = document.getElementById("start-screen");
let viewScores = document.getElementById("score-button");
let homeScreen = document.getElementById("go-home-btn");
let scoreReset = document.getElementById("reset-score");
let scoreList = document.getElementById("list-parent");
let highScores = document.getElementById("score-screen");
let quizSection = document.getElementById("quiz-screen");
let endGame = document.getElementById("end-screen");
let hourGlass = document.getElementById("countdown");
let kickStart = document.getElementById("start-quiz");
let playCard = document.querySelectorAll("section");
let questionField = document.getElementById("question");
let allAnswer = document.getElementById("answers");
let buttonNumOne = document.getElementById("btn-1");
let buttonNumTwo = document.getElementById("btn-2");
let buttonNumThree = document.getElementById("btn-3");
let buttonNumFour = document.getElementById("btn-4");
let playerInput = document.getElementById("player");
let submitScore = document.getElementById("submit-score");
let timeLeft = 75;
let i = 0;
let scores =[]
let questionsArr = [
  {
    question: "What does '===' represent?",
    choices: [
      {
        answer: "Strictly Equal",
        correct: true,
      },
      {
        answer: "some what equal",
        correct: false,
      },
      {
        answer: "triple equal",
        correct: false,
      },
      {
        answer: "anit-equal",
        correct: false,
      },
    ],
    correctAnswer: "Strictly Equal",
  },
  {
    question: "what method is used to take an item out the end of an array?",
    choices: [
      {
        answer: ".drop()",
        correct: true,
      },
      {
        answer: ".lastOut()",
        correct: false,
      },
      {
        answer: ".pop()",
        correct: false,
      },
      {
        answer: ".unshift()",
        correct: false,
      },
    ],
    correctAnswer: ".pop()",
  },
  {
    question:
      "what is the name of the data type that returns a value of true or false?",
    choices: [
      {
        answer: "Lie detector",
        correct: true,
      },
      {
        answer: "Boolean",
        correct: false,
      },
      {
        answer: "thruthyAndFalsy",
        correct: false,
      },
      {
        answer: "balloon",
        correct: false,
      },
    ],
    correctAnswer: "Boolean",
  },
  {
    question: "which is NOT a way to declarea varible",
    choices: [
      {
        answer: "let",
        correct: true,
      },
      {
        answer: "const",
        correct: false,
      },
      {
        answer: "var",
        correct: false,
      },
      {
        answer: "this",
        correct: false,
      },
    ],
    correctAnswer: "this",
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
    correctAnswer: "Before the closing body tag",
  },
];
hourGlass.textContent = "Time Left: " + timeLeft;

function startQuiz(event) {
  event.preventDefault();
  gameClock();
  showQuestion();
}

function showQuestion() {
  startSection.classList.add("hide");
  viewScores.classList.add("hide");
  quizSection.classList.remove("hide");
  let questionPresented = questionsArr[i].question;
  questionField.textContent = questionPresented;

  let answerOnePresented = questionsArr[i].choices[0].answer;
  buttonNumOne.textContent = answerOnePresented;
  let answerTwoPresented = questionsArr[i].choices[1].answer;
  buttonNumTwo.textContent = answerTwoPresented;
  let answerThreePResented = questionsArr[i].choices[2].answer;
  buttonNumThree.textContent = answerThreePResented;
  let answerFourPresented = questionsArr[i].choices[3].answer;
  buttonNumFour.textContent = answerFourPresented;
}

allAnswer.addEventListener("click", function (event) {
  let userPick = event.target.textContent;
  // console.log(userPick)

  if (userPick !== questionsArr[i].correctAnswer) {
    console.log("wrong");
    timeLeft = timeLeft - 20;
    if (timeLeft <= 0) {
      timeLeft.textContent = " time left: 0 ";
      quizSection.classList.add("hide");
      endGame.classList.remove("hide");
    }
  } else {
    nextQuestion();
  }
});

function gameClock() {
  gameTime = setInterval(function () {
    if (timeLeft <= 1) {
      clearInterval(gameTime);
    }
    if (i === 4) {
      clearInterval(gameTime);
    }
    timeLeft--;
    hourGlass.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0 && i < 4) {
      console.log(" you stink");
      hourGlass.textContent = "Time Left : 0";
      quizSection.classList.add("hide");
      endGame.classList.remove("hide");
    }
  }, 1000);
}

function nextQuestion() {
  if (i === 4) {
    console.log("done");
    quizSection.classList.add("hide");
    endGame.classList.remove("hide");
    // console.log(timeLeft)
  } else {
    i++;
    showQuestion();
  }
}
let j = 0;
var keptScores = JSON.parse(localStorage.getItem("Playerscore"));
// console.log(keptScores)
for (let i = 0; i < keptScores.length; i++) {
 console.log(keptScores[i].score)
 
let scoreListItems = document.createElement('li')
scoreListItems.textContent = keptScores[i].name + ':' + keptScores[i].score
scoreList.appendChild(scoreListItems) 
console.log()
}

submitScore.addEventListener("click", function () {
  // console.log();
  let playerScore = timeLeft;
 
  let storedScores = JSON.parse(localStorage.getItem('Playerscore'))
  console.log(storedScores)
  if(!storedScores){
    storedScores = []
  }
  let playerName = document.querySelector("#player").value;
  // console.log(playerName)
  // //localStorage.setItem(playerName, playerScore);
  // localStorage.setItem("playerName", playerName);
  // localStorage.setItem("playerscore", playerScore);
  var value ={ name: playerName,score: playerScore}
  storedScores.push(value)
localStorage.setItem("Playerscore", JSON.stringify(storedScores));

  j++;
  i = 0;
  endGame.classList.add("hide");
  startSection.classList.remove("hide");
  viewScores.classList.remove("hide");
  timeLeft = 75;
  hourGlass.textContent = " Time Left: " + timeLeft;
});



// let topPlayer = localStorage.getItem();
// console.log(topPlayer);
// let topScore = localStorage.getItem("playerscore");
// let PlayersMark = topPlayer + " " + topScore;

let score1 = document.createElement("li");
let score2 = document.createElement("li");
let score3 = document.createElement("li");
let score4 = document.createElement("li");
let score5 = document.createElement("li");
// console.log(PlayersMark);

scoreReset.addEventListener("click", function (event) {
  event.preventDefault
  localStorage.clear('Playerscore');
});

viewScores.addEventListener("click", function () {
  startSection.classList.add("hide");
  highScores.classList.remove("hide");
});

homeScreen.addEventListener("click", function () {
  highScores.classList.add("hide");
  startSection.classList.remove("hide");
});


kickStart.addEventListener("click", startQuiz);
