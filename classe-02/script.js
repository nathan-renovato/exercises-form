const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const form = document.querySelector('form');

const checkPassword = (event) => {
    if (password.value !== passwordConfirmation.value) {
        event.preventDefault();
    }
};

form.addEventListener('submit', checkPassword);