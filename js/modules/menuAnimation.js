const headerContainer = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger');
const burgerBtn = document.querySelector('.header__menu-button');
const burgerOverlay = document.querySelector('.burger-overlay');
const callBtn = document.querySelector('.call-btn');


const duration = 500;
const distance = burgerMenu.clientHeight + headerContainer.clientHeight;

let topPosition = -(distance - headerContainer.clientHeight);
burgerMenu.style.top = `${topPosition}px`;


const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  });
};

const showMenu = () => {
  const modalOverlay = document.querySelector('.modal-form-overlay');
  modalOverlay.classList.remove('is-visible');
  burgerMenu.style.top = `${topPosition}px`;

  startAnimation(duration, (progress) => {
    const top = progress * (distance - 5);
    burgerMenu.style.transform = `translateY(${top}px)`;
  });

  topPosition = headerContainer.clientHeight;
  burgerBtn.classList.add('burger__active');
  burgerOverlay.classList.add('overlay-visible');
};

const hideMenu = () => {
  burgerMenu.style.top = `${topPosition}px`;

  startAnimation(duration, (progress) => {
    const top = progress * distance;
    burgerMenu.style.transform = `translateY(${-top}px)`;
  });

  topPosition = -(distance - headerContainer.clientHeight);
  burgerBtn.classList.remove('burger__active');
  burgerOverlay.classList.remove('overlay-visible');
};

burgerBtn.addEventListener('click', e => {
  if (e.target.closest('.burger__active')) {
    hideMenu();
  } else if (e.target.closest('.header__menu-button')) {
    showMenu();
  }
});

burgerOverlay.addEventListener('click', e => {
  if (e.target.closest('.overlay-visible')) {
    hideMenu();
  }
});

callBtn.addEventListener('click', () => {
  hideMenu();
});
