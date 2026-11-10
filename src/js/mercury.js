// Mercury page: switch between the day and night temperature

const tempBox = document.getElementById("temp-box");
const tempValue = document.getElementById("temp-value");
const tempButton = document.getElementById("temp-button");

let isDay = true;

tempButton.addEventListener("click", function () {
    isDay = !isDay;

    if (isDay) {
        tempValue.textContent = "Day: 430 °C";
        tempButton.textContent = "Switch to night";
    } else {
        tempValue.textContent = "Night: -180 °C";
        tempButton.textContent = "Switch to day";
    }

    // the "night" class changes the box colors (see mercury.css)
    tempBox.classList.toggle("night");
});
