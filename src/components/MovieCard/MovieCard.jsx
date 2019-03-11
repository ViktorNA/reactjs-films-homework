import propTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Buttons';
import styles from './MovieCard.scss';

const cn = require('classnames');
const genreIds = require('../../assets/json/genres.json').genres;

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export default class MovieCard extends Component {
  renderGenreList = (genres = []) => genres.map(id => genreIds.find(el => el.id === id).name).slice(0, 3).join(', ');

  changeMode = () => {
    const { updater, id, activeId } = this.props;
    updater(id === activeId ? -1 : id);
  }

  checkVisability = (className) => {
    const { id, activeId } = this.props;
    return id === activeId ? className : styles.hidden;
  }

  getBackStyle = () => {
    const { id, activeId } = this.props;
    return cn(styles.back, { [styles.description]: id === activeId });
  }

  render() {
    const {
      movie: {
        title,
        overview,
        poster_path: imageUrl,
        vote_average: rating,
        genre_ids: genres,
        id,
        activeId,
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
          <Button type="viewInfo" text="View Info" action={this.changeMode} />
        </div>
        <div className={this.getBackStyle()}>
          <div className={this.checkVisability(styles.closeWrapper)}>
            <button type="button" className={styles.close} onClick={this.changeMode} />
          </div>
          <div className={styles.movieName}>{title}</div>
          <div className={styles.ratingBox}>{rating}</div>
          <div className={styles.genresBox}>{this.renderGenreList(genres)}</div>
          <div className={this.checkVisability(styles.descriptionWrapper)}>{overview}</div>
          <Button type={cn({ watchNow: id === activeId }, { hidden: id !== activeId })} text="Watch Now" action={() => {}} />
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
  activeId: propTypes.number.isRequired,
  updater: propTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: 'error',
    overview: 'error',
    vote_average: 0,
    genres: ['uncnown genre'],
  },
};
