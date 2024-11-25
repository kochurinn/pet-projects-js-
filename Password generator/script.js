const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[]^_`{|}~'

const input = document.querySelector('input')
const copyBtn = document.querySelector('.copy')
const genBtn = document.querySelector('.start-generation')
const copyDoneText = document.querySelector('.copyDone')

genBtn.addEventListener('click', () => {
    let password = ''
    for (let i = 0; i < 16; i++) {
        password += symbols[Math.floor(Math.random() * symbols.length)]
    }
    input.value = password
})

copyBtn.addEventListener('click', () => {
    if (input) {
        input.select()
        document.execCommand('copy')
        copyDoneText.classList.toggle('copyDone-on')
        setTimeout(() => {
            copyDoneText.classList.toggle('copyDone-on')
        }, 3000)
    }
})