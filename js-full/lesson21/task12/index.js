export function squaredNumbers() {
  [...document.querySelectorAll('.number')].forEach((el) => {
    // eslint-disable-next-line no-restricted-properties
    el.setAttribute('squared-number', Math.pow(el.dataset.number, 2));
  });
}

squaredNumbers();
