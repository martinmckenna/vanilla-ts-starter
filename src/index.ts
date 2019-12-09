import './styles/index.css'

(() => {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello world';
  document.body.appendChild(element);
})()

