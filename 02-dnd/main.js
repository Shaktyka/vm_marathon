const card = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragOverHandler = (evt) => {
  evt.preventDefault();
};

const dragEnterHandler = (evt) => {
  const target = evt.target;
  target.classList.add('hovered');
};

const dragLeaveHandler = (evt) => {
  const target = evt.target;
  target.classList.remove('hovered');
};

const dropHandler = (evt) => {
  const target = evt.target;
  target.append(card);
  target.classList.remove('hovered');
};

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOverHandler);
  placeholder.addEventListener('dragenter', dragEnterHandler);
  placeholder.addEventListener('dragleave', dragLeaveHandler);
  placeholder.addEventListener('drop', dropHandler);
}

const dragStartHandler = (evt) => {
  const target = evt.target;
  target.classList.add('hold');
  setTimeout(() => target.classList.add('hide'));
};

const dragEndHandler = (evt) => {
  const target = evt.target;
  target.classList.remove('hold', 'hide');
};

card.addEventListener('dragstart', dragStartHandler);

card.addEventListener('dragend', dragEndHandler);
