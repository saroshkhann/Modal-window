'use strict';

const btns = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);
