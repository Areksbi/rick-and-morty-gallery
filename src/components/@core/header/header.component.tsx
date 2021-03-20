import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ITranslation } from '../../../interfaces/core.interfaces';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { UrlsConst } from '../../../constants/urls.constants';

const Header = ({ t }: ITranslation): JSX.Element => (
  <header className="header">
    <Link className="logo-container" to={UrlsConst.ROOT}>
      <figure className="header__figure">
        <Logo className="header__logo" />
        <figcaption className="header__figcaption">
          {t('header.logo.caption')}
        </figcaption>
      </figure>
    </Link>
  </header>
);

export default Header;
