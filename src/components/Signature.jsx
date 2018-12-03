import React, { Component, PropTypes } from 'react';
import propTypes from 'prop-types';
import style from './index.scss';

export default class Signature extends Component {
  render() {
    return <div className={style.green}>Hello, {this.props.name}</div>
  }
}

Signature.propTypes = {
  name: propTypes.string
}

Signature.defaultProps = {
  name: 'Stranger'
};
