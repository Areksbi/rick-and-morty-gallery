import './input.styles.scss';
import { ChangeEvent } from 'react';

interface IInput {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  name?: string;
  type?: string;
  value?: string;
}

const Input = ({ handleChange, label, ...otherProps }: IInput) => (
  <div className="input">
    <input className="input__field" {...otherProps} onChange={handleChange} />
    {label ? (
      <label
        htmlFor={otherProps.id}
        className={`${
          otherProps.value?.length ? 'input__label--shrink' : ''
        } input__label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Input;
