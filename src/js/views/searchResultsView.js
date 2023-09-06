import View from './View';
import icons from '../../img/icons.svg';

class searchResultsView extends View {
  _parentEl = document.querySelector('.search-results .results');
  _errorMessage = `No recipes found for your query! Please try again :)`;
  _message = '';

  // #data;
  // #errorMessage = `ничего нет, идите в жж`;
  // #message = '';
  // render(data) {
  //   this.#data = data;
  //   const markup = this.#data.map(this.#generateMarkup.bind(this)).join('');
  //   this.#clear();
  //   this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  // }
  // #clear() {
  //   this.#parentEl.innerHTML = '';
  // }
  // renderSpinner() {
  //   const spinnerMarkup = `
  //       <div class="spinner">
  //       <svg>
  //         <use href="${icons}#icon-loader"></use>
  //       </svg>
  //     </div>
  // `;
  //   this.#clear();
  //   this.#parentEl.insertAdjacentHTML('afterBegin', spinnerMarkup);
  // }
  // renderError(message = this.#errorMessage) {
  //   const markup = `
  //     <div class="error">
  //     <div>
  //       <svg>
  //         <use href="${icons}#icon-alert-triangle"></use>
  //       </svg>
  //     </div>
  //     <p>${message}</p>
  //   </div>
  //   `;
  //   this.#clear();
  //   this.#parentEl.insertAdjacentHTML('afterBegin', markup);
  // }
  // renderMessage(message = this.#message) {
  //   const markup = `
  //     <div class="message">
  //     <div>
  //       <svg>
  //         <use href="${icons}#icon-smile"></use>
  //       </svg>
  //     </div>
  //     <p>${message}</p>
  //   </div>
  //   `;
  //   this.#clear();
  //   this.#parentEl.insertAdjacentHTML('afterBegin', markup);
  // }
  // addHandlerRender(handler) {
  //   ['hashchange', 'load'].forEach(el => window.addEventListener(el, handler));
  // }
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
