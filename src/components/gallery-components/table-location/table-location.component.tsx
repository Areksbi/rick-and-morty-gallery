import './table-location.styles.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITableLocationProps } from './table-location.interfaces';
import { TranslationsEnums } from '../../../enums/translations.enums';

const TableLocation = ({ type, dimension, residents }: ITableLocationProps) => {
  const [t] = useTranslation(TranslationsEnums.COMMON);
  return (
    <table className={'table-location'}>
      <tbody>
        <tr>
          <td>{t('location.type.label')}</td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>{t('location.dimension.label')}</td>
          <td>{dimension}</td>
        </tr>
        <tr>
          <td>{t('location.residents.label')}</td>
          <td>{residents}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableLocation;
