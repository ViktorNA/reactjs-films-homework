import React, { Component } from 'react';
import styles from './menu.scss';

export default class Menu extends Component {
  state = {
    active: 'tranding',
  };

  getStyle(name) {
    const { active } = this.state;
    return active === name ? styles.active : styles.item;
  }

  setActive = (event) => {
    this.setState({ active: event.target.name });
  }

  render() {
    return (
      <div className={styles.wrap}>
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
          <button name="genre" type="button" className={this.getStyle('genre')} onClick={this.setActive}>
            Genre
            <div className={styles.stickBox}>
              <div className={styles.leftStick} />
              <div className={styles.rightStick} />
            </div>
          </button>
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
      </div>
    );
  }
}
