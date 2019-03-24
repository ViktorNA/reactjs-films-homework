import propTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import styles from './MovieCard.scss';

const cn = require('classnames');
const genreIds = require('../../assets/json/genres.json').genres;

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export default class MovieCard extends Component {
  renderGenreList = (genres = []) => genres.map(id => genreIds.find(el => el.id === id).name).slice(0, 3).join(', ');

  showInfo = () => {
    const { onShowInfo, id } = this.props;
    onShowInfo(id);
  }

  closeDescription = () => {
    const { onShowInfo } = this.props;
    onShowInfo(null);
  }

  getClassName = (className) => {
    const { id, activeId } = this.props;
    return id === activeId ? className : styles.hidden;
  }

  getBackStyle = () => {
    const { id, activeId } = this.props;
    return cn(styles.back, { [styles.description]: id === activeId });
  }

  getWatchNowStyle = () => {
    const { id, activeId } = this.props;
    return id === activeId ? 'primary' : 'hidden';
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
        <img className={styles.imgWrapper} src={baseUrl + imageUrl} alt="movie logo" />
        <div className={styles.trailerBox}>
          <div className={styles.circle}>
            <div className={styles.triangle} />
          </div>
          <div className={styles.label}>Watch Now</div>
          <Button type="ghost" action={this.showInfo}>View Info</Button>
        </div>
        <div className={this.getBackStyle()}>
          <div className={this.getClassName(styles.closeWrapper)}>
            <button type="button" className={styles.close} onClick={this.closeDescription} />
          </div>
          <div className={styles.movieName}>{title}</div>
          <div className={styles.ratingBox}>{rating}</div>
          <div className={styles.genresBox}>{this.renderGenreList(genres)}</div>

          <div className={this.getClassName(styles.descriptionWrapper)}>
            {overview}
          </div>
          <Button
            type={this.getWatchNowStyle()}
          >
            Watch Now
          </Button>
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
  id: propTypes.number.isRequired,
  activeId: propTypes.number,
  onShowInfo: propTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: 'error',
    overview: 'error',
    vote_average: 0,
    genres: ['uncnown genre'],
  },
  activeId: -1,
};
