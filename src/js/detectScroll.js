const home = document.querySelector('.one')
const playas = document.querySelector('.two')
const sites = document.querySelector('.three')
const about = document.querySelector('.four')
const header = document.querySelector('.header')

window.onscroll = function () {
  var value = Math.round(window.scrollY);
  
  if (value >= 0 && value <= 520) {
    home.classList.add('section--on')
    playas.classList.remove('section--on')
    sites.classList.remove('section--on')
    about.classList.remove('section--on')
    header.classList.remove('header-b')
  }
  else if (value > 520 && value <= 1180) {
    home.classList.remove('section--on')
    playas.classList.add('section--on')
    sites.classList.remove('section--on')
    about.classList.remove('section--on')
    header.classList.add('header-b')
  }
  else if (value > 1180 && value <= 2300) {
    home.classList.remove('section--on')
    playas.classList.remove('section--on')
    sites.classList.add('section--on')
    about.classList.remove('section--on')
  }
  else if (value > 2300) {
    home.classList.remove('section--on')
    playas.classList.remove('section--on')
    sites.classList.remove('section--on')
    about.classList.add('section--on')
  }
};
