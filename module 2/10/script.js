const candidateCount = Number(prompt("How many candidates?"));
const candidates = [];

for (let i = 0; i < candidateCount; i++) {
    const name = prompt(`Name for candidate ${i + 1}`);
    candidates.push({ name, votes: 0 });
}

const voterCount = Number(prompt("How many voters?"));

for (let i = 0; i < voterCount; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you vote for?`);
    if (vote === null || vote.trim() === "") {
        continue;
    }

    const candidate = candidates.find(
        (item) => item.name.toLowerCase() === vote.trim().toLowerCase()
    );
    if (candidate) {
        candidate.votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates.length > 0) {
    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
    console.log("results:");
    for (const candidate of candidates) {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    }
}