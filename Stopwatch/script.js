const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const del = document.querySelector('.stopwatch__btns-del')
const startStop = document.querySelector('.stopwatch__btns-startStop')
const again = document.querySelector('.stopwatch__btns-again')

let h = 0
let m = 0
let s = 0
let isPaused = true
let dateNow

const startTime = () => {
    isPaused = !isPaused
    
    const interval = setInterval(() => calculation(), 1000)

    isPaused ? startStop.textContent = 'Старт' : startStop.textContent = 'Пауза'

    const calculation = () => {
        saveStartDate = Date.now()
        if (!isPaused) {
            if (s == 59) {
                s = 0
                m++
            } else {
                s++
            }
        
            if (m == 60) {
                m = 0
                h++
            }
        
            hours.textContent = h < 10 ? `0${h}` : `${h}`
            minutes.textContent = m < 10 ? `0${m}` : `${m}`
            seconds.textContent = s < 10 ? `0${s}` : `${s}`
        }
        else {
            clearInterval(interval)
        }
    }

    const clearTime = () => {
        h = 0
        m = 0
        s = 0
        hours.textContent = `0${h}`
        minutes.textContent = `0${m}`
        seconds.textContent = `0${s}`
    }

    del.addEventListener('click', () => {
        clearInterval(interval)
        clearTime()
        isPaused = true
        startStop.textContent = 'Старт'
    })

    again.addEventListener('click', () => {
        clearInterval(interval)
        clearTime()
        isPaused = true
        setTimeout(() => startTime(), (Date.now() - saveStartDate) % 1000)
    })
}

startStop.addEventListener('click', startTime)

console.log(Date.now())