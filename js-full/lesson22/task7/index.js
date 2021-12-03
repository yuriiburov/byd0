const button = document.querySelectorAll('.btn');

const clickBtn = (event) => console.log(event.target.textContent);

button[0].addEventListener('click', clickBtn);
button[1].addEventListener('click', clickBtn);
