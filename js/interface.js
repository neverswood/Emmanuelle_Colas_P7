function renderIngredients(ingredients) {
  let item = "";
  for (let index = 0; index < ingredients.length; index++) {
    item += `<li>${ingredients[index].ingredient}: 
          <span>${ingredients[index].quantity ?? ""} ${
      ingredients[index].unit ?? ""
    }</span></li>`;
  }
  return item;
}

export function renderRecipes(recipes) {
  let result = "";
  for (let index = 0; index < recipes.length; index++) {
    result += renderRecipe(recipes[index]);
  }
  return result;
}

export function renderRecipe(recipe) {
  return `
      <div class="col-md-4">
        <div class="container-item__recipe" id="${recipe.id}">
          <div class="divEmpty">
          </div>
          <div class="recipe">
            <div class="recipe__header">
              <h3>${recipe.name}</h3>
              <span><i class="far fa-clock"></i> ${recipe.time} min</span>
            </div>
            <div class="recipe__explanation">
              <div class="recipe__ingrédients">
                ${renderIngredients(recipe.ingredients)}
              </div>
              <div class="recipe__description">
                ${recipe.description}...
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

export function displayRecipes(recipes) {
  const containerRecipe = document.getElementById("container-item");
  containerRecipe.innerHTML = renderRecipes(recipes);
}

export function renderDropdownList(items) {
  let result = "";
  for (let index = 0; index < items.length; index++) {
    result += `<li class="listbox">${items[index]}</li>`;
  }
  return `<ul>${result}</ul>`;
}

export function renderTag(tag) {
  return `
    <div class="tag ${tag.type}" data-tag="${tag.name}">
      ${tag.name}
      <span class="spanTag" ><i class="far fa-times-circle circle"></i></span>
    </div>
    `;
}

export function renderTags(tags) {
  let result = "";
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    result += renderTag(tags[tagsIndex]);
  }
  return result;
}

export function displayTags(tags) {
  const tag = document.getElementById("tag");
  tag.innerHTML = renderTags(tags);
}
