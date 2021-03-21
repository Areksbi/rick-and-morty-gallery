import { useTranslation } from 'react-i18next';

import './pagination.styles.scss';
import { IPaginationProps } from './pagination.interface';
import { TranslationsEnums } from '../../../enums/translations.enums';

const Pagination = ({ currentPage, goToPage, pages }: IPaginationProps): JSX.Element => {
  const [t] = useTranslation(TranslationsEnums.COMMON);
  const emptyButtonLabel = t('pagination.button.empty');
  const firstPage = 1;
  const pagesArr = new Array(pages).fill(null).map((_, i: number) => ++i);

  const handlePageClick = (page: number) => {
    if (page === currentPage) {
      return;
    }
    goToPage(page);
  };
  const filterInRangePage = (pageToCheck: number): boolean => {
    const adjacentPageToShow = 2;
    if (pageToCheck === firstPage || pageToCheck === pages) return true;

    if (currentPage === pageToCheck) return true;

    if (currentPage < pageToCheck && currentPage + adjacentPageToShow >= pageToCheck) return true;

    if (currentPage > pageToCheck && currentPage - adjacentPageToShow <= pageToCheck) return true;

    return false;
  };
  const addEmptyButton = (acc: (number | string)[], curr: number): (number | string)[] => {
    if (curr === firstPage) {
      return [...acc, curr];
    }

    const lastEl = acc[acc.length - 1];
    if (lastEl === firstPage && curr - 1 > firstPage) {
      acc.push(emptyButtonLabel);
    }
    if (curr === pages && lastEl !== pages - 1) {
      acc.push(emptyButtonLabel);
    }
    return [...acc, curr];
  };

  return (
    <section className="pagination">
      <div className="pagination__container">
        {pagesArr
          .filter(filterInRangePage)
          .reduce(addEmptyButton, [])
          .map((page: number | string, i: number) =>
            typeof page === 'string' ? (
              <button className={'pagination__button pagination__button--disabled'} key={`page-${i}`} disabled>
                {page}
              </button>
            ) : (
              <button
                className={'pagination__button' + (page === currentPage ? ' pagination__button--active' : '')}
                key={`page-${i}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            )
          )}
      </div>
    </section>
  );
};

export default Pagination;
