const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function typewriter(string, element, speed, btn) {
  const pElement = document.createElement('p');
  const span = document.createElement('span');
  span.classList.add('line');
  span.innerHTML = '|';
  pElement.innerHTML = '';
  btn.disabled = true;
  for (let i = 0; i < string.length; i++) {
    pElement.innerHTML += string[i];
    pElement.append(span);
    element.innerHTML = '';
    element.append(pElement);
    await timer(speed);
    if (i !== string.length - 1) {
      span.remove();
    }
  }
  btn.disabled = false;
}

export default typewriter;
