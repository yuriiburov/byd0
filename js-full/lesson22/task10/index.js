const buttons = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.textContent);
}

buttons[0].addEventListener('click', handleClick);
buttons[1].addEventListener('click', handleClick);
buttons[2].addEventListener('click', handleClick);
