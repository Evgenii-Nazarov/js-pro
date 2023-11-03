console.log('Hello')

const input = document.querySelector('.in')
const button = document.querySelector('.btn')
const out = document.querySelector('.out')

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

    // month.classList.toggle('month') - toggles a class on element
    // month.classList.remove('month') - removes a class from element

    /** 
     * Tasks:
     * 1. Day and month change bg color on click
     * 2. Bring bg clolor back on another day click
     * 3. On button click display input value + date (Month + day) under input
    */
