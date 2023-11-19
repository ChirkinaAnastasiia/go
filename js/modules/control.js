const modalControl = (modalOverlay) => {
  const btnCall = document.querySelectorAll('.call-btn');

  const openModal = () => {
    modalOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('is-visible');
  };

  btnCall.forEach(item => item.addEventListener('click', openModal));

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay ||
        target.closest('.modal-form__close-button')) {
      closeModal();
    }
  });
};


export {modalControl};
