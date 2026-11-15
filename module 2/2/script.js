const participantCount = Number(prompt("How many participants?"));
const participants = [];

for (let i = 0; i < participantCount; i++) {
    participants.push(prompt(`Name of participant ${i + 1}:`));
}

participants.sort((a, b) => a.localeCompare(b));

const list = document.createElement("ol");
for (const participant of participants) {
    const item = document.createElement("li");
    item.textContent = participant;
    list.appendChild(item);
}

document.body.appendChild(list);