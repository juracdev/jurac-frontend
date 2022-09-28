import './droptext.css';

const runDroptext = () => {
  const droptexts = document.querySelectorAll('.droptext');

  droptexts.forEach((el) => {
    const button = el.querySelector('.droptext__title');
    const collapse = el.querySelector('.droptext__collapse');
    const arrow = el.querySelector('.droptext__arrow');

    button.addEventListener('click', () => {
      if (collapse.classList.contains('visually-hidden')) {
        arrow.classList.add('droptext__arrow--open');
        collapse.classList.remove('opacity-hidden');
        collapse.classList.remove('visually-hidden');
      } else {
        arrow.classList.remove('droptext__arrow--open');
        collapse.classList.add('opacity-hidden');
        setTimeout(() => {
          collapse.classList.add('visually-hidden');
        }, 300);
      }
    });
  });
};

export default runDroptext;