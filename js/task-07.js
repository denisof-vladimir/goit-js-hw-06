const nameInput = document.querySelector(`#font-size-control`);
console.log(nameInput);
const spanText = document.querySelector("#text");
console.log(spanText);


nameInput.addEventListener(`input`, () => {
    const inputFontSize = nameInput.value +"px";
    console.log(inputFontSize); 
    spanText.style.fontSize = inputFontSize;

})
