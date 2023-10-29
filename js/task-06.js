const inputText = document.querySelector(`#validation-input`);

const inputLength = inputText.getAttribute('data-length');

inputText.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === inputLength) {
         inputText.classList.add('valid');
        inputText.classList.remove('invalid');
        
    } else {
        inputText.classList.add('invalid');
      
    }   
})