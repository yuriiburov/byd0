export function finishForm() {
  const formElement = document.querySelector('.login-form');
  const inputElement = document.createElement('input');

  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('name', 'login');
  document.querySelector('[type="text"]').setAttribute('type', 'password');

  formElement.prepend(inputElement);
}

finishForm();
