const feedbackLink = document.querySelector(".contacts-feedback-button");
const feedback = document.querySelector(".feedback-section");
const modalWindow = document.querySelector(".feedback-modal-window");
const closeButton = document.querySelector(".feedback-exit-button");
const nameUser = document.querySelector(".feedback-name-input");
const emailUser = document.querySelector(".feedback-email-input");
const form = document.querySelector(".feedback-form");
const textUser = document.querySelector(".feedback-text-textarea");

let isStorageSupport = true;
let storage = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    feedback.classList.add("feedback-show");
    modalWindow.classList.add("feedback-modal-show");

    if (storageName && storageEmail) {
        nameUser.value = storageName;
        emailUser.value = storageEmail;
        textUser.focus();
    } else {
        nameUser.focus();
    }
});

closeButton.addEventListener("click", function () {
    feedback.classList.remove("feedback-show");
    feedback.classList.remove("feedback-error");
    modalWindow.classList.remove("feedback-modal-show")
});

form.addEventListener("submit", function (evt) {
    if (!nameUser.value || !emailUser.value || !textUser.value) {
        evt.preventDefault();
        feedback.classList.remove("feedback-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameUser.value);
            localStorage.setItem("email", emailUser.value);
        }
    }
});