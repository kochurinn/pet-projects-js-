const tasks = {}

const input = document.querySelector('.tasksBlock__input input')
const addTaskBtn = document.querySelector('.tasksBlock__input-btn')
const tasksBlock = document.querySelector('.tasksBlock__tasks')

const reloadingTasks = () => {
    if (localStorage.getItem('tasks')) {
        Object.entries(JSON.parse(localStorage.getItem('tasks'))).forEach(task => {
            tasks[task[0]] = task[1]
            tasksBlock.innerHTML += `<div class="tasksBlock__task">
                                        <div class="tasksBlock__task-checkbox ${task[1] ? 'tasksBlock__task-checkbox__done' : ''}"><img src="/check-mark.svg" alt=""></div>
                                        <div class="tasksBlock__task-text ${task[1] ? 'tasksBlock__task-text__done' : ''}">${task[0]}</div>
                                        <div class="tasksBlock__task-delete"><img src="/cross.svg" alt=""></div>
                                    </div>`
        })
    }
}

const actionBtns = () => {
    const checkboxs = document.querySelectorAll('.tasksBlock__task-checkbox')
    const deleteBtns = document.querySelectorAll('.tasksBlock__task-delete')

    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('click', evt => {
            const checkboxText = checkbox.nextElementSibling
            checkbox.classList.toggle('tasksBlock__task-checkbox__done')
            checkboxText.classList.toggle('tasksBlock__task-text__done')
            tasks[checkboxText.textContent] ? tasks[checkboxText.textContent] = false : tasks[checkboxText.textContent] = true
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
    })
    
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', evt => {
            const deleteText = deleteBtn.previousElementSibling
            deleteBtn.parentElement.remove()
            delete tasks[deleteText.textContent]
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
    })
}

reloadingTasks()
actionBtns()

const addTask = (value) => {
    tasksBlock.innerHTML += `<div class="tasksBlock__task">
                                <div class="tasksBlock__task-checkbox"><img src="/check-mark.svg" alt=""></div>
                                <div class="tasksBlock__task-text">${value}</div>
                                <div class="tasksBlock__task-delete"><img src="/cross.svg" alt=""></div>
                            </div>`
    tasks[value] = false
    localStorage.setItem('tasks', JSON.stringify(tasks))
    actionBtns()
}

addTaskBtn.addEventListener('click', () => {
    if (input.value in tasks) return
    addTask(input.value)
    input.value = ''
})

input.addEventListener('keydown', evt => {
    if (evt.keyCode === 13) {
        console.log(1)
        if (input.value in tasks) return
        addTask(input.value)
        input.value = ''
    }
})
