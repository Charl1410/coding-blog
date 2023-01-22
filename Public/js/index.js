console.log('hello')

const commentSection = document.getElementById("comment-section");
const viewCommentBtn = document.getElementById("view-comment-btn");

commentSection.style.display = "none";

function showComments() {
    if (commentSection.style.display === "none"){
        commentSection.style.display = "block";
        viewCommentBtn.textContent = "Hide comments";
    }

    else {
        commentSection.style.display = "none";
        viewCommentBtn.textContent = "View comments";
    }
    
    
}



viewCommentBtn.addEventListener('click', showComments)



