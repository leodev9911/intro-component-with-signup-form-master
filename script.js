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

    if (inputText[0].value === '') {
        errorMessage[0].classList.remove('hidden')
        errorIcon[0].classList.remove('hidden')
        inputText[0].classList.add('red')
    }

    if (inputText[1].value === '') {
        errorMessage[1].classList.remove('hidden')
        errorIcon[1].classList.remove('hidden')
        inputText[1].classList.add('red')
    }

    if (inputText[2].value === '') {
        errorMessage[2].classList.remove('hidden')
        errorIcon[2].classList.remove('hidden')
        inputText[2].classList.add('red')
    }

    if (inputText[3].value === '') {
        errorMessage[3].classList.remove('hidden')
        errorIcon[3].classList.remove('hidden')
        inputText[3].classList.add('red')
    }
}
console.log(inputText)

inputEmail.addEventListener('input', handleInputEmailError)
inputSubmit.addEventListener('click', handleInputError)