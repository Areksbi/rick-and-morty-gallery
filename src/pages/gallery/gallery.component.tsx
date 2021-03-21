import React, { useState } from 'react';

import './gallery.styles.scss';
import Card from '../../components/gallery-components/card-character/card-character.component';
import useFetch from '../../effects/use-fetch.effect';
import Pagination from '../../components/gallery-components/pagination/pagination.component';
import useQueryParams from '../../effects/use-query-params.effect';
import { ApiRickAndMorty } from '../../constants/api.constants';
import {
  IApiRickAndMorty,
  IApiRickAndMortyResult,
} from '../../interfaces/api-rick-and-morty.interfaces';
import { ITranslation } from '../../interfaces/core.interfaces';
import { QueryParamsConst } from '../../constants/query-params.constants';
import Filters from '../../components/gallery-components/filters/filters.component';

const GalleryPage = ({ t }: ITranslation): JSX.Element => {
  const [pageParam, setPageParam] = useQueryParams(QueryParamsConst.PAGE, '');
  const [name, setName] = useQueryParams(QueryParamsConst.NAME, '');
  const [species, setSpecies] = useQueryParams(QueryParamsConst.SPECIES, '');
  const [type, setType] = useQueryParams(QueryParamsConst.TYPE, '');
  const [status, setStatus] = useQueryParams(QueryParamsConst.STATUS, '');
  const [gender, setGender] = useQueryParams(QueryParamsConst.GENDER, '');

  const [page, setPage] = useState(parseInt(pageParam || '1', 10));
  const res = useFetch<IApiRickAndMorty>(
    ApiRickAndMorty.CHARACTER({
      page: page.toString(),
      name,
      species,
      type,
      status,
      gender,
    })
  );

  const goToPage = (selectedPage: number) => {
    setPage(selectedPage);
    setPageParam(selectedPage.toString());
    window.scrollTo(0, 0);
  };
  const onFiltersChange = (
    setState: (value: string) => void,
    value: string
  ): void => {
    goToPage(1);
    setState(value);
  };

  return (
    <div className="gallery">
      <h2 className="gallery__title">{t('gallery.title.value')}</h2>
      <section className={'gallery__filters'}>
        <Filters
          name={name}
          species={species}
          type={type}
          status={status}
          gender={gender}
          setName={(value: string) => onFiltersChange(setName, value)}
          setSpecies={(value: string) => onFiltersChange(setSpecies, value)}
          setType={(value: string) => onFiltersChange(setType, value)}
          setStatus={(value: string) => onFiltersChange(setStatus, value)}
          setGender={(value: string) => onFiltersChange(setGender, value)}
        />
      </section>
      {res?.response || !res.response?.error ? (
        <section className={'gallery__results'}>
          {res.response?.info?.next || res.response?.info?.prev ? (
            <Pagination
              goToPage={goToPage}
              perPage={20}
              pages={res.response.info.pages}
              currentPage={page}
            />
          ) : null}
          <div className="gallery__card-container">
            {res.response?.results ? (
              res.response?.results.map((character: IApiRickAndMortyResult) => (
                <Card key={character.id} {...character} />
              ))
            ) : (
              <p>There are no results that match your search</p>
            )}
          </div>
          {res.response?.info?.next || res.response?.info?.prev ? (
            <Pagination
              goToPage={goToPage}
              perPage={20}
              pages={res.response.info.pages}
              currentPage={page}
            />
          ) : null}
        </section>
      ) : (
        <div>{t('gallery.loading.value')}</div>
      )}
    </div>
  );
};

export default GalleryPage;
