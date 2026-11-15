function concat(strings) {
    let result = "";
    for (const string of strings) {
        result += string;
    }
    return result;
}

const bandMembers = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#result").textContent = concat(bandMembers);