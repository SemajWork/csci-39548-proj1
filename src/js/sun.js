// Sun page: open and close the fun facts pop-up

const modal = document.getElementById("sun-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", function () {
    modal.hidden = false;
});

closeButton.addEventListener("click", function () {
    modal.hidden = true;
});
