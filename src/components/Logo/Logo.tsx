import React, { memo, useMemo } from 'react';

import { ILogoProps } from './Logo.types';

import './Logo.scss';

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

export default memo(Logo);
