import propTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './MovieCard.scss';

const genreIds = require('../../assets/json/genres.json').genres;

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export default class MovieCard extends Component {
  state = {
    mode: 'short',
  }

  getGenreList = (genres = []) => genres.map(id => genreIds.find(el => el.id === id).name).slice(0, 3).join(', ');

  changeMode = () => {
    let { mode } = this.state;
    mode = mode === 'short' ? 'desc' : 'short';
    this.setState({ mode });
  }

  checkVisability = (className) => {
    const { mode } = this.state;
    return mode === 'desc' ? className : styles.hidden;
  }

  getBackStyle = () => {
    const { mode } = this.state;
    return mode === 'desc' ? `${styles.back} ${styles.description}` : styles.back;
  }

  render() {
    const {
      movie: {
        title,
        overview,
        poster_path: imageUrl,
        vote_average: rating,
        genre_ids: genres,
      },
    } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.imgWrapper} style={{ backgroundImage: `url(${baseUrl + imageUrl})` }} />
        <div className={styles.trailerBox}>
          <div className={styles.circle}>
            <div className={styles.triangle} />
          </div>
          <div className={styles.label}>Watch Now</div>
          <button type="button" className={styles.viewInfoButton} onClick={this.changeMode}>View Info</button>
        </div>
        <div className={this.getBackStyle()}>
          <div className={this.checkVisability(styles.closeWrapper)}>
            <button type="button" className={styles.close} onClick={this.changeMode} />
          </div>
          <div className={styles.movieName}>{title}</div>
          <div className={styles.ratingBox}>{rating}</div>
          <div className={styles.genresBox}>{this.getGenreList(genres)}</div>
          <div className={this.checkVisability(styles.descriptionWrapper)}>{overview}</div>
          <button type="button" className={this.checkVisability(styles.watchNowButton)}>Watch Now</button>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    imageUrl: propTypes.string,
    vote_average: propTypes.number.isRequired,
    genres: propTypes.array,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'error',
    overview: 'error',
    vote_average: 0,
    genres: ['uncnown genre'],
  },
};
