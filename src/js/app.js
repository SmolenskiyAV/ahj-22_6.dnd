/* eslint-disable max-len */
import {
  catchItem, moveItem, dropItem, leaveItem,
} from './actions';

import {
  addNewItem, deleteItem,
} from './base';

document.addEventListener('DOMContentLoaded', () => { // страница загружена!!!
  if (!localStorage.getItem('newContent')) return;

  const defaultContent = document.querySelector('.content'); // сохраняемый контент
  defaultContent.innerHTML = '';
  defaultContent.insertAdjacentHTML('afterbegin', `${localStorage.getItem('newContent')}`); // вывод ранее сохранённого контента (учёт изменений)
});

const contentBlock = document.querySelector('.content'); // сохраняемый контент

const mutationObserver = new MutationObserver((mutations) => { // объект изменений HTML-страницы
  mutations.forEach(() => {
    const movingMarker = localStorage.getItem('movingMarker');
    if (movingMarker === 'true') return; // пока drag-элемент в движении - изменения contentBlock не сохраняем

    const contentCurrent = document.querySelector('.content'); // актуализация изменений
    const mutatedContent = contentCurrent.innerHTML;
    localStorage.setItem('newContent', mutatedContent);
  });
});

mutationObserver.observe(contentBlock, { // Запускаем наблюдение за изменениями в <main>-элементе страницы
  characterData: true,
  childList: true,
  subtree: true,
  characterDataOldValue: true,
});

document.addEventListener('mousedown', catchItem);

document.addEventListener('mousemove', moveItem);

document.addEventListener('mouseup', dropItem);

document.body.addEventListener('mouseleave', leaveItem);

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add_card')) {
    addNewItem(e);
  } else {
    deleteItem(e);
  }
});
