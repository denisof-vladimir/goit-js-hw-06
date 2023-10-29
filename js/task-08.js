const logForm = document.querySelector(`.login-form`);
logForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(logForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log(formObject);
    if (!formObject.email || !formObject.password) {
        alert("Заполни все поля!!!");
        return;
    } 
     
    logForm.reset();
})
    
