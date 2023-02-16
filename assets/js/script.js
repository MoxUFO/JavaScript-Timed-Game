console.log("Linked");

var questionsArr = [
  {
    prompt: "What's my name?",
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
        answer: "Mike",
        correct: false,
      },
    ],
  },
  {
    prompt: "What's my name?",
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
        answer: "Mike",
        correct: false,
      },
    ],
  },
];
var currentIndex;

function startQuiz() {
    currentIndex = 0
  // start the timer
  //hide the start screen
  //unhide the quiz screen
  // displayQuestion()
}

function displayQuestion() {
var currentQuestion = questionsArr[currentIndex]
console.log(currentQuestion)
  // WE want to display ANY QUESTION with this function
  // We can empty the quiz-screen container
  //create an html element
  // style or add class to the element
  //populate the text content
  //append it (if you have to target where to append it, do so)

  //WE're going to have to create buttons for each choice and add an event listener
  //When they click it, you want to check answer!
}

function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.log(this)
    console.log(event.target)

// You want to check if the answer is correct or not


// Do we just want to automatically move to the next question?
// Do we have more questions to show?
//if we do, then move the current Index up and displayQuestion()
//iof you don't then you want to call endQuiz()


}
