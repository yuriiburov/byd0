// create generatorId
// add dataset id for each obj in tasks(array)
// create task and render agin
// add click event for checkboxes

const createId = () => Math.random().toFixed(2) * 100;
const tasks = [
  { text: 'Buy milk', done: false, id: createId() },
  { text: 'Pick up Tom from airport', done: false, id: createId() },
  { text: 'Visit party', done: false, id: createId() },
  { text: 'Visit doctor', done: true, id: createId() },
  { text: 'Buy meat', done: true, id: createId() },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.dataset.id = id;

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');

function createTask() {
  listElem.innerHTML = '';

  if (input.value !== '') {
    tasks.unshift({ text: input.value, done: false, id: createId() });
  }

  input.value = '';
  renderTasks(tasks);
}

button.addEventListener('click', createTask);

function doneTask(event) {
  const elemId = event.target.dataset.id;
  if (tasks.find((task) => Number(task.id) === Number(elemId)).done) {
    tasks.find((task) => Number(task.id) === Number(elemId)).done = false;
  } else {
    tasks.find((task) => Number(task.id) === Number(elemId)).done = true;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
}

listElem.addEventListener('click', doneTask);
