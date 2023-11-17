const main = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        // Check if response has success status => then()
        if (response.ok) {
            return response.json()
        }
        // Throw error if response has error => catch()
        throw new Error('Error!!!')
        })
    // Handling success
    .then((json) => {
            return json
    })
    // Handling errors
    .catch(error => {
        console.log('ERROR', error)
        return error.message
    })
    console.log('response', response)
}

main()