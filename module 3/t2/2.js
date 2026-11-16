const target = document.querySelector("#target");
const items = ["First item", "Second item", "Third item"];

for (const [index, text] of items.entries()) {
    const item = document.createElement("li");
    item.textContent = text;

    if (index === 1) {
        item.classList.add("my-item");
    }

    target.appendChild(item);
}