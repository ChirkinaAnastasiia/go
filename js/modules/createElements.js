const createModalForm = () => {
  const section = document.createElement('section');
  section.classList.add('modal');

  const overlay = document.createElement('div');
  overlay.classList.add('modal-form-overlay');

  const form = document.createElement('form');
  form.classList.add('modal-form');
  form.insertAdjacentHTML('beforeend', `
    <button type="button" class="modal-form__close-button">
      <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect y="38.4407" width="54.3632" height="5.03363" 
          rx="2" transform="rotate(-45 0 38.4407)" fill="white"/>
        <rect x="3.55957" width="54.3632" height="5.03363" 
          rx="2" transform="rotate(45 3.55957 0)" fill="white"/>
      </svg>
    </button>

    <h2 class="modal-form__title">Заказать звонок</h2>

    <div class="modal-form__wrapper">
      <label class="modal-form__label" for="modal-name">Имя</label>
      <input class="modal-form__input" type="text"
        id="modal-name" name="modal-name" required>
    </div>

    <div class="modal-form__wrapper">
      <label class="modal-form__label" for="modal-phone">Телефон</label>
      <input class="modal-form__input" type="number"
        id="modal-phone" name="modal-phone" required>
    </div>

    <button type="submit" class="modal-form__button">Позвонить мне</button>
  `);

  overlay.append(form);
  section.append(overlay);

  return {
    section,
    overlay,
  };
};


export {createModalForm};
