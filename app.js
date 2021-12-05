const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const ResetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const WinningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let WinningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === WinningScore) {
      ResetButton.disabled = false;
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === WinningScore) {
      ResetButton.disabled = false;
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
    }

    p2Display.textContent = p2Score;
  }
})


ResetButton.addEventListener('click', rest);

WinningScoreSelect.addEventListener('change', function () {
  WinningScore = parseInt(this.value);
  rest();
})


function rest() {
  ResetButton.disabled = true;
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
}

