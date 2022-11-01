import React, { Component, ErrorInfo, ReactNode } from 'react';

import './ErrorBoundary.scss';

interface Props {
  children: ReactNode | JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): JSX.Element | ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h2 className="error-message">Sorry... something went wrong</h2>;
    }

    return children;
  }
}

export default ErrorBoundary;
