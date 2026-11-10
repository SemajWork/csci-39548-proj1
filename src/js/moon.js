// Moon page: the slider (0-7) picks which phase to show

const phases = [
    { name: "New Moon", lit: "0%" },
    { name: "Waxing Crescent", lit: "25%" },
    { name: "First Quarter", lit: "50%" },
    { name: "Waxing Gibbous", lit: "75%" },
    { name: "Full Moon", lit: "100%" },
    { name: "Waning Gibbous", lit: "75%" },
    { name: "Last Quarter", lit: "50%" },
    { name: "Waning Crescent", lit: "25%" }
];

const slider = document.getElementById("phase-slider");
const phaseName = document.getElementById("phase-name");

function showPhase() {
    const phase = phases[slider.value];
    phaseName.textContent = phase.name + ": " + phase.lit + " lit";
}

slider.addEventListener("input", showPhase);
// show the first phase when the page loads
showPhase();
