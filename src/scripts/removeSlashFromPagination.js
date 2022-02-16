export const removeSlashFromPagination = () => {
  const swiperPagination = document.querySelector('swiper-pagination');
  if (swiperPagination) {
    swiperPagination.innerHTML = swiperPagination.innerHTML.replace(' / ', '');
  }
};
