
const tabs = document.querySelectorAll('.dietTypes');
const tabContents = document.querySelectorAll('.plan-wrapper');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabContents.forEach((content) => {
            content.style.display = 'none';
        });

        tabs.forEach((t) => {
            t.classList.remove('active-plan');
        });

        const tabId = tab.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.style.display = 'block';

        tab.classList.add('active-plan');
    });
});

tabs[0].click();
