let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;

//functions

let displayGuessMessage = function(message){
  document.querySelector('.guess-message').textContent = message;
}

let bodyBackgroundColor = function(color){
  document.querySelector('body').style.backgroundColor = color;
}

let questionSize = function(width){
  document.querySelector('.question').style.width = width;
}

let scoreSize = function(score){
  document.querySelector('.score').textContent = score;
}





document.querySelector('.check').addEventListener('click', function() {
  let numberInput = Number(document.querySelector('.number-input').value);
  if (!numberInput) {

    document.querySelector('.guess-message').textContent = 'Enter the number';

  } else if (numberInput === randomNumber) {

    displayGuessMessage('Nice bro') ;
    bodyBackgroundColor('Green') ;
    questionSize('500px');

    document.querySelector('.question').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }


  } else if (numberInput !== randomNumber) {

    if (score > 1) {
      displayGuessMessage(numberInput > randomNumber ? 'Too much!' : 'Too little!') ;
      score--;
      scoreSize( score) ;

    } else {

      displayGuessMessage('Game Over') ;
      scoreSize(0) ;
    }

  }

});

// yeniden bawlayanda

document.querySelector('.again').addEventListener('click', function() {
  bodyBackgroundColor('black') ;
  displayGuessMessage('start guessing');
  questionSize('25rem');
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.question').textContent = '???';
  score = 20;
  scoreSize(score);
  document.querySelector('.number-input').value = '';
});