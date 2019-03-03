import propTypes from 'prop-types';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import styles from './info.scss';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const mainMovie = require('../../assets/json/505954.json');

export default class Info extends Component {
  getGenres = (genres, duration) => {
    const dur = `${Math.floor(duration / 60)}h ${duration % 60}m`;
    return (
      <div>
        {genres.map(genre => (
          <div className={styles.item} key={uniqid()}>{genre.name}</div>
        ))}
        <div className={styles.item}>|</div>
        <div className={styles.item}>{dur}</div>
      </div>
    );
  }

  getRating = (rating) => {
    const stars = Math.ceil(rating);
    const array = Array.from({ length: stars }, x => x);
    return (
      <div className={styles.starBox}>
        {array.map(() => (
          <div className={styles.star} key={uniqid()} />
        ))}
      </div>
    );
  }

  render() {
    const {
      vote_average: voteAverage,
      title,
      genres,
      runtime,
      overview,
      backdrop_path: backdropPath,
    } = mainMovie;
    return (
      <div style={{ backgroundImage: `url(${baseUrl + backdropPath})` }} className={styles.wrapper}>
        <div className={styles.bottomShadow} />
        <div className={styles.infoBox}>
          <div className={styles.movieName}>{title}</div>
          <div className={styles.genresBox}>{this.getGenres(genres, runtime)}</div>
          <div className={styles.ratingBox}>
            {this.getRating(voteAverage)}
            <div className={styles.rating}>{voteAverage}</div>
          </div>
        </div>
        <div className={styles.descBox}>
          <div className={styles.description}>
            <div className={styles.textWrapper}>{overview}</div>
          </div>
          <button type="button" className={styles.watchNowButton}>Watch Now</button>
          <button type="button" className={styles.viewInfoButton}>View Info</button>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  movie: propTypes.shape({
    vote_average: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    runtime: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
  }),
};

Info.defaultProps = {
  movie: {
    title: 'error',
    overview: 'error',
    vote_average: 0,
    genres: ['uncnown genre'],
    runtime: 0,
  },
};
