import React, { Component, PropTypes } from 'react';
import propTypes from 'prop-types';
import style from './index.scss';

export default class Signature extends Component {
  render() {
<<<<<<< HEAD
    return <div className={style.green}>Hello, {this.props.name}</div>
=======
    return <div className={style.green}>Hellodf, {this.props.name}</div>
>>>>>>> 13265a9fd253a9a3be88208c893653bf71de1c38
  }
}

Signature.propTypes = {
  name: propTypes.string
}

Signature.defaultProps = {
  name: 'Stranger'
};
