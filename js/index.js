const currentPath = window.location.pathname;
const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href')
    const linkFilename = linkPath.substring(linkPath.lastIndexOf('/') + 1);
    if (currentPage === linkFilename) {
        link.classList.add('active-nav');
    }
});

let adminModal = document.querySelector('.admin-controls')
let isModalOpen = false
let adminIcon = document.getElementById('adminIcon')

const openAdminModal = () => {
    isModalOpen = !isModalOpen
    isModalOpen === true ? adminModal.style.display = 'grid' : adminModal.style.display = 'none';
    isModalOpen === true ? adminIcon.classList.add('fa-solid') : adminIcon.classList.remove('fa-solid');
    isModalOpen === true ? adminIcon.classList.add('activeIcon') : adminIcon.classList.remove('activeIcon');
}

const getNewPlans = () => {
    alert('New plans coming soon......')
}
