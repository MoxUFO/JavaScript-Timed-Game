let hourGlass = document.getElementById('countdown')
let kickStart = document.getElementById('start-quiz')
let timeLeft;
function startQuiz(){
    gameClock()
    
    
}





function gameClock() {
    timeLeft =  10;

    gameTime = setInterval(function(){
  if (timeLeft <= 1){
    clearInterval(gameTime)
  }
  timeLeft--
  hourGlass.textContent = 'Time Left: ' + timeLeft;
}, 1000);
} 


 



kickStart.addEventListener('click', startQuiz);