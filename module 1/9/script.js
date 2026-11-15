const number = Number(prompt("Give a number"));

let isPrime = Number.isInteger(number) && number > 1;

for (let divisor = 2; divisor <= Math.sqrt(number) && isPrime; divisor++) {
    if (number % divisor === 0) {
        isPrime = false;
    }
}

const result = isPrime
    ? `${number} is a prime number.`
    : `${number} is not a prime number.`;

document.querySelector("#result").textContent = result;
