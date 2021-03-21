import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import './filters.styles.scss';
import { IFiltersProps } from './filters.interfaces';
import { TranslationsEnums } from '../../../enums/translations.enums';
import Button from '../../@shared/button/button.component';
import Input from '../../@shared/input/input.component';
import Select from '../../@shared/select/select.component';

const Filters = ({
  name,
  species,
  type,
  status,
  gender,
  optionsGender,
  optionsStatus,
  setName,
  setSpecies,
  setType,
  setStatus,
  setGender,
}: IFiltersProps) => {
  const [t] = useTranslation(TranslationsEnums.COMMON);

  const resetAllFilters = (): void => {
    setName('');
    setSpecies('');
    setType('');
    setStatus('');
    setGender('');
  };

  return (
    <div className={'filters'}>
      <header>
        <h2 className={'filters__title'}>{t('gallery.filters.title')}</h2>
      </header>
      <Input
        type="text"
        id={'filters__name'}
        value={name}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        label={t('gallery.filters.name')}
      />
      <Input
        type="text"
        id={'filters__species'}
        value={species}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setSpecies(e.target.value)}
        label={t('gallery.filters.species')}
      />
      <Input
        type="text"
        id={'filters__type'}
        value={type}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setType(e.target.value)}
        label={t('gallery.filters.type')}
      />
      <Select
        id={'filters__status'}
        value={status}
        handleChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
        label={t('gallery.filters.status')}
        options={optionsStatus}
      />
      <Select
        id={'filters__gender'}
        value={gender}
        handleChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
        label={t('gallery.filters.gender')}
        options={optionsGender}
      />
      <Button className={'filters__reset'} onClick={resetAllFilters} label={'Reset all filters'} />
    </div>
  );
};

export default Filters;
