import { displayCloseDropdown, displayDropdown } from './dropdown.js';
import { filterDropdown } from './filter.js';

/* Recover the ingredients without duplication */
function getIngredients(recipes) {
  let ingredientByRecipes = [];
  recipes.map((recipes) => {
    const ingredients = recipes.ingredients;
    ingredients.forEach((ingredients) => {
      ingredientByRecipes.push(ingredients.ingredient);
    });
  });
  const ingredient = ingredientByRecipes.flat();
  return [...new Set(ingredient)];
}

/* Add events to the ingredient dropdown */
export function bindIngredientsDropdownEventListeners(app) {
  const dropdownIngredients = document.getElementById(
    'listboxName-ingredients'
  );
  const chevron = document.getElementById('chevron-ingredients');
  const listBox = document.getElementById('listbox-ingredients');

  dropdownIngredients.addEventListener('click', (e) => {
    filterDropdown('ingredients');
    const ingredients = getIngredients(app.filteredRecipes);
    displayDropdown('ingredients', ingredients);
  });
  chevron.addEventListener('click', () => {
    displayCloseDropdown('ingredients');
  });
  listBox.addEventListener('click', (e) => {
    if (!e.target.matches('li')) {
      return;
    }
    app.toggleTag(e.target.textContent, 'ingredients');

    displayCloseDropdown('ingredients');
  });
}
