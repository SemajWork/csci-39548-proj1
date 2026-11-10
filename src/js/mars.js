// Mars page: start and stop the moons orbiting
// the orbit itself is a CSS animation; the "paused" class freezes it (see mars.css)

const orbitSystem = document.getElementById("orbit-system");
const orbitButton = document.getElementById("orbit-button");

orbitButton.addEventListener("click", function () {
    orbitSystem.classList.toggle("paused");
    orbitButton.textContent = orbitSystem.classList.contains("paused") ? "Start" : "Stop";
});
