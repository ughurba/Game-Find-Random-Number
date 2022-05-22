let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;


document.querySelector('.check').addEventListener('click', function() {
  let numberInput = Number(document.querySelector('.number-input').value);
  if (!numberInput) {
    document.querySelector('.guess-message')
      .textContent = 'Enter the number';
  } else if (numberInput === randomNumber) {

    document.querySelector('.guess-message')
      .textContent = 'Nice bro';
    document.querySelector('body')
      .style
      .backgroundColor = 'Green';
    document.querySelector('.question')
      .style
      .width = '500px';
    document.querySelector('.question')
      .textContent = randomNumber;

    if(score > highScore){
      highScore = score
      document.querySelector('.highscore')
        .textContent = highScore;
    }


  }else if (numberInput !== randomNumber){

    if (score > 1) {
      document.querySelector('.guess-message')
        .textContent = numberInput > randomNumber ? 'Too much!' : 'Too little!'
      score--;
      document.querySelector('.score').textContent = score;

    } else {

      document.querySelector('.guess-message')
        .textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }

  }


});

// yeniden bawlayanda

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess-message')
    .textContent = 'start guessing';
  document.querySelector('.question').style.width = '25rem';
   randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.question').textContent = '???';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});