const throttle = require('lodash.throttle');
const inputVar = localStorage.getItem('feedback-form-state');
const parsedInputVar = JSON.parse(localStorage.getItem('feedback-form-state'));
const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('input[name ="email"]');
const messageInputRef = document.querySelector('textarea[name ="message"]');
// console.log(parsedInputVar);
// console.log(emailInputRef);

const formInputStorage = {
  email: '',
  message: '',
};

if (typeof inputVar !== 'undefined' && inputVar !== null) {
  emailInputRef.value = parsedInputVar.email;
  messageInputRef.value = parsedInputVar.message;
} else {
  emailInputRef.value = '';
  messageInputRef.value = '';
}

const onFormChanged = event => {
  if (event.target.name === 'email') {
    formInputStorage.email = event.target.value;
  } else if (event.target.name === 'message') {
    formInputStorage.message = event.target.value;
  }
  //   console.log(formInputStorage);
  localStorage.setItem('feedback-form-state', JSON.stringify(formInputStorage));
};

const onFormSubmited = event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
};

formRef.addEventListener('input', onFormChanged);
formRef.addEventListener('submit', onFormSubmited);
