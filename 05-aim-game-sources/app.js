const board = document.querySelector('#board');
const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeElem = document.querySelector('#time');

let gameTime = 0;
let timerId = null;
let score = 0;

// Генерирует случайное число между min и max:
const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Прописывает оставшееся время в элемент:
const setTime = (val) => {
  timeElem.textContent = `00:${val}`;
};

// Конец игры:
const finishGame = () => {
  clearInterval(timerId);
  timeElem.parentNode.classList.add('hide');
  board.innerHTML = `<div class="reload">
    <h1>Cчёт: <span class="primary">${score}</span></h1>
    <button class="reload-btn" type="button">Начать заново</button>
    </div>`;
  const reloadBtn = document.querySelector('.reload-btn');
  reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

// Уменьшает текущее время на секунду:
const decreaseTime = () => {
  if (gameTime === 0) {
    finishGame();
  } else {
    let current = --gameTime;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

// Выбор рандомного цвета:
const getRandomColor = () => {
  const color = `rgb(
    ${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)}
  )`;
  return color;
};

const createRandonCircle = () => {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const {width, height} = board.getBoundingClientRect();

  const size = randomInteger(10, 30);
  const x = randomInteger(0, width - size);
  const y = randomInteger(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  circle.style.backgroundColor = getRandomColor(); 

  board.append(circle);
};

// Запуск игры
const startGame = () => {
  timerId = setInterval(decreaseTime, 1000);
  setTime(gameTime);
  createRandonCircle();
};

// Вешает слушатель на доску:
board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++;
    evt.target.remove();
    createRandonCircle();
  }
});

// Вешает обработчик на контейнер с кнопками времени:
timeList.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.classList.contains('time-btn')) {
    gameTime = +target.dataset.time;
    screens[1].classList.add('up');
    startGame();
  }
});

// Вешает обработчик на кнопку начала игры:
startBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  screens[0].classList.add('up');
});
