const dice = Number(prompt("Enter the number of dice:"));
const targetSum = Number(prompt("Enter the desired sum:"));

const rolls = 10000;
let success = 0;

for (let i = 0; i < rolls; i++) {
    let sum = 0;

    for (let j = 0; j < dice; j++) {
        let eye = Math.floor(Math.random() * 6) + 1;
        sum += eye;
    }

    if (sum === targetSum) {
        success++;
    }
}

const probability = (success / rolls) * 100;

document.querySelector("#result").innerHTML =
    `Probability to get sum ${targetSum} with ${dice} dice is ${probability.toFixed(2)}%`;