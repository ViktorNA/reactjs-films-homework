import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Signature from './components/Signature.jsx'


render(
  <Signature name="Vi ktor"/>,
  document.getElementById('root')
)

module.hot.accept()
