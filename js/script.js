// табы
let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsPane = document.querySelectorAll('.tabs__pane');

tabsBtn.forEach(function (element) {

  element.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {

      btn.classList.remove('tabs__btn--active')
    });
    e.currentTarget.classList.add('tabs__btn--active');

    tabsPane.forEach(function (element) {

      element.classList.remove('tabs__pane--show')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__pane--show');

  });
});

// слайдер
let swiper = new Swiper('.hero__swiper', {
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 600,
  loop: true,
});

// аккордеон
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

// бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (element) {

  element.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
});

// поиск
let btnOpen = document.querySelector('.header__formsearch-open');
let btnSearch = document.querySelector('.header__formsearch-search');
let btnClose = document.querySelector('.header__formsearch-close');

btnOpen.addEventListener('click', function () {

  document.querySelector('.header__formsearch').classList.add('header__formsearch--active');
  this.classList.add('active');
});

btnClose.addEventListener('click', function () {

  let form = document.querySelector('.header__formsearch');
  form.classList.remove('header__formsearch--active');
  form.querySelector('input').value = "";
  btnOpen.classList.remove('active');
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let form = document.querySelector('.header__formsearch');

  if (!target.closest('.header__form-container')) {

    form.classList.remove('header__formsearch--active');
    form.querySelector('input').value = "";
    btnOpen.classList.remove('active');
  }
})
