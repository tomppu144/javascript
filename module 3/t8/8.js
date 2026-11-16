const firstNumber = document.querySelector('#num1');
const secondNumber = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const result = document.querySelector('#result');

document.querySelector('#start').addEventListener('click', () => {
  const first = Number(firstNumber.value);
  const second = Number(secondNumber.value);
  let answer;

  switch (operation.value) {
    case 'add':
      answer = first + second;
      break;
    case 'sub':
      answer = first - second;
      break;
    case 'multi':
      answer = first * second;
      break;
    case 'div':
      answer = first / second;
      break;
  }

  result.textContent = answer;
});