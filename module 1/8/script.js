const first_year = Number(prompt("Enter the first year:"));
const second_year = Number(prompt("Enter the second year:"));

const startYear = Math.min(first_year, second_year);
const endYear = Math.max(first_year, second_year);
const list = document.createElement("ul");

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        const item = document.createElement("li");
        item.textContent = year;
        list.appendChild(item);
    }
}

document.body.appendChild(list);
