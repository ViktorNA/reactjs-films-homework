import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Signature from './components/Component1/Signature.jsx'


render(
  <Signature name="Viktor"/>,
  document.getElementById('root')
)

if(module.hot)
  module.hot.accept()
