import 'babel-polyfill';
import React from 'react';
import Movies from './Movies';
import styles from './index.scss';

const MovieList = () => (
  <div className={styles.wrapper}>
    <Movies />
  </div>);

export default MovieList;
