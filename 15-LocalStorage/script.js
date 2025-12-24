const input = document.querySelector('input');
const button = document.querySelector('button');
const items = JSON.parse(localStorage.getItem('items')) || [];
const list = document.querySelector('.list');

function addItem(item) {
  const i = {
    item: item,
    done: false
  }
  items.push(i);
  localStorage.setItem('items', JSON.stringify(items));
  renderItem()
}

function renderItem() {
  list.innerHTML = items.map(item => `
    <li>
      <span>${item.item}</span>
    </li>
  `).join('');
}

button.addEventListener('click', () => {
  const item = input.value;
  if (item) {
    addItem(item);
    input.value = '';
  }
})

renderItem();