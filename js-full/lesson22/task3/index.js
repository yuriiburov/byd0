const inputElem = document.querySelector('.text-input');
function inputValue() {
  console.log(inputElem.value);
}
inputElem.addEventListener('change', inputValue);
