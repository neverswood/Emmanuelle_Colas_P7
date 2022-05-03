import { displayCloseDropdown, displayDropdown } from './dropdown.js';
import { filterDropdown } from './filter.js';

/* Recover the utensils without duplication */
export function getUtensils(recipes) {
  let ustensilsByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    ustensilsByRecipes.push(recipes[index].ustensils);
  }
  const allUstensils = ustensilsByRecipes.flat();
  return [...new Set(allUstensils)];
}

/* Add events related to the utensil dropdown */
export function bindUtensilsDropdownEventListeners(app) {
  const dropdownUtensils = document.getElementById('listboxName-utensils');
  const chevron = document.getElementById('chevron-utensils');
  const listBox = document.getElementById('listbox-utensils');

  dropdownUtensils.addEventListener('click', () => {
    filterDropdown('utensils');
    const utensils = getUtensils(app.filteredRecipes);
    displayDropdown('utensils', utensils);
  });
  chevron.addEventListener('click', (e) => {
    displayCloseDropdown('utensils');
  });
  listBox.addEventListener('click', (e) => {
    if (!e.target.matches('li')) {
      return;
    }

    app.toggleTag(e.target.textContent, 'utensils');
    displayCloseDropdown('utensils');
  });
}
