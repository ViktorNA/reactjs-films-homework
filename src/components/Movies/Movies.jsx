import 'babel-polyfill';
import React from 'react';
import MovieCard from '../MovieCard';
import styles from './movies.scss';
import loadGif from '../../assets/images/spinner.gif';

const movies = require('../../assets/json/popular.json');

const Movies = () => (
  <div>
    <div className={styles.item}>
      {movies.results.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
    <div className={styles.spinner}>
      <img src={loadGif} alt="loading" />
    </div>
    <div className={styles.loading}>
      LOADING
    </div>
  </div>);

export default Movies;
