import React from 'react';
import styles from './footer.scss';


const Footer = () => (
  <div>
    <div className={styles.circles}>
      <div className={styles.circleM} />
      <div className={styles.circleB} />
      <div className={styles.circleS} />
    </div>
    <div className={styles.loading}>
                    LOADING
    </div>
    <div className={styles.films}>
                    FILMS
    </div>
    <div className={styles.copyrate}>
                    COPYRATING 2019 SOME OTHER TEXT
    </div>
  </div>
);

export default Footer;
