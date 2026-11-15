if (confirm("Should I calculate the square root?")) {
    const number = Number(prompt("Number"));

    if (number < 0) {
        document.querySelector("#result").textContent =
            "The square root of a negative number is not defined";
    } else {
        const squareRoot = Math.sqrt(number);
        document.querySelector("#result").textContent = `The square root is ${squareRoot}.`;
    }
} else {
    document.querySelector("#result").textContent = "The square root is not calculated.";
}