import React, { memo } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function PageNotFound(): JSX.Element {
  return (
    <>
      <Header />
      <h2 className="error-message">404 Page not found</h2>;
      <Footer />
    </>
  );
}

export default memo(PageNotFound);
