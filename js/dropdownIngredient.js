import { displayCloseDropdown, displayDropdown } from "./dropdown.js";

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

export function bindIngredientsDropdownEventListeners(app) {
  const dropdownIngredients = document.getElementById(
    "listboxName-ingredients"
  );
  const chevron = document.getElementById("chevron-ingredients");

  dropdownIngredients.addEventListener("click", (e) => {
    const ingredients = getIngredients(app.filteredRecipes);
    displayDropdown("ingredients", ingredients);
  });
  chevron.addEventListener("click", () => {
    displayCloseDropdown("ingredients");
  });
}
