function modal() {
    let more = document.querySelector('.more'),
        descriptionBtns = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function openModal(btn) {
        overlay.style.display = 'block';
        btn.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        descriptionBtns.forEach(btn => {
            btn.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    }

    more.addEventListener('click', openModal);
    descriptionBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    close.addEventListener('click', closeModal);
}

module.exports = modal;