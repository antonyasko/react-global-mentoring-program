import React, { memo, useEffect, useMemo, useRef, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';

import CloseButton from '../CloseButton/CloseButton';

import ModalContext from '../../store/modalContext';

import { IModal } from './Modal.types';

import './Modal.scss';

function Modal({ children }: IModal): JSX.Element {
  const { setModalState } = useContext(ModalContext);
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const el = useRef(modalContainer);

  const onModalClose = useCallback(() => {
    setModalState({
      isOpen: false,
      content: null,
    });
  }, [setModalState]);

  const modal = useMemo(
    () => (
      <div className="modal">
        <CloseButton onClick={onModalClose} size="xl" />
        <div className="modal-wrapper">{children}</div>
      </div>
    ),
    [children, onModalClose]
  );

  const modalRoot = useMemo(() => document.querySelector('.App') as HTMLElement, []);

  useEffect(() => {
    const { current } = el;

    modalRoot?.appendChild(current);

    return () => {
      modalRoot?.removeChild(current);
    };
  }, []);

  return createPortal(modal, el.current);
}

export default memo(Modal);
