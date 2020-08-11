export const checkHeader = () => {
  let current = window.location.pathname;
  let head = document.querySelector('header');
  if (current === '/' || current === '/home') {
    head.classList.add('cover-header');
  } else head.classList.remove('cover-header');
};
