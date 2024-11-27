const quote = document.querySelector('.quote')
const quoteAuthor = document.querySelector('.author-quote span')
const getQuote = document.querySelector('.new-quote')

const getData = async () => {
    try {
        const response = await fetch('https://api.quotable.io/quotes/random')
        const data = await response.json()
        if (data[0].length > 180) {
            getData()
        } else {
            quote.textContent = data[0].content
            quoteAuthor.textContent = data[0].author
        }
    } catch (err) {
        throw new Error(err)
    }
    
}

window.onload = getData

getQuote.addEventListener('click', () => {
    getData()
})
