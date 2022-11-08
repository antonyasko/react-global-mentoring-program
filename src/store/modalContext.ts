import { createContext, Dispatch, SetStateAction } from 'react';
/* eslint-disable @typescript-eslint/no-empty-function */

interface IModalState {
  isOpen: boolean;
  content: JSX.Element | JSX.Element[] | null;
}

interface IModalContext {
  isOpen: boolean;
  content: JSX.Element | JSX.Element[] | null;
  setModalState: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      content: JSX.Element | JSX.Element[] | null;
    }>
  >;
}

const ModalContext = createContext<IModalContext>({
  isOpen: false,
  content: null,
  setModalState: () => {},
});

export default ModalContext;
