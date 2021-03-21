import { ChangeEvent } from 'react';

export interface ISelectProps {
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
