function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.createElement("ul");
let result;

do {
    result = rollDice();
    const item = document.createElement("li");
    item.textContent = result;
    list.appendChild(item);
} while (result !== 6);

document.body.appendChild(list);