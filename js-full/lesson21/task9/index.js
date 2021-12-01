export function finishList() {
  const ulElement = document.querySelector('.list');
  const specElement = document.querySelector('.list > .special');

  const liFirst = document.createElement('li');
  liFirst.textContent = 1;
  ulElement.prepend(liFirst);

  const liFourth = document.createElement('li');
  liFourth.textContent = 4;
  specElement.before(liFourth);

  const liSixth = document.createElement('li');
  liSixth.textContent = 6;
  specElement.after(liSixth);

  const liEighth = document.createElement('li');
  liEighth.textContent = 8;
  ulElement.append(liEighth);
}

finishList();
