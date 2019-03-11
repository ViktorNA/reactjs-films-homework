import React from 'react';
import propTypes from 'prop-types';
import styles from './rating.scss';

const Rating = (props) => {
  const { rating } = props;
  const array = Array.from({ length: Math.ceil(rating) });
  return (
    <div className={styles.starBox}>
      {array.map((x, i) => (
        // eslint-disable-next-line
        <div className={styles.star} key={i} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
