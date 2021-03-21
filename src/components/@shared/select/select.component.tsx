import './select.styles.scss';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsEnums } from '../../../enums/translations.enums';

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

const Select = ({ handleChange, label, options, ...otherProps }: ISelect) => {
  const { t } = useTranslation(TranslationsEnums.COMMON);
  return (
    <div className="select">
      <select className="select__field" onChange={handleChange} {...otherProps}>
        <option className="select__option" value="">
          {t('select.option.all')}
        </option>
        {options.map((option: ISelectOption, i: number) => (
          <option
            key={`${otherProps.id}-${i}`}
            className="select__option"
            value={option.value}
          >
            {option.label}
          </option>
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
};

export default Select;
