function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = document.querySelector('[data-create]');
const destroyBox = document.querySelector('[data-destroy]');
const quantityBoxes = document.querySelector('#controls > input');
const containerBox = document.querySelector('#boxes');

createBox.addEventListener('click', makeBoxes);
destroyBox.addEventListener('click', eraseBoxes);

function makeBoxes(amount) {
  amount = Number(quantityBoxes.value);
  const hasBoxes = containerBox.children;

  let makeString = '';
  let startSize = 30 + hasBoxes.length * 10;

  for (let i = 1; i <= amount; i += 1) {  
      makeString += `<div style='background-color: ${getRandomHexColor()};
         width: ${startSize}px;
         height: ${startSize}px'></div>`;
    startSize +=  10;
    }
  
  containerBox.insertAdjacentHTML('beforeend', makeString);
  quantityBoxes.value = '';


}

function eraseBoxes() {
  quantityBoxes.value = '';
  containerBox.innerHTML = '';
}

