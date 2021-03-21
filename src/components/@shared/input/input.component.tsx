import './input.styles.scss';
import { IInputProps } from './input.interfaces';

const Input = ({ handleChange, label, id, ...otherProps }: IInputProps) => (
  <div className="input">
    <input className="input__field" {...otherProps} onChange={handleChange} />
    {label && (
      <label htmlFor={id} className={`${otherProps.value?.length ? 'input__label--shrink' : ''} input__label`}>
        {label}
      </label>
    )}
  </div>
);

export default Input;
