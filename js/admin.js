let adminModal = document.querySelector('.admin-controls')
let isModalOpen = false
let adminIcon = document.getElementById('adminIcon')
const openAdminModal = () => {
    isModalOpen = !isModalOpen
    isModalOpen === true ? adminModal.style.display = 'grid' : adminModal.style.display = 'none';
    isModalOpen === true ? adminIcon.classList.add('fa-solid') : adminIcon.classList.remove('fa-solid');
}