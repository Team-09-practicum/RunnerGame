import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

export function render() {
  return ReactDOMServer.renderToString(<App />);
}
