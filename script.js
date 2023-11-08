console.log('Hello')

const input = document.querySelector('.in')
const button = document.querySelector('.btn')
const out = document.querySelector('.out')

const date = { day: 0, month: 0 }

button.onclick = () => {
    console.log('Click!')
    out.innerHTML = input.value
}

for (let index = 1; index <= 12; index++) {
    const month = document.createElement('div')
    month.innerHTML = index + '<br>'
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

allMonths.forEach((month, index) => {
    month.onclick = () => {
        clearMonth()
        month.classList.toggle('blue-month')
        date.month = index
    }
})

const clearMonth = () => {
    allMonths[date.month].classList.remove('blue-month')
}

    // month.classList.toggle('month') - toggles a class on element
    // month.classList.remove('month') - removes a class from element

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
