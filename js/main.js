const myForm = document.querySelector('#my-form'),
    nameInput = document.querySelector('#name');

myForm.addEventListener('submit', clickSubmit);
function clickSubmit(e) {
    e.preventDefault();

    alert(nameInput.value);
}