import React, { useState } from 'react';

import './gallery.styles.scss';
import Card from '../../components/gallery-components/card-character/card-character.component';
import useFetch from '../../effects/use-fetch.effect';
import Pagination from '../../components/gallery-components/pagination/pagination.component';
import useQueryParams from '../../effects/use-query-params';
import { ApiRickAndMorty } from '../../constants/api.constants';
import {
  IApiRickAndMorty,
  IApiRickAndMortyCharacter,
  IApiRickAndMortyResult,
} from '../../interfaces/api-rick-and-morty.interfaces';
import { ITranslation } from '../../interfaces/core.interfaces';
import { QueryParamsConstants } from '../../constants/query-params.constants';
import Filters from '../../components/gallery-components/filters/filters.component';

const GalleryPage = ({ t }: ITranslation): JSX.Element => {
  const [pageParam, setPageParam] = useQueryParams(
    QueryParamsConstants.PAGE,
    ''
  );
  const [name, setNameParam] = useQueryParams(QueryParamsConstants.NAME, '');
  const [species, setSpeciesParam] = useQueryParams(
    QueryParamsConstants.SPECIES,
    ''
  );
  const [type, setTypeParam] = useQueryParams(QueryParamsConstants.TYPE, '');
  const [status, setStatusParam] = useQueryParams(
    QueryParamsConstants.STATUS,
    ''
  );
  const [gender, setGenderParam] = useQueryParams(
    QueryParamsConstants.GENDER,
    ''
  );

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
  const onFiltersChange = ({
    gender,
    name,
    species,
    status,
    type,
  }: IApiRickAndMortyCharacter): void => {
    if (name) setNameParam(name);
    if (species) setSpeciesParam(species);
    if (type) setTypeParam(type);
    if (status) setStatusParam(status);
    if (gender) setGenderParam(gender);
    goToPage(1);
  };

  return (
    <div className="gallery">
      <h2 className="gallery__title">{t('gallery.title.value')}</h2>
      <section className={'gallery__filters'}>
        <Filters />
      </section>
      {res.response ? (
        <section className={'gallery__results'}>
          <Pagination
            goToPage={goToPage}
            perPage={20}
            pages={res.response.info.pages}
            currentPage={page}
          />
          <div className="gallery__card-container">
            {res.response.results.map((character: IApiRickAndMortyResult) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
          <Pagination
            goToPage={goToPage}
            perPage={20}
            pages={res.response.info.pages}
            currentPage={page}
          />
        </section>
      ) : (
        <div>{t('gallery.loading.value')}</div>
      )}
    </div>
  );
};

export default GalleryPage;
