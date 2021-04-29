// import { json } from "sequelize/types";

window.addEventListener("DOMContentLoaded", async () =>{

    const commentButton = document.getElementById('comment-button');
    const commentField = document.getElementById('comment-field'); // value of this = comment text sumbitted by user
    const commentText = document.getElementById('comment-text'); // this is the text value of a comment
    const likesText = document.querySelector('.likes_container .like_comment_text')
    const baconButton = document.querySelector('.likes_container .bacon-button')
    // const { errorHandler } = require('../../utils.js');
    console.log(baconButton)

    baconButton.addEventListener('click', async (event) => {
        // const id = parseInt(req.params.id);
        const id = event.target.id
             res = await fetch(`/story/${id}/like`, {
                method: 'POST'
            })

            const likeCount = await res.json()
            console.log(likeCount.likes)
            likesText.innerText = likeCount.likes

    })

    commentButton.addEventListener('click', async (event) => {

        // event.preventDefault();
        console.log("SAY SOMETHINGGGG")
        const commentForm = document.getElementById('comment-form');
        const username = document.getElementById('username');
        const commentStuff = document.getElementById('commentField').value
        const commentDiv = document.querySelector('.comments')
        const formData = new FormData(commentForm);
        const comment = formData.get('commentField');
        const body = { comment , username: username.value };

        console.log(event.target.id)
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




    });


})
