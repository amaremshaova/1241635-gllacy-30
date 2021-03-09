const emailUser = document.querySelector('.authorization-login-input'); 
const passwordUser = document.querySelector('.authorization-password-input'); 
const loginButton = document.querySelector('.authorization-button'); 
const form = document.querySelector('.authorization-form');
const authorization = document.querySelector('.authorization-section'); 

let isStorageSupport = true;
let storage = '';

try {
    storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

loginButton.addEventListener('click', function(evt){
    evt.preventDefault();
    if (storageEmail) {
        emailUser.value = storageEmail;
        passwordUser.focus(); 
    }
    else {
        emailUser.focus();
    }
});

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!emailUser.value || !passwordUser.value) {
        evt.preventDefault();
        authorization.classList.add('feedback-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('email', emailUser.value);
        }
    }
});