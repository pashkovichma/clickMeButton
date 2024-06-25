const button = document.getElementById('clickMeButton');

function getRandomWidth() {
  const randomWidth = Math.random() * (window.innerWidth - button.offsetWidth);
  return randomWidth;
}

function getRandomHeight() {
  const randomHeight = Math.random() * (window.innerHeight - button.offsetHeight);
  return randomHeight;
}

function moveMe() {
  const x = getRandomWidth();
  const y = getRandomHeight();
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

button.addEventListener('mouseover', () => {
  if (Math.random() < 0.5) {
    moveMe();
  }
});

button.addEventListener('click', () => {
  moveMe();
});
