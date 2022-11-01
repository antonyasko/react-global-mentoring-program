import React from 'react';
import Logo from '../Logo/Logo';

import './Footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo isMain={false} />
    </footer>
  );
}

export default Footer;
