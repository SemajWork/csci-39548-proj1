// Venus page: show or hide the extra paragraphs

const moreText = document.getElementById("more-text");
const readMoreButton = document.getElementById("read-more");

readMoreButton.addEventListener("click", function () {
    moreText.hidden = !moreText.hidden;
    readMoreButton.textContent = moreText.hidden ? "Read more" : "Read less";
});
