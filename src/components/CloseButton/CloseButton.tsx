import React, { memo } from 'react';

import close from '../../assets/svg/close.svg';

import { ICloseButton } from './CloseButton.types';

import './CloseButton.scss';

function CloseButton({ onClick, size = 'xs' }: ICloseButton): JSX.Element {
  return (
    <button onClick={onClick} className={`close-button ${size}`} type="button">
      <img src={close} alt="close" className="close-button__icon" />
    </button>
  );
}

export default memo(CloseButton);
