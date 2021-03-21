import { ISelectOption } from '../../@shared/select/select.interfaces';

export interface IFiltersProps {
  gender: string;
  name: string;
  species: string;
  status: string;
  type: string;

  optionsGender: ISelectOption[];
  optionsStatus: ISelectOption[];

  setGender: (gender: string) => void;
  setName: (name: string) => void;
  setSpecies: (species: string) => void;
  setStatus: (status: string) => void;
  setType: (type: string) => void;
}
