const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector(`input[name="email"]`);
const messageInput = document.querySelector(`textarea[name="message"]`);
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateInput();

form.addEventListener('input', throttle(onHandlerInput, 500));
form.addEventListener('submit', onHandlerSubmit);

function onHandlerInput(evt) {
    evt.preventDefault();
    const user = {
        email: form.email.value,
        message: form.message.value,
    };

    const userString = JSON.stringify(user);
    localStorage.setItem(LOCALSTORAGE_KEY, `${userString}`);
}

function updateInput() {
    let getItemLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!getItemLocalStorage) return;

    let parseItemLocalStorage = JSON.parse(getItemLocalStorage);

    emailInput.value = parseItemLocalStorage.email || '';
    messageInput.value = parseItemLocalStorage.message || '';
}

function onHandlerSubmit(evt) {
    evt.preventDefault();

    if (emailInput.value === '' || messageInput.value === '') {
        return alert('Все поля должны быть заполнены');
    }

    const user = {
        email: evt.currentTarget.email.value,
        message: evt.currentTarget.message.value,
    };

    console.log(user);

    localStorage.clear();
    form.reset();
}