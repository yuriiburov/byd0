import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './taskGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask).then(() => renderTasks());
};

/**
 * Prepare data
 * Write data to db
 * Read new data from server
 * Save new data to front-end storage
 * Update UI based on new data
 */
