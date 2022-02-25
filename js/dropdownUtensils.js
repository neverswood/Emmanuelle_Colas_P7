import { displayDropdown } from "./dropdown.js";

export function getUtensils(recipes) {
  let ustensilsByRecipes = [];
  recipes.forEach((recipes) => ustensilsByRecipes.push(recipes.ustensils));
  const allUstensils = ustensilsByRecipes.flat();
  return [...new Set(allUstensils)];
}

export function bindUtensilsDropdownEventListeners(app) {
  const dropdownUtensils = document.getElementById("listboxName-utensils");
  dropdownUtensils.addEventListener("click", () => {
    const utensils = getUtensils(app.filteredRecipes);
    displayDropdown("utensils", utensils);
  });
}
