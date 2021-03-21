import { ChangeEvent } from 'react';

export interface IInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  name?: string;
  type?: string;
  value?: string;
}
