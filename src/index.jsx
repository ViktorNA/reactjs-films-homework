import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Signature from './components/Signature.jsx'


render(
  <Signature name="Viktor"/>,
  document.getElementById('root')
)

module.hot.accept()
