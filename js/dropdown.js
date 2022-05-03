import { renderDropdownList } from './interface.js';

/* Compute the html for the dropdown when it's open */
export function displayDropdown(type, list) {
  const listBox = document.getElementById(`listbox-${type}`);
  document.getElementById(`search-${type}`).style.display = 'block';
  document.getElementById(`listboxName-${type}`).style.display = 'none';
  document.getElementById(`dropdown-${type}`).style.width = '667px';
  listBox.innerHTML = renderDropdownList(list);
}

/* Compute the html for the dropdown when it's close */
export function displayCloseDropdown(type) {
  document.getElementById(`search-${type}`).style.display = 'none';
  document.getElementById(`listboxName-${type}`).style.display = 'flex';
  document.getElementById(`dropdown-${type}`).style.width = '135px';
  const listBox = document.getElementById(`listbox-${type}`);
  listBox.innerHTML = '';
}
