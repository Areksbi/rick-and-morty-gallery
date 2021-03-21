import './filters.styles.scss';
import { ChangeEvent } from 'react';
import { ApiRickAndMortyGenderEnum, ApiRickAndMortyStatusEnum } from '../../../enums/api-rick-and-morty.enums';
import Input from '../../@shared/input/input.component';
import Select from '../../@shared/select/select.component';
import Button from '../../@shared/button/button.component';
import { useTranslation } from 'react-i18next';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { ISelectOption } from '../../@shared/select/select.interfaces';

export interface IFilters {
  name: string;
  species: string;
  type: string;
  status: string;
  gender: string;
  setName: (name: string) => void;
  setSpecies: (name: string) => void;
  setType: (name: string) => void;
  setStatus: (name: string) => void;
  setGender: (name: string) => void;
}

const Filters = ({ name, species, type, status, gender, setName, setSpecies, setType, setStatus, setGender }: IFilters) => {
  const { t } = useTranslation(TranslationsEnums.COMMON);
  const statusOptions: ISelectOption[] = [
    {
      label: ApiRickAndMortyStatusEnum.ALIVE,
      value: ApiRickAndMortyStatusEnum.ALIVE,
    },
    {
      label: ApiRickAndMortyStatusEnum.DEAD,
      value: ApiRickAndMortyStatusEnum.DEAD,
    },
    {
      label: ApiRickAndMortyStatusEnum.UNKNOWN,
      value: ApiRickAndMortyStatusEnum.UNKNOWN,
    },
  ];
  const genderOptions: ISelectOption[] = [
    {
      label: ApiRickAndMortyGenderEnum.MALE,
      value: ApiRickAndMortyGenderEnum.MALE,
    },
    {
      label: ApiRickAndMortyGenderEnum.FEMALE,
      value: ApiRickAndMortyGenderEnum.FEMALE,
    },
    {
      label: ApiRickAndMortyGenderEnum.GENDERLESS,
      value: ApiRickAndMortyGenderEnum.GENDERLESS,
    },
    {
      label: ApiRickAndMortyGenderEnum.UNKNOWN,
      value: ApiRickAndMortyGenderEnum.UNKNOWN,
    },
  ];

  const resetAllFilters = (): void => {
    setName(''), setSpecies(''), setType(''), setStatus(''), setGender('');
  };

  return (
    <div className={'filters'}>
      <header>
        <h2 className={'filters__title'}>{t('gallery.filters.title')}</h2>
      </header>
      <Input
        name="name"
        type="text"
        id={'filters__name'}
        value={name}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        label={t('gallery.filters.name')}
      />
      <Input
        name="species"
        type="text"
        id={'filters__species'}
        value={species}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setSpecies(e.target.value)}
        label={t('gallery.filters.species')}
      />
      <Input
        name="type"
        type="text"
        id={'filters__type'}
        value={type}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setType(e.target.value)}
        label={t('gallery.filters.type')}
      />

      <Select
        name="status"
        id={'filters__status'}
        value={status}
        handleChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
        label={t('gallery.filters.status')}
        options={statusOptions}
      />

      <Select
        name="gender"
        id={'filters__gender'}
        value={gender}
        handleChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
        label={t('gallery.filters.gender')}
        options={genderOptions}
      />
      <Button className={'filters__reset'} onClick={resetAllFilters} label={'Reset all filters'} />
    </div>
  );
};

export default Filters;
