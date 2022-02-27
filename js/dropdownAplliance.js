import { displayCloseDropdown, displayDropdown } from "./dropdown.js";
import { filterDropdown } from "./filter.js";

export function getAppliances(recipes) {
  let applianceByRecipes = [];
  recipes.forEach((recipes) => applianceByRecipes.push(recipes.appliance));

  const allAppliances = applianceByRecipes.flat();

  return [...new Set(allAppliances)];
}

export function bindAppliancesDropdownEventListeners(app) {
  const dropdownAppliances = document.getElementById("listboxName-appliances");
  const chevron = document.getElementById("chevron-appliances");
  const listBox = document.getElementById("listbox-appliances");

  dropdownAppliances.addEventListener("click", () => {
    filterDropdown("appliances");
    const appliances = getAppliances(app.filteredRecipes);
    displayDropdown("appliances", appliances);
  });
  chevron.addEventListener("click", () => {
    displayCloseDropdown("appliances");
  });
  listBox.addEventListener("click", (e) => {
    if (!e.target.matches("li")) {
      return;
    }

    app.toggleTag(e.target.textContent, "appliance");
    displayCloseDropdown("appliances");
  });
}
