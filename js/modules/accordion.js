const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');
const textWrapper = document.querySelectorAll('.faq__text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('faq_active') ?
            '' : `${heightWrapper}px`;
        items[i].classList.toggle('faq_active');
      } else {
        textWrapper[i].style.height = '';
        items[i].classList.remove('faq_active');
      }
    }
  });
});
