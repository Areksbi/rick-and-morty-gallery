import React from 'react';

import './footer.styles.scss';
import { ITranslation } from '../../../interfaces/core.interfaces';
import { ReactComponent as LinkedIn } from '../../../assets/images/linkedin.svg';

const Footer = ({ t }: ITranslation): JSX.Element => (
  <footer className="footer">
    <div className={'footer__container'}>
      <p className="footer__copyright">
        {t('footer.copyright.label')} {new Date().getFullYear()}
      </p>
      <div className="footer__icons">
        <figure className="footer__icon">
          <a
            aria-label={t('footer.linkedin.label')}
            href="https://linkedin.com/in/baran-roman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <figcaption className="footer__icon-caption--hidden">
            {t('footer.linkedin.icon')}
          </figcaption>
        </figure>
      </div>
    </div>
  </footer>
);

export default Footer;
