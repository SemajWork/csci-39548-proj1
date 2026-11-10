// Earth page: one-question quiz
// each answer button has data-correct="true" or "false" in the HTML

const answerButtons = document.querySelectorAll(".answer");
const feedback = document.getElementById("quiz-feedback");

answerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.dataset.correct === "true") {
            feedback.textContent = "Correct! About 71% of Earth is covered by water.";
        } else {
            feedback.textContent = "Not quite, try again!";
        }
    });
});
