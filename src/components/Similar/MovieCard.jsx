import propTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './MovieCard.scss';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoType: 'short',
    };
    this.changeState = this.changeState.bind(this);
  }

  getBackStyle() {
    const { infoType } = this.state;
    return infoType === 'short' ? styles.backShort : styles.backLong;
  }

  getCloseStyle() {
    const { infoType } = this.state;
    return infoType === 'long' ? styles.closeWrapper : styles.hiddenDesc;
  }

  getWatchStyle() {
    const { infoType } = this.state;
    return infoType === 'long' ? styles.watchNowButton : styles.hiddenDesc;
  }

  getHeadStyle() {
    const { infoType } = this.state;
    return infoType === 'video' ? styles.shortHead : styles.head;
  }

  getGenresList(genres) {
    let str = '';
    for (let i = 0; i < 3; i+=1) {
      if (i === 2 || i === genres.length - 1) str += genres[i];
      else { str = `${str + genres[i]}, `; }
    }
    return str;
  }

  changeState(event) {
    this.setState({ infoType: event.target.name });
  }

  showInfo(description) {
    const { infoType } = this.state;
    switch (infoType) {
      case 'video': return (
        <div className={styles.watchWrapper}>
          <div className={styles.circle}><div className={styles.triangle} /></div>
          <div className={styles.label}>Watch Now</div>
          <button name="long" type="button" onClick={this.changeState} className={styles.viewInfoButton}>
            View Info
          </button>
        </div>
      );
      case 'short': return (
        <div />
      );
      default: break;
    }
    return (
      <div className={styles.visibleDesc}>
        {description}
      </div>
    );
  }

  render() {
    const {
      movie: {
        name,
        description,
        imageUrl,
        rating,
        genres,
      },
    } = this.props;
    return (
      <div className={styles.card}>
        <img className={styles.imgWrapper} src={imageUrl} alt="Movie log" />
        <div className={this.getBackStyle()}>
          <div className={this.getCloseStyle()}>
            <button name="short" type="button" className={styles.close} onClick={this.changeState}>x</button>
          </div>
          <div className={this.getHeadStyle()}>
            <button name="long" className={styles.movieName} type="button" onClick={this.changeState}>
              {name}
            </button>
            <div className={styles.ratingBox}>
              {rating}
            </div>
            <div className={styles.genresBox}>
              {this.getGenresList(genres)}
            </div>
          </div>
          {this.showInfo(description)}
          <button name="video" type="button" className={this.getWatchStyle()} onClick={this.changeState}>
            Watch Now
          </button>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    imageUrl: propTypes.string,
    rating: propTypes.number.isRequired,
    genres: propTypes.array,
  }),
};

MovieCard.defaultProps = {
  movie: {
    name: 'error',
    description: 'error',
    rating: 0,
    genres: ['uncnown genre'],
  },
};
