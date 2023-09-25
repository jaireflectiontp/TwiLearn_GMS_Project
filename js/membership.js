const refreshTable = () => {
    let memberShipList = JSON.parse(localStorage.getItem('memberList'))
    let membershipTable = document.getElementById('membershipTable')
    let mapedPlan = memberShipList?.map((members) => {
        return (
            `
      <tr>
      <td>Sr No</td>
      <td class='mId'>${members.memberId}</td>
      <td>${members.firstName, members.lastName}</td>
      <td>${members.dietPlan}</td>
      <td>${members.membership}</td>
      <td>${members.duration}</td>
      <td>
          <div class="btn-wrapper"><button class='viewDetails'><i class="fa-solid fa-eye"></i>View</button>
              <button class='deleteMember'><i class="fa-solid fa-trash-can"></i>Delete</button>
          </div>
      </td>
  </tr>
      `
        )
    })


    membershipTable.innerHTML = mapedPlan.join('')
}

refreshTable()

