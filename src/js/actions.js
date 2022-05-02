/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import addElement from './base';

let draggedItem = null; // drag-элемент (под курсором при перетаскивании)
let selectedItem = null; // selected-элемент (целевой элемент, к-й перемещаем)
let currentItem = null;
let freeSpaceItem = null; // fantom-элемент (свободное место для будущей вставки)
let elemBelow; // below-элемент (над которым находится drag-элемент)

let startX = 0; // коордтната Х (точка старта перемещения)
let startY = 0; // коордтната Y (точка старта перемещения)
let currentX = 0;
let currentY = 0;
let rect;
let left = 0; // координата Y drag-элемента
let top = 0; // координата X drag-элемента

let movingMarker = false; // маркер: drag-элемент в движении
localStorage.setItem('movingMarker', movingMarker);

let height = 0; // высота selected-элемента

export function catchItem(e) { // ПОДХВАТ ЭЛЕМЕНТА
  const target = e.target.closest('.list__item');
  if (!target) {
    return;
  }

  if (e.target.classList.contains('del_cross')) { // если 'click' на крестик - нет подхвата!
    return;
  }

  movingMarker = true; // фиксируем начало перетаскивания (для MutationObserver)
  localStorage.setItem('movingMarker', movingMarker);

  selectedItem = target;
  selectedItem.classList.add('list__item_selected');

  draggedItem = target.cloneNode(true); // создаём drag-элемент
  draggedItem.classList.remove('list__item_selected');
  draggedItem.classList.add('list__item_dragged');

  const width = selectedItem.clientWidth;
  height = selectedItem.clientHeight;

  rect = selectedItem.getBoundingClientRect();
  left = rect.left + 0;
  top = rect.top + 0;
  startX = e.clientX;
  startY = e.clientY;

  draggedItem.style.width = `${width}px`;
  draggedItem.style.height = `${height}px`;
  draggedItem.style.top = `${top}px`;
  draggedItem.style.left = `${left}px`;

  document.body.appendChild(draggedItem);

  freeSpaceItem = document.createElement('div'); // создаём fantom-элемент
  freeSpaceItem.style.width = `${width}px`;
  freeSpaceItem.style.height = `${height}px`;
  freeSpaceItem.classList.add('fantom');
}

export function moveItem(e) { // ПЕРЕТАСКИВАНИЕ ЭЛЕМЕНТА
  try {
    if (!selectedItem) {
      return;
    }
    rect = selectedItem.getBoundingClientRect();
    left = rect.left + 0 + e.clientX - startX;
    top = rect.top + 0 + e.clientY - startY;

    draggedItem.style.top = `${top}px`;
    draggedItem.style.left = `${left}px`;

    currentX = e.clientX;
    currentY = e.clientY;

    draggedItem.hidden = true;
    elemBelow = document.elementFromPoint(currentX, currentY); // определяем below-элемент
    draggedItem.hidden = false;

    if (((!elemBelow) || (!elemBelow.classList.contains('list__item'))) && (currentItem.classList.contains('fantom'))) return;

    if (currentItem !== elemBelow) {
      if (currentItem) {
      // логика обработки процесса "вылета" из below-элемента (удаляем подсветку)
        currentItem.style.background = '';
        freeSpaceItem.remove();
      }
      currentItem = elemBelow;
      if ((currentItem) && (!currentItem.classList.contains('fantom')) && (currentItem.classList.contains('list__item'))) {
      // логика обработки процесса, когда мы "влетаем" в below-элемент
        currentItem.style.background = 'pink';

        addElement(currentItem, freeSpaceItem, currentY); // вставляем fantom-элемент при перетаскивании элемента
      }
    }

    if ((currentItem.closest('.column') === selectedItem.closest('.column')) && (currentY < top)) { // если переставляем элемент в той же колонке, где он находится
      top = rect.top - height + e.clientY - startY; // убрать смещение drag-элемента относительно курсора!
      draggedItem.style.top = `${top}px`; // пересчёт координат drag-элемента при вставке фантомного поля в его родительский контейнер
      console.log('пересчёт координат drag-элемента'); // КОНТРОЛЬНАЯ ТОЧКА
    }
  } catch (err) {
    console.log(err.message);
    movingMarker = false; // фиксируем конец перетаскивания (для MutationObserver)
    localStorage.setItem('movingMarker', movingMarker);
  }
}

export function dropItem() { // СБРОС ЭЛЕМЕНТА
  if (!selectedItem) {
    return;
  }

  draggedItem.style.display = 'none';
  const changingItem = currentItem;

  freeSpaceItem.remove();

  addElement(changingItem, selectedItem, currentY); // вставляем selected-элемент на новое место

  selectedItem.classList.remove('list__item_selected');
  selectedItem = null;
  draggedItem.remove();
  draggedItem = null;
  currentItem.style.background = '';
  console.clear();

  movingMarker = false; // фиксируем конец перетаскивания (для MutationObserver)
  localStorage.setItem('movingMarker', movingMarker);
}

export function leaveItem() {
  // при уходе курсора за границы контейнера - отменяем перенос
  if (!selectedItem) {
    return;
  }

  document.body.removeChild(draggedItem);
  selectedItem.classList.remove('list__item_selected');
  selectedItem = null;
  draggedItem = null;
  currentItem.style.background = '';
  freeSpaceItem.remove();

  movingMarker = false; // фиксируем конец перетаскивания (для MutationObserver)
  localStorage.setItem('movingMarker', movingMarker);
}
