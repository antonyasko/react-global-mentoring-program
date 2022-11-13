import { ReactNode } from 'react';

export interface Props {
  children: ReactNode | JSX.Element;
}

export interface State {
  hasError: boolean;
}
