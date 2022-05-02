/* eslint-disable linebreak-style */
/* eslint-disable max-len */

export default function addElement(targetElement, appendingElement, currentY) { // ВСТАВКА drag и fantom-элементов
  const parent = targetElement.parentNode;
  const ItemCenterY = targetElement.getBoundingClientRect().top + targetElement.offsetHeight / 2;

  if (!targetElement) return;

  if (parent.classList.contains('list')) { // вставка элемента рядом с уже существующим
    if (Math.abs(currentY) <= Math.abs(ItemCenterY)) {
      targetElement.before(appendingElement);
    } else {
      targetElement.after(appendingElement);
    }
  }

  if ((targetElement.classList.contains('list')) && (targetElement.innerHTML === '')) { // вставка элемента в пустой контейнер .list
    targetElement.prepend(appendingElement);
  }
}

export function addNewItem(element) { // ВСТАВКА НОВОГО ЭЛЕМЕНТА рядом с уже существующим
  const { target } = element;
  if (!target) return;
  if (target.classList.contains('add_card')) {
    const listElement = target.previousSibling; // поиск соседнего элемента .list
    listElement.insertAdjacentHTML('afterbegin',
      `<div class="list__item">
      NewItem.
    <div class="del_cross">&#x2716</div>
    </div>`);
  }
}

export function deleteItem(element) { // УДАЛЕНИЕ ЭЛЕМЕНТА
  const { target } = element;
  if (target.classList.contains('del_cross')) {
    target.parentNode.remove();
  }
}
