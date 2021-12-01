function createButton(buttonText) {
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  document.body.append(newButton);
}

createButton('buttonText');
