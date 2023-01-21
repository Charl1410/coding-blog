const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('.create-comment').value.trim();
        console.log(text)

    if (text) {
      const response = await fetch("/api/comments", {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(name, description + "console log 2")

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);