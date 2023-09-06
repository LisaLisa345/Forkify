import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultsView from './views/searchResultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
// module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) loading recipe
    await model.loadRecipe(id);

    //2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // recipeView.renderError(`${err} 💥💥💥`);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1)Get search query
    searchResultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3)Render results
    // searchResultsView.render(model.state.search.results);
    console.log(model.getSearchResultsPage());

    searchResultsView.render(model.getSearchResultsPage(2));
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
