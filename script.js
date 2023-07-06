const pagesLink = document.querySelector('a[href="#pages"]');
pagesLink.addEventListener('click', (e) => {
  e.preventDefault();
  const pagesSection = document.querySelector('#pages');
  pagesSection.scrollIntoView({ behavior: 'smooth' });
});

const contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  const contactSection = document.querySelector('#contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

const aboutLink = document.querySelector('a[href="#about"]');
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const secureLink = document.querySelector('a[href="#secure"]');
secureLink.addEventListener('click', (e) => {
  e.preventDefault();
  const secureSection = document.querySelector('#secure');
  secureSection.scrollIntoView({ behavior: 'smooth' });
});