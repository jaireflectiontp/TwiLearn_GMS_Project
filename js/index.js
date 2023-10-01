
let buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ((button.textContent).toLowerCase() === 'admin') {
            document.getElementById('container').style.display = 'block'
            document.querySelector('.button-wrapper').style.display = 'none'
        }
        else {
            document.getElementById('member-container').style.display = 'block'
            document.querySelector('.button-wrapper').style.display = 'none'
        }
    })
})

const admin = {
    username: '123',
    password: '123'
}
window.onload = () => {
    localStorage.setItem('admin', JSON.stringify(admin))
    console.log(admin)
}

const adminForm = document.getElementById('adminForm')
const errorMsg = document.getElementById('errorMsg')

const getInptValue = (id) => {
    return document.getElementById(id).value
}
adminForm?.addEventListener('submit', (event) => {
    event.preventDefault()

    let username = getInptValue('username');
    let password = getInptValue('password');

    if (username.trim() === '' && password.trim() === '') {
        errorMsg.textContent = 'Please enter your login details';
    } else if (username === admin.username && password === admin.password) {
        console.log('correct');
        window.location.href = '../pages/home.html';
    } else {
        errorMsg.textContent = 'Please enter valid credentials';
    }
});

const memberForm = document.getElementById('memberForm')
memberForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let memberId = document.getElementById('memberId')
    const memberErrorMsg = document.getElementById('memberErrorMsg')
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    memberList.map((members) => {
        members.memberId === memberId.value ? window.location.href = '../pages/memberDashboard.html' : memberErrorMsg.textContent = 'Please enter valid credential';
    })
})







