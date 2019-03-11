import React from 'react';
import propTypes from 'prop-types';
import styles from './genres.scss';

const Genres = (props) => {
  const { duration, genres } = props;
  const dur = `${Math.floor(duration / 60)}h ${duration % 60}m`;
  return (
    <div>
      {genres.map(genre => (
        <div className={styles.item} key={genre.id}>{genre.name}</div>
      ))}
      <div className={styles.item}>|</div>
      <div className={styles.item}>{dur}</div>
    </div>
  );
};

Genres.propTypes = {
  duration: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Genres;
