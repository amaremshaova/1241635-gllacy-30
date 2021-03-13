const authorizationEmailUser = document.querySelector('.authorization-login-input'); 
const authorizationPasswordUser = document.querySelector('.authorization-password-input'); 
const authorizationButton = document.querySelector('.authorization-button'); 
const authorizationForm = document.querySelector('.authorization-form');
const authorizationSection = document.querySelector('.authorization-section'); 


let authorizationIsStorageSupport = true;

try {
    storageEmail = localStorage.getItem('email');
} catch (err) {
    authorizationIsStorageSupport = false;
}

authorizationForm.addEventListener('submit', function (evt) {
    if (!authorizationEmailUser.value || ! authorizationPasswordUser.value) {
        evt.preventDefault();
        authorizationSection.classList.remove('feedback-error');
        authorizationSection.offsetWidth = authorizationSection.offsetWidth;
        authorizationSection.classList.add('feedback-error');
    } else {
        if (authorizationIsStorageSupport) {
            localStorage.setItem('email', authorizationEmailUser.value);
        }
    }
});