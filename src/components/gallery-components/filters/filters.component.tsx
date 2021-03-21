import './filters.styles.scss';
import { ChangeEvent } from 'react';
import {
  ApiRickAndMortyGenderEnum,
  ApiRickAndMortyStatusEnum,
} from '../../../enums/api-rick-and-morty.enums';
import Input from '../../@shared/input/input.component';

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

const Filters = ({
  name,
  species,
  type,
  status,
  gender,
  setName,
  setSpecies,
  setType,
  setStatus,
  setGender,
}: IFilters) => {
  return (
    <div className={'filters'}>
      <header>
        <h2 className={'filters__title'}>Filters</h2>
      </header>
      <Input
        name="name"
        type="text"
        id={'filters__name'}
        value={name}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        label="Name"
      />
      <Input
        name="species"
        type="text"
        id={'filters__species'}
        value={species}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSpecies(e.target.value)
        }
        label="Species"
      />
      <Input
        name="type"
        type="text"
        id={'filters__type'}
        value={type}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setType(e.target.value)
        }
        label="Type"
      />

      <label htmlFor={'filters__status'}>Status:</label>
      <select
        id={'filters__status'}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setStatus(e.target.value)
        }
      >
        <option value="">All</option>
        <option value={ApiRickAndMortyStatusEnum.ALIVE}>
          {ApiRickAndMortyStatusEnum.ALIVE}
        </option>
        <option value={ApiRickAndMortyStatusEnum.DEAD}>
          {ApiRickAndMortyStatusEnum.DEAD}
        </option>
        <option value={ApiRickAndMortyStatusEnum.UNKNOWN}>
          {ApiRickAndMortyStatusEnum.UNKNOWN}
        </option>
      </select>

      <label htmlFor={'filters__gender'}>Gender:</label>
      <select
        id={'filters__gender'}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setGender(e.target.value)
        }
      >
        <option value="">All</option>
        <option value={ApiRickAndMortyGenderEnum.MALE}>
          {ApiRickAndMortyGenderEnum.MALE}
        </option>
        <option value={ApiRickAndMortyGenderEnum.FEMALE}>
          {ApiRickAndMortyGenderEnum.FEMALE}
        </option>
        <option value={ApiRickAndMortyGenderEnum.GENDERLESS}>
          {ApiRickAndMortyGenderEnum.GENDERLESS}
        </option>
        <option value={ApiRickAndMortyGenderEnum.UNKNOWN}>
          {ApiRickAndMortyGenderEnum.UNKNOWN}
        </option>
      </select>
    </div>
  );
};

export default Filters;
