const btnModal = document.querySelector('.row4_info button'),
      popap = document.querySelector('.popup');


btnModal.addEventListener('click', () => {
    popap.style.display = 'block';
    setTimeout(() => {
        popap.style.display = 'none';
    }, 3000);
});