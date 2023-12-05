let adminForm = document.getElementById('adminForm')
let adminLoginErr = document.getElementById('adminLoginErr')
let adminLoginBtn = document.getElementById('adminLoginBtn')
const getInptValue = (id) => {
    return document.getElementById(id).value
}

adminForm?.addEventListener('submit', (event) => {
    event.preventDefault()

    let username = getInptValue('username').toLowerCase();
    let password = getInptValue('password').toLowerCase();

    if (username.trim() === '' && password.trim() === '') {
        adminLoginErr.textContent = 'Please enter your login details';
        adminLoginBtn.classList.add('loginErr')
    } else if (username === "admin" && password === "admin123") {
        adminLoginErr.textContent = '';
        adminLoginBtn.classList.remove('loginErr')
        console.log('correct');
        window.location.href = './pages/homePage.html';
    } else if (username === "admin" && password !== "admin123") {
        adminLoginErr.textContent = 'Wrong Password!';
    }
    else if (username !== "admin" && password === "admin123") {
        adminLoginErr.textContent = 'Username does not exist!';
    }
    else {
        adminLoginErr.textContent = 'Please enter valid credentials';
        adminLoginBtn.classList.add('loginErr')
    }
});
