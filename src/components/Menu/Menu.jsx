import React, { Component } from 'react';
import styles from './menu.scss';

const genreList = require('../../assets/json/genres.json').genres;

export default class Menu extends Component {
  state = {
    active: 'tranding',
    activeGenreIds: [],
  };

  getStyle(name) {
    const { active } = this.state;
    return active === name ? `${styles.item} ${styles.active}` : styles.item;
  }

  setActive = (event) => {
    this.setState({ active: event.target.name });
  }

  selectGenre = (event) => {
    const { activeGenreIds } = this.state;
    if (activeGenreIds.indexOf(+event.target.id) === -1) {
      activeGenreIds.push(+event.target.id);
    } else {
      activeGenreIds.splice(activeGenreIds.indexOf(event.target.id, 1));
    }
    this.setState({ activeGenreIds });
    return 0;
  }

  getGenreStyle = (id) => {
    const { activeGenreIds } = this.state;
    return activeGenreIds.indexOf(id) === -1 ? styles.listElement : `${styles.listElement} ${styles.active}`;
  }

  getGenreList = () => genreList.map(genre => (
    <button className={this.getGenreStyle(genre.id)} type="button" key={genre.id} id={genre.id} onClick={this.selectGenre}>
      {genre.name}
    </button>
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
            <button type="button" name="genre" className={this.getStyle('genre')} onClick={this.setActive}>
              Genre
              <div className={styles.stickBox}>
                <div className={styles.leftStick} />
                <div className={styles.rightStick} />
              </div>
            </button>
            <ul className={styles.genreList}>
              {this.getGenreList()}
            </ul>
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
