
let dietPlanList = document.querySelectorAll('span')

dietPlanList.forEach((plan) => {
    plan.addEventListener('click', () => {
        if (plan.textContent === 'keto') {
            document.getElementById('keto-diet').style.display = 'block'
            document.getElementById('raw-diet').style.display = 'none'
            document.getElementById('vegan-diet').style.display = 'none'
            document.getElementById('no-sugar-diet').style.display = 'none'
        }
        if (plan.textContent === 'raw') {
            document.getElementById('keto-diet').style.display = 'none'
            document.getElementById('raw-diet').style.display = 'block'
            document.getElementById('vegan-diet').style.display = 'none'
            document.getElementById('no-sugar-diet').style.display = 'none'
        }
        if (plan.textContent === 'vegan') {
            document.getElementById('keto-diet').style.display = 'none'
            document.getElementById('raw-diet').style.display = 'none'
            document.getElementById('vegan-diet').style.display = 'block'
            document.getElementById('no-sugar-diet').style.display = 'none'
        }
        if (plan.textContent === 'nosugar') {
            document.getElementById('keto-diet').style.display = 'none'
            document.getElementById('raw-diet').style.display = 'none'
            document.getElementById('vegan-diet').style.display = 'none'
            document.getElementById('no-sugar-diet').style.display = 'block'
        }
    })
})