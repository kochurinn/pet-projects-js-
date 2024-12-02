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
let intervalId // Идентификатор интервала

const calculation = () => {
    if (!isPaused) {
        s++
        if (s === 60) {
            s = 0
            m++
            if (m === 60) {
                m = 0
                h++
            }
        }

        hours.textContent = h < 10 ? `0${h}` : `${h}`
        minutes.textContent = m < 10 ? `0${m}` : `${m}`
        seconds.textContent = s < 10 ? `0${s}` : `${s}`
    }
}

const startTimeFunction = () => {
    isPaused = !isPaused;
    startStop.textContent = isPaused ? 'Старт' : 'Пауза'

    if (!isPaused) {
      intervalId = setInterval(calculation, 1000)
    } else {
        clearInterval(intervalId)
    }
}

const clearTime = () => {
    h = 0
    m = 0
    s = 0
    hours.textContent = '00'
    minutes.textContent = '00'
    seconds.textContent = '00'
}

del.addEventListener('click', () => {
    clearInterval(intervalId)
    clearTime()
    isPaused = true
    startStop.textContent = 'Старт'
})

again.addEventListener('click', () => {
    clearInterval(intervalId)
    clearTime()
    isPaused = true
    startTimeFunction()
})

startStop.addEventListener('click', startTimeFunction)