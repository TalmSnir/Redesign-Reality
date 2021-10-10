const headerContainer = document.querySelector('.header__container');
const contactSection = document.querySelector('.contact__container');

const toggleMenu = e => {
  if (e.target.classList.contains('header__menu__icon')) {
    headerContainer.classList.toggle('show');
    e.target.children[0].classList.toggle('fa-bars');
    e.target.children[0].classList.toggle('fa-times');
  }
};
const paintSplash = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(contactSection);
    }
  });
};
headerContainer.addEventListener('click', toggleMenu);
const observer = new IntersectionObserver(paintSplash, { threshold: 0.7 });
observer.observe(contactSection);

console.log(contactSection);
