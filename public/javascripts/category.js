window.addEventListener("DOMContentLoaded", async () => {
    const buttons = document.querySelector('.side-container')
    const user = document.getElementById('userId')
    const userId = user.value

    buttons.addEventListener('click', async(e,req,res) => {
      if (e.target.nodeName === 'BUTTON'){
        catId = e.target.id;

        const data = {
          userId,
          catId
        }

        const res = await fetch(`/category/${catId}/followed`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {"Content-Type":"application/json"}
        })
      }
    })
})
