import {createModalForm} from './createElements.js';


const renderModal = () => {
  const {section, overlay} = createModalForm();

  const main = document.querySelector('main');
  main.append(section);

  return {
    modalOverlay: overlay,
  };
};

export {renderModal};

