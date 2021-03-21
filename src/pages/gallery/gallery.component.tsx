import React from 'react';
import { useTranslation } from 'react-i18next';

import './gallery.styles.scss';
import { ApiRickAndMorty } from '../../constants/api.constants';
import {
  IApiRickAndMortyCharacters,
  IApiRickAndMortyCharactersResult,
  IApiRickAndMortyInfo,
} from '../../interfaces/api-rick-and-morty.interfaces';
import { QueryParamsConst } from '../../constants/query-params.constants';
import { TranslationsEnums } from '../../enums/translations.enums';
import Card from '../../components/gallery-components/card-character/card-character.component';
import Filters from '../../components/gallery-components/filters/filters.component';
import Pagination from '../../components/gallery-components/pagination/pagination.component';
import useFetch from '../../effects/use-fetch.effect';
import useMediaQuery from '../../effects/use-media-query.effect';
import useQueryParams from '../../effects/use-query-params.effect';

const GalleryPage = (): JSX.Element => {
  const [page, setPage] = useQueryParams(QueryParamsConst.PAGE, '1');
  const [name, setName] = useQueryParams(QueryParamsConst.NAME, '');
  const [species, setSpecies] = useQueryParams(QueryParamsConst.SPECIES, '');
  const [type, setType] = useQueryParams(QueryParamsConst.TYPE, '');
  const [status, setStatus] = useQueryParams(QueryParamsConst.STATUS, '');
  const [gender, setGender] = useQueryParams(QueryParamsConst.GENDER, '');

  const [t] = useTranslation(TranslationsEnums.COMMON);
  const shouldShowDoublePagination = useMediaQuery('(min-width: 1024px)');
  const request = { page, name, species, type, status, gender };
  const res = useFetch<IApiRickAndMortyCharacters>(ApiRickAndMorty.CHARACTER(request));

  const goToPage = (selectedPage: number): void => {
    setPage(selectedPage.toString());
    window.scrollTo(0, 0);
  };
  const onFiltersChange = (setState: (value: string) => void, value: string): void => {
    goToPage(1);
    setState(value);
  };
  const pagination = (info: IApiRickAndMortyInfo | undefined) =>
    info?.pages && info.pages > 1 && <Pagination goToPage={goToPage} perPage={20} pages={info.pages} currentPage={parseInt(page)} />;

  return (
    <div className="gallery">
      <h2 className="gallery__title">{t('gallery.title.value')}</h2>
      <section className={'gallery__filters'}>
        <Filters
          {...request}
          setName={(value: string) => onFiltersChange(setName, value)}
          setSpecies={(value: string) => onFiltersChange(setSpecies, value)}
          setType={(value: string) => onFiltersChange(setType, value)}
          setStatus={(value: string) => onFiltersChange(setStatus, value)}
          setGender={(value: string) => onFiltersChange(setGender, value)}
        />
      </section>
      <section className={'gallery__results'} id={'gallery-results'}>
        {shouldShowDoublePagination && pagination(res?.response?.info)}
        <div className="gallery__card-container">
          {res?.response ? (
            res.response?.results ? (
              res.response.results.map((character: IApiRickAndMortyCharactersResult) => <Card key={character.id} {...character} />)
            ) : (
              <p>{t('gallery.loading.empty')}</p>
            )
          ) : (
            <div>{t('gallery.loading.value')}</div>
          )}
        </div>
        {pagination(res?.response?.info)}
      </section>
    </div>
  );
};

export default GalleryPage;
