const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const onWindowScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    document.querySelector('.js-animated-section').classList.add('active');

    window.removeEventListener('scroll', throttledOnWindowScroll);
  }
};

const throttledOnWindowScroll = _.throttle(onWindowScroll, 300);

window.addEventListener('scroll', throttledOnWindowScroll);
