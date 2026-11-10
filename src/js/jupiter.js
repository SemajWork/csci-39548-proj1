// Jupiter page: "What would you weigh on Jupiter?" calculator
// Jupiter's gravity is about 2.53 times Earth's

const JUPITER_GRAVITY = 2.53;

const weightInput = document.getElementById("weight-input");
const weightButton = document.getElementById("weight-button");
const weightResult = document.getElementById("weight-result");

weightButton.addEventListener("click", function () {
    const earthWeight = Number(weightInput.value);

    // only accept a positive number
    if (earthWeight <= 0) {
        weightResult.textContent = "Please enter a weight greater than 0.";
        return;
    }

    const jupiterWeight = (earthWeight * JUPITER_GRAVITY).toFixed(1);
    weightResult.textContent = "On Jupiter you would weigh " + jupiterWeight + "!";
});
