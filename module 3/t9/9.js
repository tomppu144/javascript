const calculationInput = document.querySelector('#calculation');
const result = document.querySelector('#result');

document.querySelector('#start').addEventListener('click', () => {
  const calculation = calculationInput.value.replace(/\s+/g, '');
  const match = calculation.match(/^(-?\d+)([+\-*/])(-?\d+)$/);

  if (!match) {
    result.textContent = 'Enter a calculation such as 3+5.';
    return;
  }

  const first = Number(match[1]);
  const operator = match[2];
  const second = Number(match[3]);
  let answer;
  if (operator === '+') {
    answer = first + second;
  } else if (operator === '-') {
    answer = first - second;
  } else if (operator === '*') {
    answer = first * second;
  } else {
    if (second === 0) {
      result.textContent = 'Cannot divide by zero.';
      return;
    }
    answer = first / second;
  }

  result.textContent = answer;
});