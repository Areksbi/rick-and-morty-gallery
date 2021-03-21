import { ApiRickAndMortyGenderEnum, ApiRickAndMortyStatusEnum } from '../../enums/api-rick-and-morty.enums';
import { ISelectOption } from '../../components/@shared/select/select.interfaces';

export const optionsStatus: ISelectOption[] = [
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
export const optionsGender: ISelectOption[] = [
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
