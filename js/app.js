import { recipes } from './data/recipes.js';
import { displayRecipes, displayTags } from './interface.js';

export default class App {
  constructor() {
    this.filteredRecipes = recipes;
    this.selectedTags = [];
    this.keyword = '';
  }

  /* Recondition recipes once strained */
  updateFilteredRecipes() {
    if (this.keyword.length < 3) {
      this.filteredRecipes = recipes;
    } else {
      this.filteredRecipes = filterRecipesByKeyword(this.keyword);
    }
    this.filteredRecipes = filterRecipesByAppliances(
      this.filteredRecipes,
      this.selectedTags
    );
    this.filteredRecipes = filterRecipesByUtensils(
      this.filteredRecipes,
      this.selectedTags
    );
    this.filteredRecipes = filterRecipesByIngredients(
      this.filteredRecipes,
      this.selectedTags
    );
    if (this.filteredRecipes.length > 0) {
      displayRecipes(this.filteredRecipes);
    } else {
      const containerRecipe = document.getElementById('container-item');
      containerRecipe.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher 'tarte aux pommes',  'poisson' , etc.";
    }
  }

  /* Determine a keyword */
  setKeyword(keyword) {
    this.keyword = keyword;
    this.updateFilteredRecipes();
  }

  /* Manufacture a tag */
  toggleTag(tag, tagType) {
    const tagIndex = this.selectedTags.findIndex(
      (selectedTag) => selectedTag.name === tag
    );

    if (tagIndex === -1) {
      this.selectedTags.push({
        type: tagType,
        name: tag,
      });
    } else {
      this.selectedTags.splice(tagIndex, 1);
    }
    displayTags(this.selectedTags);
    this.updateFilteredRecipes();
  }
}

/* Updates keyword filters */
function filterRecipesByKeyword(keyword) {
  return recipes.filter(
    (recipe) =>
      recipe.ingredients.some(
        (ingredients) =>
          ingredients.ingredient.toLowerCase().indexOf(keyword.toLowerCase()) >
          -1
      ) &&
      recipe.name.some(
        (name) => name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      ) &&
      recipe.description.some(
        (description) =>
          description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      )
  );
}

/* Updates filters by appliance */
function filterRecipesByAppliances(recipes, tags) {
  const filterTagsAppliances = tags.filter((tag) => tag.type === 'appliance');
  if (filterTagsAppliances.length === 0) {
    return recipes;
  }
  return recipes.filter((recipe) =>
    filterTagsAppliances.every(
      (tag) =>
        recipe.appliance.toLowerCase().indexOf(tag.name.toLowerCase()) > -1
    )
  );
}

/* Updates filters by utensil */
function filterRecipesByUtensils(recipes, tags) {
  const filterTagsUtensils = tags.filter((tag) => tag.type === 'utensils');
  if (filterTagsUtensils.length === 0) {
    return recipes;
  }
  return recipes.filter((recipe) =>
    filterTagsUtensils.every((tag) => recipe.ustensils.indexOf(tag.name) > -1)
  );
}

/* Updates filters by ingredient */
function filterRecipesByIngredients(recipes, tags) {
  const filterTagsIngredients = tags.filter(
    (tag) => tag.type === 'ingredients'
  );

  if (filterTagsIngredients.length === 0) {
    return recipes;
  }
  return recipes.filter((recipe) =>
    filterTagsIngredients.every((filterTag) =>
      recipe.ingredients.some(
        (ingredient) =>
          ingredient.ingredient
            .toLowerCase()
            .indexOf(filterTag.name.toLowerCase()) > -1
      )
    )
  );
}
