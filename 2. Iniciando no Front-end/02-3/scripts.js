const modals = document.querySelectorAll('.card')

for (let modal of modals)
{    
    modal.addEventListener("click", function()
    {
        document.querySelector('.modal-overlay').classList.add('active')
    })
}


document.querySelector('.close-modal').addEventListener("click", function()
{
    document.querySelector('.modal-overlay').classList.remove('active')
})