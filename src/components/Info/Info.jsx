import propTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './info.scss';
import backImg from '../../assets/images/cover-image.jpg';

export default class Info extends Component {
  getGenres = (genres, duration) => (
    <div>
      {genres.map(x => (
        <div className={styles.item} key={x}>{x}</div>
      ))}
      <div className={styles.item}>|</div>
      <div className={styles.item}>{duration}</div>
    </div>
  )

  getRating = (rating) => {
    const stars = Math.ceil(rating);
    const array = Array.from({ length: stars }, x => x);
    return (
      <div className={styles.starBox}>
        {array.map(x => (
          <div className={styles.star} key={x} />
        ))}
      </div>
    );
  }

  render() {
    const {
      movie: {
        rating,
        name,
        genres,
        duration,
        description,
      },
    } = this.props;
    return (
      <div style={{ backgroundImage: `url(${backImg})` }} className={styles.wrapper}>
        <div className={styles.bottomShadow} />
        <div className={styles.infoBox}>
          <div className={styles.movieName}>{name}</div>
          <div className={styles.genresBox}>{this.getGenres(genres, duration)}</div>
          <div className={styles.ratingBox}>
            {this.getRating(rating)}
            <div className={styles.rating}>{rating}</div>
          </div>
        </div>
        <div className={styles.descBox}>
          <div className={styles.description}>
            <div className={styles.textWrapper}>{description}</div>
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
    rating: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    duration: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }),
};

Info.defaultProps = {
  movie: {
    name: 'error',
    description: 'error',
    rating: 0,
    genres: ['uncnown genre'],
    duration: '0h 0m',
  },
};
