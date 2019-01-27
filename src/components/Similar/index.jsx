import 'babel-polyfill';
import React from 'react';
import Movies from './Movies';
import Menu from './Menu';
import styles from './wrapper.scss';

const Wrapper = () => (
  <div className={styles.wrapper}>
    <Menu />
    <Movies />
  </div>);

export default Wrapper;
