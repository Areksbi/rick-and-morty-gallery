import React from 'react';

import './footer.styles.scss';
import { ReactComponent as LinkedIn } from '../../../assets/images/linkedin.svg';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <p className="footer__copyright">
      Roman Baran © {new Date().getFullYear()}
    </p>
    <div className="footer__icons">
      <figure className="footer__icon">
        <a
          href="https://linkedin.com/in/baran-roman/"
          aria-label="Go to my LinkedIn profile!"
        >
          <LinkedIn />
        </a>
        <figcaption className="footer__icon-caption--hidden">
          LinkedIn link
        </figcaption>
      </figure>
    </div>
  </footer>
);

export default Footer;
