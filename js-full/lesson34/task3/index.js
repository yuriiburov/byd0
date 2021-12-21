const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/users';

const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const onValidForm = () => {
  submitButton.disabled = !loginForm.reportValidity();
};

const userData = (formData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

const onCreateUser = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(loginForm));
  userData(formData)
    .then((response) => response.json())
    .then((dataOfUser) => alert(JSON.stringify(dataOfUser)));
  loginForm.reset();
  submitButton.disabled = true;
};

submitButton.addEventListener('keyup', onCreateUser);
loginForm.addEventListener('input', onValidForm);
