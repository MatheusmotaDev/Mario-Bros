const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
document.querySelector('.game-over').style.display = 'none';
const restartButton = document.querySelector('.restart-button');
const scoreElement = document.querySelector('#score');
let score = 0;

restartButton.addEventListener('click', () => {
  location.reload(); // Recarrega a página para reiniciar o jogo
});

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const gameOver = () => {
  clearInterval(loop); // Interrompe o loop do jogo
  mario.src = './images/game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';
  document.querySelector('.game-over').style.display = 'block';
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 0 && marioPosition < 80) {
    score++; 
    scoreElement.textContent = score; 
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    gameOver();
  }

}, 10);

document.addEventListener('keydown', jump);
