let adminModal = document.querySelector('.admin-controls')
let isModalOpen = false
let adminIcon = document.getElementById('adminIcon')
//let addNewMember = document.getElementById('add-member')


const openAdminModal = () => {
    isModalOpen = !isModalOpen
    isModalOpen === true ? adminModal.style.display = 'grid' : adminModal.style.display = 'none';
    isModalOpen === true ? adminIcon.classList.add('fa-solid') : adminIcon.classList.remove('fa-solid');
}

let addMember = document.getElementById('add-member')
let addMemberModal = document.querySelector('.add-member-modal')
let closeAddModalBtn = document.getElementById('closeModalBtn')
addMember.addEventListener('click', (e) => {
    e.preventDefault()
    addMemberModal.style.display = 'block'
})

const closeModal = () => {
    addMemberModal.style.display = 'none'
}

closeAddModalBtn.addEventListener('click', closeModal)



const loadTable = () => {
    let newMemberList = JSON.parse(localStorage.getItem('memberList'))
    let tableBody = document.getElementById('tbody')
    const mapedData = newMemberList.map((members) => {
        return (
            `
        <tr>
        <td>Sr No</td>
        <td>${members.memberId}</td>
        <td>${members.firstName, members.lastName}</td>
        <td>${members.email}</td>
        <td>Contact</td>
        <td>
            <div class="btn-wrapper"><button>View</button> <button>Edit</button>
                <button>Delete</button>
            </div>
        </td>
    </tr>
        `
        )
    })
    tableBody.innerHTML = mapedData.join('')
}

loadTable()

const addNewMember = (e) => {
    let memberId = getFieldValue('memberId')
    let firstName = getFieldValue('firstName')
    let middleName = getFieldValue('middleName')
    let lastName = getFieldValue('lastName')
    let email = getFieldValue('email')
    let contact = getFieldValue('contact')
    let gender = getFieldValue('gender')
    let plan = getFieldValue('plan')
    let package = getFieldValue('package')
    let trainer = getFieldValue('trainer')

    let membersInfo = {
        memberId: memberId,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        contact: contact,
        gender: gender,
        plan: plan,
        package: package,
        trainer: trainer
    }

    let memberList = localStorage.getItem('memberList') ? JSON.parse(localStorage.getItem('memberList')) : [];
    memberList.push(membersInfo);
    localStorage.setItem('memberList', JSON.stringify(memberList));
    console.log('memberList', memberList)
    loadTable()
}



const getFieldValue = (id) => {
    return document.getElementById(id).value
}


