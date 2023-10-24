// let counterValue = 0;


const counterCurrent = document.querySelector('span');

const counterDecrement = document.querySelector('button[data-action="decrement"]');

const counterIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");
let oldcounter = 0; 

counterDecrement.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
   
    console.log("-", counterValue);
});
counterIncrement.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
    
    console.log("+", counterValue);
});

