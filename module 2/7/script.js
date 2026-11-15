function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("Sides of dice?"));
const list = document.createElement("ul");
let result;

do {
    result = rollDice(sides);
    const item = document.createElement("li");
    item.textContent = result;
    list.appendChild(item);
} while (result !== sides);

document.body.appendChild(list);