import './modal.css';

const runModal = () => {
  const modal = document.querySelector('.modal');

  if (!modal) return;

  const modalContent = modal.querySelector('#modal-content');
  const modalCloseBtn = modal.querySelector('#modal-close');

  modalCloseBtn.addEventListener('click', () => {
    modalContent.innerHTML = '';
    modal.classList.add('visually-hidden');
  });

  const modalInstances = document.querySelectorAll('.modal-instance');

  modalInstances.forEach((el) => {
    const instanceContent = el.querySelector('.modal-instance__content');
    const modalOpenBtn = el.querySelector('.modal-instance__open-btn');

    modalOpenBtn.addEventListener('click', () => {
      const clonedContent = instanceContent.cloneNode(true);

      /* fix radio checking*/
      const clonedRadios = (clonedContent as Element).querySelectorAll(
        'input[type=radio]'
      );
      clonedRadios.forEach((radio: HTMLInputElement) => {
        if (radio.hasAttribute('checked')) {
          radio.checked = true;
        }
      });

      modalContent.innerHTML = '';
      modalContent.appendChild(clonedContent);
      modal.classList.remove('visually-hidden');
    });
  });
};

export default runModal;
