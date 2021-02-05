const { json } = require("sequelize/types");

    const commentButton = document.getElementById('comment-submission');
    const commentField = document.getElementById('comment-field'); // value of this = comment text sumbitted by user
    const commentText = document.getElementById('comment-text'); // this is the text value of a comment
    const { errorHandler } = require('../../utils.js');



commentForm.addEventListener('submit', event => {

    event.preventDefault();

    const commentForm = document.getElementById('comment-form');
    const username = document.getElementById('username');
    
  
    const formData = new FormData(commentForm);
    const comment = formData.get('commentField');
    const body = { comment , username: username.value };
    try {
        res = await fetch('insert comment route', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

    } catch (err) {
        errorHandler(err);
    }
});