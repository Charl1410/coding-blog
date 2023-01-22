const commentSection = document.querySelector("#comment-section");
const viewCommentBtns = document.querySelectorAll("#view-comment-btn");
let commentsVisible = false;

// Hides the comments by default
commentSection.style.display = "none";

function showHideComments(e) {
    if(commentsVisible) {
        commentSection.style.display = "none";
        e.target.textContent = "View Comments";
        commentsVisible = false;
    } else {
        commentSection.style.display = "block";
        e.target.textContent = "Hide Comments";
        commentsVisible = true;
    }
}

viewCommentBtns.forEach(function(button) {
    button.addEventListener("click", showHideComments);
});

