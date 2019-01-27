import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Wrapper from './components/index';

render(
  <Wrapper />,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
