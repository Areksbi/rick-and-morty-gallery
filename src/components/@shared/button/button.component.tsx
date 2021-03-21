import './button.styles.scss';

export interface IButton {
  className: string;
  label: string;
  onClick: () => void;
}

const Button = ({ className, label, onClick }: IButton) => (
  <button className={'button ' + className} onClick={onClick}>
    {label}
  </button>
);

export default Button;
