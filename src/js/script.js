const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});



const counters = document.querySelectorAll ('.skill-percent__number'),
      lines = document.querySelectorAll ('.skill-percent__scale span');
      counters.forEach((item, i) =>{
        lines[i].style.width = item.innerHTML;
      });