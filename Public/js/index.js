console.log('hi')

const commentSection = document.querySelector("#comment-section");
const viewCommentBtns = document.querySelectorAll("#view-comment-btn");
let commentsVisible = false;

function showHideComments(e) {
    if(commentsVisible) {
        commentSection.style.display = "none";
        e.target.textContent = "View Comments";
        commentsVisible = false;
    } else {
        commentSection.style.display = "block";
        e.target.textContent = "Hide Comments";
        commentsVisible = true;
    }}

viewCommentBtns.forEach(function(button) {
    button.addEventListener("click", showHideComments);
});

