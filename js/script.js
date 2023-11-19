import './modules/accordion.js';
import './modules/menuAnimation.js';
import {renderModal} from './modules/render.js';
import {modalControl} from './modules/control.js';


const init = () => {
  const {modalOverlay} = renderModal();

  modalControl(modalOverlay);
};

init();
