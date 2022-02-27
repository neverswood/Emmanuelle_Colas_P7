import { recipes } from "./data/recipes.js";
import { displayRecipes, displayTags } from "./interface.js";

export default class App {
  constructor() {
    this.filteredRecipes = recipes;
    this.selectedTags = [];
    this.keyword = "";
  }

  updateFilteredRecipes() {
    if (this.keyword.length < 3) {
      this.filteredRecipes = recipes;
    } else {
      this.filteredRecipes = filterRecipesByKeyword(this.keyword);
    }
    if (this.filteredRecipes.length > 0) {
      displayRecipes(this.filteredRecipes);
    } else {
      const containerRecipe = document.getElementById("container-item");
      containerRecipe.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher 'tarte aux pommes',  'poisson' , etc.";
    }
  }

  setKeyword(keyword) {
    this.keyword = keyword;
    this.updateFilteredRecipes();
  }

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

function filterRecipesByKeyword(keyword) {
  let results = [];
  for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
    const ingredients = recipes[recipesIndex].ingredients;
    let ingredientMatchKeyword = false;
    for (
      let ingredientsIndex = 0;
      ingredientsIndex < ingredients.length;
      ingredientsIndex++
    ) {
      if (
        ingredients[ingredientsIndex].ingredient
          .toLowerCase()
          .indexOf(keyword.toLowerCase()) !== -1
      ) {
        ingredientMatchKeyword = true;
      }
    }
    const nameMatchKeyword =
      recipes[recipesIndex].name
        .toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1;
    const descriptionMatchKeyword =
      recipes[recipesIndex].description
        .toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1;

    if (ingredientMatchKeyword || nameMatchKeyword || descriptionMatchKeyword) {
      results.push(recipes[recipesIndex]);
    }
  }

  return results;
}
