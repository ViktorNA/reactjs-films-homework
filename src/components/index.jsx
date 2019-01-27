import React from 'react';
import styles from './index.scss';
import Wrapper from './Similar/index';
import Footer from './Footer/index';
import Info from './Info/index';


const App = () => (
  <div className={styles.body}>
    <Info />
    <Wrapper />
    <Footer />
  </div>);

export default App;
