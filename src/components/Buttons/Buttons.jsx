import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './buttons.scss';

const Button = (props) => {
  const {
    type,
    text,
    action,
    additionStyle,
  } = props;
  const classes = cn(styles[type], styles.common);
  return <button type="button" className={classes} onClick={action} style={additionStyle}>{text}</button>;
};

export default Button;

Button.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string,
  action: propTypes.func.isRequired,
  additionStyle: propTypes.PropTypes.objectOf(propTypes.string),
};

Button.defaultProps = {
  text: 'Watch Now',
  additionStyle: {},
};
