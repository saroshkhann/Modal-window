'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

const windowbtn = document.querySelector('.window__btns');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event delegation
windowbtn.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    openModal();
  }

  // if (e.target.classList.contains('btn')) {
  //   openModal();
  // }
});

closeBtn.addEventListener('click', closeModal);
