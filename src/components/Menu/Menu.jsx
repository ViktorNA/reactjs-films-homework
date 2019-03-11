import React, { Component } from 'react';
import styles from './menu.scss';

const cn = require('classnames');
const genreList = require('../../assets/json/genres.json').genres;

export default class Menu extends Component {
  state = {
    active: 'tranding',
  };

  getStyle(name) {
    const { active } = this.state;
    return cn(styles.item, { [styles.active]: name === active });
  }

  setActive = (event) => {
    this.setState({ active: event.target.name });
  }

  renderGenreList = () => genreList.map(genre => (
    <option key={genre.id} id={genre.id}>
      {genre.name}
    </option>
  ));

  render() {
    return (
      <nav className={styles.wrap}>
        <div className={styles.left}>
          <button tag="button" name="tranding" type="button" className={this.getStyle('tranding')} onClick={this.setActive}>
            Tranding
          </button>
          <button name="top" type="button" className={this.getStyle('top')} onClick={this.setActive}>
            Top Rated
          </button>
          <button name="coming" type="button" className={this.getStyle('coming')} onClick={this.setActive}>
            Coming Soon
          </button>
          <div className={styles.dropdown}>
            <select className={this.getStyle('genre')} name="genre" onClick={this.setActive}>
              <option>Genre</option>
              {this.renderGenreList()}
            </select>
            <div className={styles.stickBox}>
              <div className={styles.leftStick} />
              <div className={styles.rightStick} />
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <button type="button" className={styles.sortWrap}>
            <div className={styles.blocks}>
              <div className={styles.block} />
              <div className={styles.block} />
              <div className={styles.block} />
              <div className={styles.block} />
            </div>
          </button>
          <button type="button" className={styles.sortWrap}>
            <div className={styles.lines}>
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </button>
        </div>
      </nav>
    );
  }
}
