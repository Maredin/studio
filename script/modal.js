const btnModal = document.querySelector('.row4_info button'),
      popap = document.querySelector('.popup');

function setModal() {
    popap.style.display = 'none';
    document.body.style.overflow = '';
}
btnModal.addEventListener('click', () => {
    popap.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(setModal, 3000);
});
popap.addEventListener('click', (e) => {
    if(e.target == popap) {
        popap.style.display = 'none';
        document.body.style.overflow = '';
    }
});