const generateNumbersRange = (from, to) => {
  const arr = [];
  for (let i = from; i <= to; i += 1) {
    arr.push(i);
  }
  return arr;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div class="sector__line" data-line-number="${lineNumber}">${seatsString}</div>`
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>`
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const curentSeatNumber = event.target.dataset.seatNumber;
  const curentLineNumber =
    event.target.closest('.sector__line').dataset.lineNumber;
  const curentSectorNumber =
    event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${curentSectorNumber} - L ${curentLineNumber} - S ${curentSeatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
