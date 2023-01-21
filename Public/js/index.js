console.log('hello')

const commentSection = document.getElementById("comment-section");
const viewCommentBtn = document.getElementById("view-comment-btn");

commentSection.style.visibility = "hidden";

function showComments() {
    commentSection.style.visibility = "visible";
    viewCommentBtn.textContent = "Hide Comments";
}

function hideComments() {
    if (viewCommentBtn.textContent ===  "Hide Comments")
    {
        commentSection.style.visibility = "hidden";

    }
}


viewCommentBtn.addEventListener('click', showComments)



