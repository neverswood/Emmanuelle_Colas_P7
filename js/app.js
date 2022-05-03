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

  /* Manufature a tag */
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

/* Updates filters by appliance */
function filterRecipesByAppliances(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === 'appliance') {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = [];
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      let matchAllTags = true;
      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        let applianceMatchTag = recipes[recipesIndex].appliance
          .toLowerCase()
          .indexOf(filterTags[tagsIndex].name.toLowerCase());
        if (applianceMatchTag > -1) {
          break;
        }
        if (applianceMatchTag === -1) {
          matchAllTags = false;
          break;
        }
      }
      if (matchAllTags) {
        results.push(recipes[recipesIndex]);
      }
    }
  }
  return results;
}

/* Updates filters by utensil */
function filterRecipesByUtensils(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === 'utensils') {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = [];
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      let matchAllTags = true;
      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        let utensilMatchTag = -1;

        for (
          let ustensilsIndex = 0;
          ustensilsIndex < recipes[recipesIndex].ustensils.length;
          ++ustensilsIndex
        ) {
          utensilMatchTag = recipes[recipesIndex].ustensils[ustensilsIndex]
            .toLowerCase()
            .indexOf(filterTags[tagsIndex].name.toLowerCase());
          if (utensilMatchTag > -1) {
            break;
          }
        }
        if (utensilMatchTag === -1) {
          matchAllTags = false;
          break;
        }
      }
      if (matchAllTags) {
        results.push(recipes[recipesIndex]);
      }
    }
  }
  return results;
}

/* Updates filters by ingredient */
function filterRecipesByIngredients(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === 'ingredients') {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = [];
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      let matchAllTags = true;

      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        const ingredients = recipes[recipesIndex].ingredients;
        let ingredientMatchTag = -1;
        for (
          let ingredientsIndex = 0;
          ingredientsIndex < ingredients.length;
          ingredientsIndex++
        ) {
          ingredientMatchTag = ingredients[ingredientsIndex].ingredient
            .toLowerCase()
            .indexOf(filterTags[tagsIndex].name.toLowerCase());
          if (ingredientMatchTag > -1) {
            break;
          }
        }
        if (ingredientMatchTag === -1) {
          matchAllTags = false;
          break;
        }
      }
      if (matchAllTags) {
        results.push(recipes[recipesIndex]);
      }
    }
  }
  return results;
}
