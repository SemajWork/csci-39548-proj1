// Home page: show a random space fact when the button is clicked

const facts = [
    "The solar system is about 4.6 billion years old.",
    "The Sun holds about 99.8% of the mass in the solar system.",
    "Sunlight takes about 8 minutes to reach Earth.",
    "A day on Venus is longer than a year on Venus.",
    "Saturn is less dense than water.",
    "Uranus spins on its side."
];

const factText = document.getElementById("fact-text");
const factButton = document.getElementById("fact-button");

factButton.addEventListener("click", function () {
    // pick a random position in the facts list
    const index = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[index];
});
