const modals = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for (let modal of modals)
{   
    modal.addEventListener("click", function()
    {
        let pageId = modal.getAttribute('id')

        document.querySelector('iframe').setAttribute('src',`https://rocketseat.com.br/${pageId}`);

        modalOverlay.classList.add('active')
    })
}

// Fechar o Modal

document.querySelector('.close-modal').addEventListener('click', function()
{
    modalOverlay.classList.remove('active')
})

// Maximizar o Modal

const modal = document.querySelector('.modal')

document.querySelector('.maximize-modal').addEventListener('click', function()
{   
    if (modal.classList.contains('maximize'))
    {
        modal.classList.remove('maximize')
    }
    else
    {
        modal.classList.add('maximize')
    }    
})