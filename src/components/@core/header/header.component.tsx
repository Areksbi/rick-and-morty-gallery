import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { UrlsConst } from '../../../constants/urls.constants';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
  const [t] = useTranslation(TranslationsEnums.COMMON);

  return (
    <header className="header">
      <h1 className="header__title">{t('header.title.value')}</h1>
      <Link className="logo-container" to={UrlsConst.ROOT}>
        <figure className="header__figure">
          <Logo className="header__logo" />
          <figcaption className="header__figcaption">{t('header.logo.caption')}</figcaption>
        </figure>
      </Link>
    </header>
  );
};

export default Header;
