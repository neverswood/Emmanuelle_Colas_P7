import { displayDropdown } from "./dropdown.js";

export function getAppliances(recipes) {
  let applianceByRecipes = [];
  recipes.forEach((recipes) => applianceByRecipes.push(recipes.appliance));

  const allAppliances = applianceByRecipes.flat();

  return [...new Set(allAppliances)];
}

export function bindAppliancesDropdownEventListeners(app) {
  const dropdownAppliances = document.getElementById("listboxName-appliances");
  dropdownAppliances.addEventListener("click", () => {
    const appliances = getAppliances(app.filteredRecipes);
    displayDropdown("appliances", appliances);
  });
}
