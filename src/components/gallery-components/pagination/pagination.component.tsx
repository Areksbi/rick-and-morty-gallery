import './pagination.styles.scss';

interface IPaginationProps {
  currentPage: number;
  goToPage: (selectedPage: number) => void;
  pages: number;
  perPage: number;
}

const Pagination = ({
  currentPage,
  goToPage,
  pages,
}: IPaginationProps): JSX.Element => {
  const firstPage = 1;
  const pagesArr = new Array(pages).fill(null).map((_, i: number) => ++i);
  const handlePageClick = (page: number) => {
    if (page === currentPage) {
      return;
    }
    goToPage(page);
  };
  const filterInRangePage = (pageToCheck: number): boolean => {
    const adjacentPageToShow = 3;
    if (pageToCheck === firstPage || pageToCheck === pages) return true;

    if (currentPage === pageToCheck) return true;

    if (
      currentPage < pageToCheck &&
      currentPage + adjacentPageToShow > pageToCheck
    )
      return true;

    if (
      currentPage > pageToCheck &&
      currentPage - adjacentPageToShow < pageToCheck
    )
      return true;

    return false;
  };
  const addEmptyButton = (
    acc: (number | string)[],
    curr: number
  ): (number | string)[] => {
    const lastEl = acc[acc.length - 1];
    if (lastEl === firstPage && curr - 1 > firstPage) {
      acc.push('...');
    }
    if (curr === pages && lastEl !== pages - 1) {
      acc.push('...');
    }
    return [...acc, curr];
  };

  return (
    <section className="pagination">
      {pagesArr
        .filter(filterInRangePage)
        .reduce(addEmptyButton, [])
        .map((page: number | string, i: number) =>
          typeof page === 'string' ? (
            <button
              className={'pagination__button pagination__button--disabled'}
              key={`page-${i}`}
              disabled
            >
              {page}
            </button>
          ) : (
            <button
              className={
                'pagination__button' +
                (page === currentPage ? ' pagination__button--active' : '')
              }
              key={`page-${i}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          )
        )}
    </section>
  );
};

export default Pagination;
