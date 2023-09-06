import View from './View';
import icons from '../../img/icons.svg';

class searchResultsView extends View {
  _parentEl = document.querySelector('.search-results .results');
  _errorMessage = `No recipes found for your query! Please try again :)`;
  _message = '';
  
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(el) {
    return `
        <li class="preview">
          <a class="preview__link" href="#${el.id}">
          <figure class="preview__fig">
              <img src="${el.image}" alt="${el.titile}" />
          </figure>
          <div class="preview__data">
              <h4 class="preview__title">
              ${el.title}...
              </h4>
              <p class="preview__publisher">${el.publisher}</p>
          </div>
          </a>
      </li>
          `;
  }
}

export default new searchResultsView();
