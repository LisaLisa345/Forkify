import View from './View';
import icons from '../../img/icons.svg';

class searchResultsView extends View {
  _parentEl = document.querySelector('.search-results .results');
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
    // debugger;
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(el) {
    return `
        <li class="preview">
          <a class="preview__link preview__link--active" href="#${el.id}">
          <figure class="preview__fig">
              <img src="${el.image}" alt="Test" />
          </figure>
          <div class="preview__data">
              <h4 class="preview__title">
              ${el.title}...
              </h4>
              <p class="preview__publisher">${el.publisher}</p>
              <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
          </a>
      </li>
          `;
  }
}

export default new searchResultsView();
