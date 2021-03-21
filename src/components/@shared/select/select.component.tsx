import './select.styles.scss';
import { ChangeEvent } from 'react';

interface ISelect {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  label: string;
  options: ISelectOption[];
  name?: string;
  value?: string;
}

export interface ISelectOption {
  label: string;
  value: string;
}

const Select = ({ handleChange, label, options, ...otherProps }: ISelect) => (
  <div className="select">
    <select className="select__field" onChange={handleChange} {...otherProps}>
      <option value="">All</option>
      {options.map((option: ISelectOption) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
    {label ? (
      <label
        htmlFor={otherProps.id}
        className={`${
          otherProps.value?.length ? 'select__label--shrink' : ''
        } select__label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Select;
