import React from 'react';
import styles from './header.scss';

const placeholder = require('../../assets/json/505954.json').title;

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>FILMS</div>
    <div className={styles.searchBox}>
      <input className={styles.searchInput} placeholder={placeholder} />
    </div>
  </header>
);

export default Header;