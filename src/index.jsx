import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './pages/MovieDetailsPage/index';

render(
  <App />,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
