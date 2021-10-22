const darkBtn = document.querySelector('.dark-mode');
const body = document.querySelector('body');
const sectionOne = document.querySelector('#hero-section');
const navigation = document.querySelector('header');

darkBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode-clr');
});

// sticky nav

const stickyNav = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting) navigation.classList.add('sticky');
  else navigation.classList.remove('sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
};

const sectionOneObserver = new IntersectionObserver(stickyNav, obsOptions);

sectionOneObserver.observe(sectionOne);

// revealing sections

const revealSection = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const obsOps = {
  root: null,
  threshold: 0.1,
  rootMargin: '200px',
};

const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection, obsOps);

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading
const targetImg = document.querySelectorAll('img[data-src]');

const lazyImg = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

targetImg.forEach(img => imgObserver.observe(img));
