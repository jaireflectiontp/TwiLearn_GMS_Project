const refreshTable = () => {
    let memberShipList = JSON.parse(localStorage.getItem('memberList'))
    let membershipTable = document.getElementById('membershipTable')
    let mapedPlan = memberShipList?.map((members) => {
        return (
            `
      <tr>
      <td class='mId'>${members.memberId}</td>
      <td>${members.firstName} ${members.middleName} ${members.lastName}</td>
      <td>${members.dietPlan}</td>
      <td>${members.membership}</td>
      <td>${members.duration}</td>
      <td>
          <div class="btn-wrapper"><button class='generate-bills' data-memberid='${members.memberId}'>Generate Bill</button>
          </div>
      </td>
  </tr>
      `
        )
    })

    membershipTable.innerHTML = mapedPlan.join('')

    const generateBtn = document.querySelectorAll('.generate-bills')

    generateBtn.forEach((generate) => {
        generate.addEventListener('click', () => {
            const memberId = generate.getAttribute('data-memberid');
            const memberData = memberShipList.find(member => member.memberId === memberId);
            generateBill(memberId, memberData);
        })
    })
}

function generateBill(memberId, memberData) {

    let amount = 0;
    let dietPlanAmount
    let durationAmount
    const billId = new Date().getTime();
    if (memberData.membership === 'basic') {
        if (memberData.duration == 1) {
            amount = 300;
            durationAmount = 300
        }
        else if (memberData.duration == 3) {
            amount = 750;
            durationAmount = 750
        }
        else if (memberData.duration == 6) {
            amount = 1500
            durationAmount = 1500
        }
        else if (memberData.duration == 12) {
            amount = 3200
            durationAmount = 3200
        }
    } else if (memberData.membership === 'professional') {
        if (memberData.duration == 1) {
            amount = 500;
            durationAmount = 500
        }
        else if (memberData.duration == 3) {
            amount = 1200;
            durationAmount = 1200
        }
        else if (memberData.duration == 6) {
            amount = 2700;
            durationAmount = 2700
        }
        else if (memberData.duration == 12) {
            amount = 5500;
            durationAmount = 5500
        }
    } else if (memberData.membership === 'elite') {
        if (memberData.duration == 1) {
            amount = 1000;
            durationAmount = 1000
        }
        else if (memberData.duration == 3) {
            amount = 2700;
            durationAmount = 2700
        }
        else if (memberData.duration == 6) {
            amount = 5500;
            durationAmount = 5500
        }
        else if (memberData.duration == 12) {
            amount = 11000;
            durationAmount = 11000
        }
    }

    if (memberData.dietPlan === 'keto') {
        amount += 650;
        dietPlanAmount = 650
    } else if (memberData.dietPlan === 'vegan') {
        amount += 700;
        dietPlanAmount = 700
    } else if (memberData.dietPlan === 'raw') {
        amount += 500;
        dietPlanAmount = 500
    } else if (memberData.dietPlan === 'noSugar') {
        amount += 800;
        dietPlanAmount = 800
    }
    let billtemp = document.getElementById('bill-temp')
    let billOverlay = document.getElementById('bill-overlay')
    billOverlay.style.display = 'block'
    billtemp.style.display = 'grid'

    billtemp.innerHTML =
        `
        <div class="bill-card">
    <div id='closeBill'><i data-lucide="x-circle"></i>
    </div>
    <h2>Membership Invoice</h2>
    <br>
    <hr>
    <br>
    <div class="membership-details">
        <div class="membership-details-left">
            <div class="members-info"><span>Name</span><span>: ${memberData.firstName} ${memberData.middleName}
                    ${memberData.lastName}</span></div>
            <div class="members-info"><span>Email</span><span>: ${memberData.email}</span></div>
            <div class="members-info"><span>Phone No</span><span>: ${memberData.contact}</span></div>
            <div class="members-info"><span>Address</span><span>: ${memberData.address}</span></div>
        </div>
        <div class="membership-details-right">
            <div class="members-info"><span>Due Date</span><span>: <input type="date" name="billDate"
                        id="billDate"></span></div>
            <div class="members-info"><span>MemberId</span><span>: ${memberId}</span></div>
            <div class="members-info"><span>Bill Id</span><span>: ${billId}</span></div>
        </div>
    </div>
    <div class="billing-details">
        <div class="bill-detail-col">
            <h3>Details</h3>
            <br>
            <p>Membership Type: <span>${memberData.membership}</span></p>
            <br>
            <p>Diet Plan: <span>${memberData.dietPlan}</span></p>
            <br>
            <p>Duration: <span>${memberData.duration} months</span></p>
            <br>
            <h3>Total</h3>
        </div>
        <div class="amount-col">
            <h3>Amount</h3>
            <br>
            <p>---</p>
            <br>
            <p>&#x20B9; ${dietPlanAmount}</p>
            <br>
            <p>&#x20B9; ${durationAmount}</p>
            <br>
            <h3 class='totalAmt'>&#x20B9; ${amount}</h3>
        </div>
    </div>
    <div class="bill-generation-btn"><button id='exportBill'>Generate</button></div>
</div>  
        `

    let exportBill = document.getElementById('exportBill')
    exportBill.addEventListener('click', () => {
        let dueDate = document.getElementById('billDate').value
        if (dueDate) {
            const bill = {
                id: billId,
                memberId: memberId,
                membership: memberData.membership,
                dietPlan: memberData.dietPlan,
                duration: memberData.duration,
                dueDate: dueDate,
                durationAmount: durationAmount,
                dietPlanAmount: dietPlanAmount,
                totalAmount: parseFloat(amount),

            };

            localStorage.setItem(`bill_${billId}`, JSON.stringify(bill));

            alert(`Bill for ${memberId} generated successfully.`);
            billOverlay.style.display = 'none';
            billtemp.style.display = 'none';

        } else {
            alert('Forgot to enter bill due date');
        }

    })

    document.getElementById('closeBill').addEventListener('click', () => {
        billOverlay.style.display = 'none';
        billtemp.style.display = 'none';
    })
    console.log(memberData)
}

refreshTable();

