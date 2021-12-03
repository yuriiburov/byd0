const check = document.querySelector('.task-status');

function checked(event) {
  console.log(event.target.checked);
}

check.addEventListener('change', checked);
