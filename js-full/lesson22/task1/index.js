// const divElem = document.querySelector('.rect_div');
// const pElem = document.querySelector('.rect_p');
// const spanElem = document.querySelector('.rect_span');
// const clear = document.querySelector('.clear-btn');
// const attachHandlers = document.querySelector('.attach-handlers-btn');
// const removeHandlers = document.querySelector('.remove-handlers-btn');
// const eventsListElem = document.querySelector('.events-list');

// const logTarget = (text, color) => {
//   eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
// };

// const clearList = () => {
//   eventsListElem.innerHTML = '';
// };

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
// const logGreenP = logTarget.bind(null, 'P', 'green');
// const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreyP = logTarget.bind(null, 'P', 'grey');
// const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// const attachHandlersBtn = () => {
//   divElem.addEventListener('click', logGreyDiv, { capture: true });
//   divElem.addEventListener('click', logGreenDiv);

//   pElem.addEventListener('click', logGreyP, true);
//   pElem.addEventListener('click', logGreenP);

//   spanElem.addEventListener('click', logGreySpan, true);
//   spanElem.addEventListener('click', logGreenSpan);
// };

// const removeHandlersBtn = () => {
//   divElem.removeEventListener('click', logGreyDiv, { capture: true });
//   divElem.removeEventListener('click', logGreenDiv);

//   pElem.removeEventListener('click', logGreyP, true);
//   pElem.removeEventListener('click', logGreenP);

//   spanElem.removeEventListener('click', logGreySpan, true);
//   spanElem.removeEventListener('click', logGreenSpan);
// };

// clear.addEventListener('click', clearList);
// attachHandlers.addEventListener('click', attachHandlersBtn);
// removeHandlers.removeEventListener('click', attachHandlersBtn);

// eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;

const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const addBtn = document.querySelector('.attach-handlers-btn');
const eventsListElement = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElement.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clearField = () => {
  eventsListElement.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGrayP = logTarget.bind(null, 'P', 'grey');
const logGraySpan = logTarget.bind(null, 'SPAN', 'grey');

const attachHandlers = () => {
  divElement.addEventListener('click', logGreenDiv);
  pElement.addEventListener('click', logGreenP);
  spanElement.addEventListener('click', logGreenSpan);

  divElement.addEventListener('click', logGreyDiv, true);
  pElement.addEventListener('click', logGrayP, true);
  spanElement.addEventListener('click', logGraySpan, true);
};

const removeHandlers = () => {
  divElement.removeEventListener('click', logGreenDiv);
  pElement.removeEventListener('click', logGreenP);
  spanElement.removeEventListener('click', logGreenSpan);

  divElement.removeEventListener('click', logGreyDiv, true);
  pElement.removeEventListener('click', logGrayP, true);
  spanElement.removeEventListener('click', logGraySpan, true);
};

clearBtn.addEventListener('click', clearField);
removeBtn.addEventListener('click', removeHandlers);
addBtn.addEventListener('click', attachHandlers);

document.addEventListener('DOMContentLoaded', attachHandlers());
