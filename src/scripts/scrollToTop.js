/* eslint-disable no-multi-assign */
export const scrollToTop = () => {
  const offset = 150;
  const progressWrap = document.querySelector('.progress-wrap');
  const progressPath = document.querySelector('.progress-wrap path');
  const pathLength = progressPath.getTotalLength();
  const updateProgress = () => {
    const scroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  if (progressWrap) {
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'none';

    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear';

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > offset) {
        progressWrap.classList.add('active-progress');
      } else {
        document
          .querySelector('.progress-wrap')
          .classList.remove('active-progress');
      }
    });
    progressWrap.addEventListener('click', event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    });
  }
};
