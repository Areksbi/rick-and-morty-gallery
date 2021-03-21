export interface IPaginationProps {
  currentPage: number;
  goToPage: (selectedPage: number) => void;
  pages: number;
}
