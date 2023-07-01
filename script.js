const inputText = document.querySelectorAll('.input-text')
const errorEmailMessage = document.querySelector('.email')
const inputEmail = document.querySelector('#input-email')
const inputSubmit = document.querySelector('#input-submit')
const errorMessage = document.querySelectorAll('.error-message')
const errorIcon = document.querySelectorAll('.error-icon')

const handleInputEmailError = () => {
    const email = inputEmail.value
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (isValid) {
        errorEmailMessage.classList.add('hidden')
        errorIcon[2].classList.add('hidden')
    } else if (!isValid) {
        errorEmailMessage.classList.remove('hidden')
        errorIcon[2].classList.remove('hidden')
    } 

    if (inputEmail.value === '') {
        errorEmailMessage.classList.add('hidden')
        errorIcon[2].classList.add('hidden')
    }

}

const handleInputError = () => {
    inputText.forEach(input => {
        if (input.value === '') {
            input.classList.add('red')
            errorMessage.forEach(message => {
                message.classList.remove('hidden')
            })
            errorIcon.forEach(icon => {
                icon.classList.remove('hidden')
            })
        } 
    })
}
console.log(inputText)

inputEmail.addEventListener('input', handleInputEmailError)
inputSubmit.addEventListener('click', handleInputError)