const input = document.querySelector('.in')
const button = document.querySelector('.btn')
const out = document.querySelector('.out')
const todo = document.querySelector('#todo')

const date = { day: null, month: null }

const MONTHS_MAP = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
}

button.onclick = () => {
    // Validate a day pick
    if (date.day === null) {
        alert('Pick a date')
        return
    }

    // Validate input
    if (input.value === '') {
        alert('Input a todo')
        return
    }

    // Create a new <li></li> element and append to <ul></ul>
    const todoItem = document.createElement('li')
    todo.appendChild(todoItem)
    todoItem.innerHTML = `${input.value} on ${MONTHS_MAP[date.month + 1]} ${date.day}`
    input.value = ''
}

for (let index = 1; index <= 12; index++) {
    const month = document.createElement('div')
    month.innerHTML = MONTHS_MAP[index] + '<br>'
    month.classList.add('month')

    for (let j = 1; j <= 31; j++) {
        const day = document.createElement('div')
        day.innerHTML = j
        day.classList.add('day')
        month.appendChild(day)
    }

    out.appendChild(month)
}

const allMonths = document.querySelectorAll('.month')

allMonths.forEach((month, i) => {
    month.onclick = () => {
        if (i !== date.month)
        clearMonth()
        month.classList.toggle('blue-month')
        date.month = i
    }

    const monthDays = month.querySelectorAll('.day')
    monthDays.forEach((day, j) => {
        day.onclick = () => {
            day.classList.toggle('green-day')
            if (date.month === i)
            month.classList.toggle('blue-month')
            if (j !== date.day)
            clearDay()
            if (date.day === j)
            date.day = null
            else 
            date.day = j
        }
    })
})

const clearMonth = () => {
    allMonths[date.month]?.classList.remove('blue-month')
}

const clearDay = () => {
    allMonths[date.month]?.querySelectorAll('.day')[date.day]?.classList.remove('green-day')
}

    /** 
     * Tasks:
     * 1. Day and month change bg color on click
     * 2. Bring bg clolor back on another day click
     * 3. On button click display input value + date (Month + day) under input. 
     * 
     * New tasks:
     * 4. When displaying input values, use <ul> and and <li> tags
     * <ul>
     *   <li>Todo1 Aug 12</li>
     *   <li>Todo2 Feb 21</li>
     *   <li>Todo3 Sep 30</li>
     * </ul>
     * 5. If imput or date is empty then display Alert with a corresponding error message.
     * 6. Use real months names instead of numbers, e.g. Jan, Feb, Mar and so on...
    */
