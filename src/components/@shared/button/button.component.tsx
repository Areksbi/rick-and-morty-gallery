import './button.styles.scss';
import { IButtonProps } from './button.interfaces';

const Button = ({ className, label, onClick }: IButtonProps) => (
  <button className={'button ' + className} onClick={onClick}>
    {label}
  </button>
);

export default Button;
