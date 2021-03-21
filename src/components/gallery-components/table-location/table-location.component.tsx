import './table-location.styles.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsEnums } from '../../../enums/translations.enums';

interface ITableLocation {
  dimension: string;
  type: string;
  residents: number;
}

const TableLocation = ({ type, dimension, residents }: ITableLocation) => {
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
