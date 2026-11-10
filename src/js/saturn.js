// Saturn page: the slider tilts the rings

const tiltSlider = document.getElementById("tilt-slider");
const ring = document.getElementById("ring");
const tiltText = document.getElementById("tilt-text");

function updateRing() {
    const degrees = tiltSlider.value;
    // squash the ring vertically to make it look tilted (0 degrees = edge-on)
    const squash = Math.max(Math.sin(degrees * Math.PI / 180), 0.02);
    ring.style.transform = "translate(-50%, -50%) rotate(-20deg) scaleY(" + squash + ")";
    tiltText.textContent = "Tilt: " + degrees + "°";
}

tiltSlider.addEventListener("input", updateRing);
updateRing();
