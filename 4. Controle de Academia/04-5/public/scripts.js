const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for (let card of cards)
{   
    card.addEventListener("click", function()
    {
        let pageId = card.getAttribute('id')

        window.location.href = `/courses/${pageId}`
//        document.querySelector('iframe').setAttribute('src',`https://rocketseat.com.br/${pageId}`);

//        modalOverlay.classList.add('active')
    })
}

// Fechar o Modal

/*document.querySelector('.close-modal').addEventListener('click', function()
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
*/

const card = document.querySelector('#wrapper .cards .card')

card.addEventListener("click", function()
{
    let pageId = card.getAttribute('id')
    window.location.href = `https://rocketseat.com.br/${pageId}`
})