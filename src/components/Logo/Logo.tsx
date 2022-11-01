import React, { useMemo } from 'react';

import './Logo.scss';

interface ILogoProps {
  isMain: boolean;
}

function Logo({ isMain = false }: ILogoProps): JSX.Element {
  const logo = useMemo(
    () => (
      <>
        <span className="logo-partial">netflix</span>roulette
      </>
    ),
    []
  );

  return isMain ? <h1 className="logo">{logo}</h1> : <h2 className="logo">{logo}</h2>;
}

export default Logo;
