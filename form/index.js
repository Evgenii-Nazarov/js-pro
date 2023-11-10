const form = document.querySelector('#form')

form.addEventListener('submit', (event, error) => {
    event.preventDefault()
    error.preventDefault()
})

    /** 
     * Tasks:
     * 1. Add two new inputs: Password and Confirm password
     * 2. On Submit button click display errors in red color in #show-error div
     * 3. Validations rules are:
     *   3a. User name should has first upper case letter
     *   3b. Password should be from 8 to 16 characters
     *   3c. Password string should match the Confirm Password string
     * 
    */