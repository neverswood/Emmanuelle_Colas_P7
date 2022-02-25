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
