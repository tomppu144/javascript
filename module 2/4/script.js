const numbers = [];
let number;

do {
    number = Number(prompt("Number (0 to stop):"));
    if (number !== 0) {
        numbers.push(number);
    }
} while (number !== 0);

numbers.sort((a, b) => b - a);

for (const value of numbers) {
    console.log(value);
}