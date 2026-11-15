const numbers = [];

while (true) {
    const number = Number(prompt("Number:"));

    if (numbers.includes(number)) {
        alert("Already given. The program will stop.");
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => a - b);
console.log(numbers);