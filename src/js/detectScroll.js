const home = document.querySelector('.one')
const fauna = document.querySelector('.two')
const beach = document.querySelector('.three')
const sites = document.querySelector('.four')

window.onscroll = function () {
  var value = Math.round(window.scrollY);

  if (value >= 0 && value <= 520) {
    home.classList.add('section--on')
    fauna.classList.remove('section--on')
    beach.classList.remove('section--on')
    sites.classList.remove('section--on')
  }
  else if (value > 520 && value <= 1180) {
    home.classList.remove('section--on')
    fauna.classList.add('section--on')
    beach.classList.remove('section--on')
    sites.classList.remove('section--on')
  }
  else if (value > 1180 && value <= 2300) {
    home.classList.remove('section--on')
    fauna.classList.remove('section--on')
    beach.classList.add('section--on')
    sites.classList.remove('section--on')
  }
  else if (value > 2300) {
    home.classList.remove('section--on')
    fauna.classList.remove('section--on')
    beach.classList.remove('section--on')
    sites.classList.add('section--on')
  }
};
