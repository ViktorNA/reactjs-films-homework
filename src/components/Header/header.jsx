import React from 'react';
import styles from './header.scss';

const Header = () => (
  <div className={styles.topShadow}>
    <div className={styles.filmsLabel}>FILMS</div>
    <div className={styles.searchBox}>
      <input className={styles.searchInput} placeholder="the jungle book" />
    </div>
  </div>
);

export default Header;
