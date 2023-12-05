
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





const getFieldValue = (id) => {
    return document.getElementById(id).value
}

const loadTable = () => {
    let newMemberList = JSON.parse(localStorage.getItem('memberList'))
    let membersTable = document.getElementById('membersTable')
    let mapedData = newMemberList?.map((members) => {
        return (
            `
        <tr>
        <td class='mId'>${members.memberId}</td>
        <td>${members.firstName} ${members.middleName} ${members.lastName}</td>
        <td>${members.email}</td>
        <td>${members.contact}</td>
        <td>
            <div class="btn-wrapper"><button class='viewDetails'><i class="fa-solid fa-eye"></i>View</button>
                <button class='deleteMember'><i class="fa-solid fa-trash-can"></i>Delete</button>
            </div>
        </td>
    </tr>
        `
        )
    })
    membersTable.innerHTML = mapedData?.join('')


    const handleMemberAction = (index, action) => {
        let id = newMemberList[index].memberId;
        if (action === 'delete') {
            newMemberList = newMemberList.filter((elem) => elem.memberId !== id);
            localStorage.setItem('memberList', JSON.stringify(newMemberList));
            loadTable();
        } else if (action === 'view') {
            let viewMember = newMemberList.filter((elem) => elem.memberId === id);
            let memberCard = document.getElementById('members-details')
            memberCard.style.display = 'grid'
            document.getElementById('details-overlay').style.display = 'block'
            const memberDetails = viewMember?.map((details) => {
                return `
                           <div class="members-details-container">
                           <i id="closeDetails" class="fa-regular fa-circle-xmark"></i>
                             <div class="detail-container-in">
                                <h3><i class="fa-solid fa-address-card"></i>Member Details</h3>
                                <ul>
                                   <li>Member ID: ${details.memberId}</li>
                                   <li>Name: ${details.firstName} ${details.lastName}</li>
                                   <li>Email: ${details.email}</li>
                                   <li>Contact: ${details.contact}</li>
                                   <li>Gender: ${details.gender}</li>
                                   <li>Address: ${details.address}</li>
                                </ul>
                            </div>
                          </div>
                         `
            })
            memberCard.innerHTML = memberDetails


            let closeDetails = document.getElementById('closeDetails')
            closeDetails.addEventListener('click', () => {
                memberCard.style.display = 'none'
                document.getElementById('details-overlay').style.display = 'none'
                document.getElementById('members-details').style.display = 'none'
            })

        }
    }

    let deleteMember = document.querySelectorAll('.deleteMember');
    deleteMember.forEach((button, index) => {
        button.addEventListener('click', () => {
            handleMemberAction(index, 'delete');
        });
    });

    let viewDetails = document.querySelectorAll('.viewDetails');
    viewDetails.forEach((button, index) => {
        button.addEventListener('click', () => {
            handleMemberAction(index, 'view');
        });
    });


}

loadTable()



let addNewMember = document.getElementById('add')

addNewMember.addEventListener('click', () => {
    let memberId = getFieldValue('memberId')
    let firstName = getFieldValue('firstName')
    let middleName = getFieldValue('middleName')
    let lastName = getFieldValue('lastName')
    let email = getFieldValue('email')
    let contact = getFieldValue('contact')
    let gender = getFieldValue('gender')
    let dietPlan = getFieldValue('dietPlan')
    let membership = getFieldValue('membership')
    let duration = getFieldValue('duration')
    let address = getFieldValue('address')
    let membersInfo = {
        memberId: memberId,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        contact: contact,
        gender: gender,
        address: address,
        dietPlan: dietPlan,
        membership: membership,
        duration: duration
    }

    let memberList = localStorage.getItem('memberList') ? JSON.parse(localStorage.getItem('memberList')) : [];
    memberList.push(membersInfo);
    localStorage.setItem('memberList', JSON.stringify(memberList));
    console.log('memberList', memberList)
    document.querySelector('.add-member-modal').style.display = 'none'
    loadTable()
})
