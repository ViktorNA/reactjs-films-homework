import 'babel-polyfill';
import React, { Component } from 'react';
import MovieCard from '../MovieCard';
import styles from './movies.scss';
import loadGif from '../../assets/images/spinner.gif';

const movies = require('../../assets/json/popular.json');

export default class Movies extends Component {
  state = { activeId: -1 };

  updateData = (value) => {
    this.setState({ activeId: value });
  };

  render() {
    const { activeId } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.item}>
          {movies.results.map(movie => (
            <MovieCard
              movie={movie}
              key={movie.id}
              id={movie.id}
              activeId={activeId}
              onShowInfo={this.updateData}
            />
          ))}
        </div>
        <div className={styles.spinner}>
          <img src={loadGif} alt="loading" />
        </div>
        <div className={styles.loading}>
          LOADING
        </div>
      </div>
    );
  }
}
