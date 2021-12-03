const button = document.querySelector('.single-use-btn');

const onceClick = () => {
  console.log('clicked');
  button.removeEventListener('click', onceClick);
};

button.addEventListener('click', onceClick);
