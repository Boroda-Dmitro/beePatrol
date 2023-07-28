const bee = document.querySelector('.bee');
const moveInterval = 10;
const directionChangeInterval = 2000; // Інтервал зміни напрямку в мілісекундах (2 сек)

let prevDx = 0;
let prevDy = 0;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const { top, left, width, height } = bee.getBoundingClientRect();

function getRandomDirection() {
  let newDx, newDy;
  do {
    newDx = Math.floor(Math.random() * 3) - 1;
    newDy = Math.floor(Math.random() * 3) - 1;
  } while (newDx === prevDx && newDy === prevDy);
  prevDx = newDx;
  prevDy = newDy;
  return { newDx, newDy };
}

function moveBee() {
  let newTop = top + prevDx;
  let newLeft = left + prevDy;
  let dx = 0;
  let dy = 0;
  setInterval(() => {
      let { newDx, newDy } = getRandomDirection();
      dx = newDx
      dy = newDy
  }, directionChangeInterval);

  setInterval(() => {
    newTop += dx;
    newLeft += dy;
    bee.style.top = `${newTop}px`;
    bee.style.left = `${newLeft}px`;
  }, moveInterval);
}

moveBee();

