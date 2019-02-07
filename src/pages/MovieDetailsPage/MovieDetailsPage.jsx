import React from 'react';
import Info from '../../components/Info/index';
import Menu from '../../components/Menu/index';
import Movies from '../../components/Movies/index';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import styles from './index.scss';

const App = () => (
  <div className={styles.body}>
    <Header />
    <Info />
    <Menu />
    <Movies />
    <Footer />
  </div>);

export default App;
