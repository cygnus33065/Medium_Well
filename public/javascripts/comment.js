// import { json } from "sequelize/types";

window.addEventListener("DOMContentLoaded", async () =>{

    const form = document.querySelector('.comment-form')
    const commentButton = document.querySelector('.comment-button');
    const commentField = document.getElementById('comment-field'); // value of this = comment text sumbitted by user
    const commentText = document.getElementById('comment-text'); // this is the text value of a comment
    const likesText = document.querySelector('.likes_container .like_comment_text')
    const baconButton = document.querySelector('.likes_container .bacon-button')
    // const { errorHandler } = require('../../utils.js');

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

    const submitComment = (e, req, res) => {
        e.preventDefault();
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const storyId = e.target.id
        const commentBox = document.getElementById('commentField')
        const userId = document.getElementById('userId');
        const formData = new FormData(form)
        let comment = formData.get('comment')
        const commentsDiv = document.querySelector('.comments-section')
        // console.log('from inside submit function', storyId, '-------', userId.value, '------', comment)
        const data = {
            storyId,
            userId,
            comment
        }
        const res = await fetch(`/story/${storyId}`, {
            method:'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type":"application/json"}
        })
        console.log(commentBox)
        const newComment = await res.json();
        const addCommentDiv = document.createElement('div')
        const addComment = document.createElement('p')
        addComment.classList.add('comment-card')
        addCommentDiv.classList.add('comments')
        addComment.innerText = newComment.comment;
        addCommentDiv.appendChild(addComment)
        commentsDiv.appendChild(addCommentDiv)
        commentBox.value = ''
        // console.log(newComment)
        // console.log(newComment.comment)
    })

    // commentButton.addEventListener('click', async (event) => {

    //     // event.preventDefault();
    //     // console.log("SAY SOMETHINGGGG")
    //     const commentForm = document.getElementById('comment-form');
    //     const commentStuff = document.getElementById('commentField').value
    //     const commentDiv = document.querySelector('.comments')
    //     const formData = new FormData(commentForm);
    //     const comment = formData.get(commentField);
    //     const body = { comment , username: username.value };
    //     const id = event.target.id
    //     console.log(comment)
    //     event.preventDefault()
    //     // console.log(id)
    //         res = await fetch(`/story/${id}`, {
    //             method: 'POST',
    //             body: JSON.stringify(body),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //         console.log(res)
    //         // res.forEach((story) => {
    //         //     const commentCard =  document.createElement("div").classList.add("comment-card")
    //         //      commentCard.innerHTML= story.comment
    //         //      commentDiv.appendChild(commentCard)


    //         //  })




    // });


})
