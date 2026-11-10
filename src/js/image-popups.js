// Every page: clicking a picture shows 3 messages in a pop-up,
// then goes to the page the picture came from (its data-source)

const popupMessages = [
    "Whoa, you're about to leave this tab...",
    "Calculating orbit to the image source...",
    "Bye! Launching you there now!"
];

// build the pop-up box once (styled by .modal in style.css)
const popup = document.createElement("div");
popup.className = "modal";
popup.hidden = true;
popup.innerHTML = '<div class="modal-box"><p></p></div>';
document.body.appendChild(popup);

const popupText = popup.querySelector("p");

document.querySelectorAll(".images img").forEach(function (image) {
    image.addEventListener("click", function () {
        popup.hidden = false;

        // change the message every second
        popupMessages.forEach(function (message, i) {
            setTimeout(function () {
                popupText.textContent = message;
            }, i * 1000);
        });

        // after the last message, go to the image's source page
        setTimeout(function () {
            window.location.href = image.dataset.source;
        }, popupMessages.length * 1000);
    });
});
