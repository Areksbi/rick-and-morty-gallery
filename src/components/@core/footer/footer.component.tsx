import React from 'react';

import './footer.styles.scss';
import { ReactComponent as LinkedIn } from '../../../assets/images/linkedin.svg';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { useTranslation } from 'react-i18next';

const Footer = (): JSX.Element => {
  const [t] = useTranslation(TranslationsEnums.COMMON);

  return (
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
            <figcaption className="footer__icon-caption--hidden">{t('footer.linkedin.icon')}</figcaption>
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
