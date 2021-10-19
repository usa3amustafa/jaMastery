const darkBtn = document.querySelector('.dark-mode');
const body = document.querySelector('body');

darkBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode-clr');
});
