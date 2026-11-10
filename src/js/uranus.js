// Uranus page: how old would you be on Uranus?
// one year on Uranus is about 84 Earth years

const ageInput = document.getElementById("age-input");
const ageButton = document.getElementById("age-button");
const ageResult = document.getElementById("age-result");

ageButton.addEventListener("click", function () {
    const earthAge = Number(ageInput.value);

    // only accept a positive number
    if (earthAge <= 0) {
        ageResult.textContent = "Please enter your age.";
        return;
    }

    const uranusAge = (earthAge / 84).toFixed(2);
    ageResult.textContent = "On Uranus you would be " + uranusAge + " years old!";
});
