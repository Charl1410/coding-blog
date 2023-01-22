console.log('hello')
//getting all the comment sections
const commentSection = document.querySelectorAll("#comment-section");
//getting all the comment buttons 
const viewCommentBtn = document.querySelectorAll("#view-comment-btn");

//commentSection.style.display = "none";

function showHideComments(e) {
    console.log('working')
//targetting the specific button click 
    if (e.target){
        //working 
        console.log('target')
        commentSection.style.display === "none";
        // commentSection.style.display = "block";
        viewCommentBtn.textContent = "Hide comments";
    }

    else {
        commentSection.style.display = "none";
        viewCommentBtn.textContent = "View comments";
    }
    
    
}

//QS on all of the buttons on click running the showHide comments function 
const buttonListen = document.querySelectorAll("#view-comment-btn");
buttonListen.forEach((button) => {
    button.addEventListener('click', showHideComments);
})





