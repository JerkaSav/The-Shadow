const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function typewriter(string, element, speed, btn) {
  // Create element
  const pElement = document.createElement('p');

  // Create element for blinking line
  const span = document.createElement('span');
  // Adds the class .line to the span element
  span.classList.add('line');

  // Adds the line that will show
  span.innerHTML = '|';

  // reset the p elements content to nothing
  pElement.innerHTML = '';

  // hide button
  btn.disabled = true;

  //loop trought every index of the string
  for (let i = 0; i < string.length; i++) {
    // add the letter to the p element
    pElement.innerHTML += string[i];
    // and append the blinking line
    pElement.append(span);
    // reset the p elements parent to make sure nothing is typed twice
    element.innerHTML = '';
    // add the new p element with content to the parent element
    element.append(pElement);
    // make the loop slower for typewriter effect
    await timer(speed);
    // to make sure that the blinking line is not staying in the DOM and only renders
    // after the last letter. And makes sure that the line is left when the typewriter is done
    if (i !== string.length - 1) {
      span.remove();
    }
  }
  // show button
  btn.disabled = false;
}

export default typewriter;
