const modalControl = (modalOverlay) => {
  const btnCall = document.querySelector('.header__button');

  const openModal = () => {
    modalOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('is-visible');
  };

  btnCall.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay ||
        target.closest('.modal-form__close-button')) {
      closeModal();
    }
  });
};


export {modalControl};
