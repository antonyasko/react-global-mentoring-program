import { createElement } from 'react';

export function Hello(): JSX.Element {
  return createElement('div', { className: 'container' }, 'Hello World');
}
