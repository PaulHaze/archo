/* eslint-disable no-undef */
export const initIsotope = () => {
  let iso;
  const grid = document.querySelectorAll('.gallery');
  const filtersElem = document.querySelector('.filtering');
  const buttonGroups = document.querySelectorAll('.filtering');

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: '.items',
      });
    });
  }

  if (filtersElem) {
    filtersElem.addEventListener('click', event => {
      if (!matchesSelector(event.target, 'span')) {
        return;
      }
      const filterValue = event.target.getAttribute('data-filter');
      // filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    const radioButtonGroup = buttonGroup => {
      buttonGroup.addEventListener('click', event => {
        if (!matchesSelector(event.target, 'span')) {
          return;
        }
        buttonGroup.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      });
    };
    for (let i = 0, len = buttonGroups.length; i < len; i += 1) {
      const buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
  }
};
