const admin = {
    username: '123',
    password: '123'
}
window.onload = () => {
    localStorage.setItem('admin', JSON.stringify(admin))
}

let adminForm = document.getElementById('adminLogin')
let errorMsg = document.getElementById('loginError')

adminForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let username = getInptValue('username')
    let password = getInptValue('password')
    if (username.trim() === '' && password.trim() === '') {
        errorMsg.textContent = 'Please enter your login details'
    }
    else if (username === admin.username && password === admin.password) {
        window.location.href = '../pages/home.html'
    }
    else {
        errorMsg.textContent = 'Please enter valid credentials'
    }
})

const getInptValue = (id) => {
    return document.getElementById(id).value
}



