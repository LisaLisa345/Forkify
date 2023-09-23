import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPge = +btn.dataset.goto;

      handler(goToPge);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const arr = [curPage, numPages];
    // const numPages =
    //page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateBtns('right', arr);
    }

    //Last page
    if (curPage === numPages) {
      return this._generateBtns('left', arr);
    }
    //Other page
    if (curPage !== 1 && this._data.page < numPages) {
      return this._generateBtns('2btns', arr);
    }
    //page 1, and there are no other pages
    return '';
  }

  _generateBtns(btn, page) {
    const rightBtn = `<button data-goto="${
      page[0] + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${page[0] + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> `;

    const leftBtn = `<button data-goto="${
      page[0] - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${page[0] - 1} </span>
    </button>`;

    const numbers = `<button class="btn--inline">${page[0]}</button>`;

    if (btn === 'right') return numbers + rightBtn;
    if (btn === 'left') return leftBtn + numbers;
    if (btn === '2btns') return leftBtn + numbers + rightBtn;
  }
}

export default new PaginationView();
