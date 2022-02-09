/* eslint-disable no-undef */
export const loadingPace = () => {
  const preloader = document.querySelector('#preloader');
  const loadingText = document.querySelector('.loading-text');

  const addDoneClass = () => {
    preloader.classList.add('isdone');
    loadingText.classList.add('isdone');
  };
  Pace.on('done', () => {
    addDoneClass();
  });
  if (document.querySelector('body').classList.contains('pace-done')) {
    addDoneClass();
  }
  document.addEventListener('load', () => {
    addDoneClass();
  });
};
