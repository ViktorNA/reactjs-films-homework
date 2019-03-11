import propTypes from 'prop-types';
import React from 'react';
import Button from '../Buttons';
import styles from './movieDetails.scss';
import Rating from './Rating';
import Genres from './Genres';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const mainMovie = require('../../assets/json/505954.json');

const Info = () => {
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
        <div className={styles.genresBox}><Genres duration={runtime} genres={genres} /></div>
        <div className={styles.ratingBox}>
          <Rating rating={voteAverage} />
          <div className={styles.rating}>{voteAverage}</div>
        </div>
      </div>
      <div className={styles.descBox}>
        <div className={styles.description}>
          <div className={styles.textWrapper}>{overview}</div>
        </div>
        <Button type="watchNow" action={() => {}} text="Watch Now" />
        <Button type="viewInfo" action={() => { }} text="View Info" additionStyle={{ marginLeft: '30px' }} />
      </div>
    </div>
  );
};

export default Info;

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
