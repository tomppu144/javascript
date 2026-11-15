const rolls = Number(prompt("How many dice rolls?"));
let sum = 0;

for (let i = 0; i < rolls; i++) {
    const result = Math.floor(Math.random() * 6) + 1;
    sum += result;
}

console.log(`Sum of the dice rolls: ${sum}`);