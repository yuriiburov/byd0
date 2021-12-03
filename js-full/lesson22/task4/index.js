const taskStatus = document.querySelector('.task-status');

function bool() {
  console.log(taskStatus.checked);
}

taskStatus.addEventListener('change', bool);
