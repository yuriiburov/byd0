const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/users';

// find elem
const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

/**
 * check form
 * if form valid - change disabled
 */
const onValidForm = () => {
  submitButton.disabled = !loginForm.reportValidity();
};

/**
 * creating promise with method 'POST'
 * transform data (obj) to str
 */
const userData = (formData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

/**
 * preparing data
 * send form's data to the server
 * show data in the window
 */
const onCreateUser = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(loginForm));
  userData(formData)
    .then((response) => response.json())
    .then((dataOfUser) => {
      alert(JSON.stringify(dataOfUser));
      loginForm.reset();
      submitButton.disabled = true;
    });
};

loginForm.addEventListener('submit', onCreateUser);
loginForm.addEventListener('input', onValidForm);
