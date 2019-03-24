import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './index.scss';

const App = () => (
  <MovieDetailsPage />
);

render(
  <App />,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
