
window.addEventListener("DOMContentLoaded", () =>{
    const { json } = require("sequelize/types");

    const commentButton = document.getElementById('comment-submission');
    const commentField = document.getElementById('comment-field'); // value of this = comment text sumbitted by user
    const commentText = document.getElementById('comment-text'); // this is the text value of a comment
    const { errorHandler } = require('../../utils.js');

    commentButton.addEventListener('click', event => {
    
        // event.preventDefault();
        console.log("SAY SOMETHINGGGG")
        const commentForm = document.getElementById('comment-form');
        const username = document.getElementById('username');
        const commentStuff = document.getElementById('commentField').value
        const commentDiv = document.querySelector('.comments')
        const formData = new FormData(commentForm);
        const comment = formData.get('commentField');
        const body = { comment , username: username.value };
        const id = parseInt(req.params.id);
    
        try {
            res = await fetch(`/story/${id}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
    
            res.forEach((story) => {
                const commentCard =  document.createElement("div").classList.add("comment-card")
                 commentCard.innerHTML= story.comment
                 commentDiv.appendChild(commentCard)
         
         
             })
            
        } catch (err) {
            errorHandler(err);
        }
    
    
    });


})


