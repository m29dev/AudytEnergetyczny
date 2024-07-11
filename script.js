const handleSelectLanguage = (lang) => {
    // add hidden class to all language info boxes
    document.querySelectorAll('.card-info-box').forEach((item) => {
        item.classList.add('hidden')
    })

    // delete hidden class from selected language to display it's info
    document.querySelector(`.box-${lang}`).classList.remove('hidden')
}

const handleSubmitForm = document.querySelector('.form-submit')
handleSubmitForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = e.target.email.value

    // hide message form
    document.querySelector('.msg-before').classList.add('hidden')

    // show after message box
    document.querySelector('.msg-after').classList.remove('hidden')
    // display message with provided by user email address
    document.querySelector('.user').innerHTML = email
})

const handleGoToPage = (page) => {
    window.location.href = `https://${page}`
}

const handleActivateBtn = document
    .querySelectorAll('.navbar-btn')
    .forEach((bnt) => {
        bnt.addEventListener('click', (e) => {
            // remove all avtive btn
            document.querySelectorAll('.navbar-btn').forEach((item) => {
                item.classList.remove('navbar-btn-active')
            })

            // set active btn class for current btn
            e.target.classList.add('navbar-btn-active')
        })
    })

const handleOpenBtn = document
    .querySelector('.open-btn')
    .addEventListener('click', () => {
        document.querySelector('.navbar-menu').classList.remove('hidden')
    })

const handleCloseBtn = document
    .querySelectorAll('.close-btn')
    .forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector('.navbar-menu').classList.add('hidden')
        })
    })
