import './select.styles.scss';
import { ISelectOption, ISelectProps } from './select.interfaces';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { useTranslation } from 'react-i18next';

const Select = ({ handleChange, label, options, ...otherProps }: ISelectProps) => {
  const { t } = useTranslation(TranslationsEnums.COMMON);

  return (
    <div className="select">
      <select className="select__field" onChange={handleChange} {...otherProps}>
        <option className="select__option" value="">
          {t('select.option.all')}
        </option>
        {options.map((option: ISelectOption, i: number) => (
          <option key={`${otherProps.id}-${i}`} className="select__option" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {label ? (
        <label htmlFor={otherProps.id} className={`${otherProps.value?.length ? 'select__label--shrink' : ''} select__label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Select;
