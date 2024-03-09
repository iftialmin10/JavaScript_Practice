import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // Publisher
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkupButtonRight() {
    const curPage = this._data.page;
    return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
              </svg>
          </button>
      `;
  }

  _generateMarkupButtonLeft() {
    const curPage = this._data.page;
    return `
  <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
`;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButtonRight();
      // return `
      // <button class="btn--inline pagination__btn--next">
      //           <span>Page ${curPage + 1}</span>
      //           <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-right"></use>
      //         </svg>
      //     </button>
      // `;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButtonLeft();
      // return `
      //     <button class="btn--inline pagination__btn--prev">
      //           <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-left"></use>
      //           </svg>
      //           <span>Page ${curPage - 1}</span>
      //         </button>
      // `;
    }

    // Other page
    if (curPage < numPages) {
      return [
        this._generateMarkupButtonLeft(),
        this._generateMarkupButtonRight(),
      ];

      //   return `
      //     <button class="btn--inline pagination__btn--prev">
      //           <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-left"></use>
      //           </svg>
      //           <span>Page ${curPage - 1}</span>
      //         </button>
      //         <button class="btn--inline pagination__btn--next">
      //         <span>Page ${curPage + 1}</span>
      //         <svg class="search__icon">
      //           <use href="${icons}#icon-arrow-right"></use>
      //       </svg>
      //   </button>
      // `;
    }
    // Page 1 and there are no other pages
    return '';
  }
}

export default new paginationView();
