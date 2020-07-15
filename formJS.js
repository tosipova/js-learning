const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

console.log('Start')
console.log(errorElement)

form.addEventListener('submit', (e) => {
    console.log('Submit event ..................')
    let errorMessages = []
    if (name.value === '' || name.value == null) {
        errorMessages.push('Name is required')
    }
    if (password.value === 'password') {
        errorMessages.push('Password cannot be insecure')
    }
    if (errorMessages.lenght > 0) {
        console.log('Found errors and wrote')
        errorElement.innerText = errorMessages.join(',')
    }
    e.preventDefault()
})