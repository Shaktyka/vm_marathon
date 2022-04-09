const board = document.querySelector('#board');
const SQUARES_NUMBER = 460;
const INITIAL_COLOR = '#1d1d1d';
const INITIAL_BOX_SHADOW = '0 0 2px #000';
const SQUARE_CLASS = 'square';

// Генерирует случайное число между min и max:
const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Выбор рандомного цвета:
const getRandomColor = () => {
  const color = `rgb(
    ${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)}
  )`;
  return color;
};

// Удаление цвета:
const removeColor = (el) => {
  const color = INITIAL_COLOR;
  el.style.backgroundColor = color;
  el.style.boxShadow = INITIAL_BOX_SHADOW;
};

// Установка цвета:
const setColor = (el) => {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// Обработчик наведения на квадратик:
const boardMouseoverHandler = (evt) => {
  const target = evt.target;
  if (target.classList.contains(SQUARE_CLASS)) {
    setColor(target);
  }
};

// Обработчик отведения курсора с квадратика:
const boardMouseoutHandler = (evt) => {
  const target = evt.target;
  if (target.classList.contains(SQUARE_CLASS)) {
    removeColor(target);
  }
};

// Герерирует доску с квадратиками:
const generateBoard = () => {
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add(SQUARE_CLASS);
    board.append(square);
  }

  board.addEventListener('mouseover', boardMouseoverHandler);

  board.addEventListener('mouseout', boardMouseoutHandler);
};

generateBoard();
