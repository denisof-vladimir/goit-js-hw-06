function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const printColor = document.querySelector(`.color`);

const buttonColor = document.querySelector(`.change-color`);

buttonColor.addEventListener(`click`, () => {
 const myBody = document.querySelector(`body`);   
    
  const newBackGround = getRandomHexColor();
  
  printColor.textContent = newBackGround;

 myBody.style.backgroundColor = newBackGround;
})