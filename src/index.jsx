import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Signature from './components/Signature/Signature';


render(
  <Signature name="Viktor" />,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
