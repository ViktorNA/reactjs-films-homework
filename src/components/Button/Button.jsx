import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './button.scss';

const Button = (props) => {
  const {
    type,
    children,
    action,
    className,
  } = props;
  const classes = cn(styles[type], styles.common, className);
  return <button type="button" className={classes} onClick={action}>{children}</button>;
};

export default Button;

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.string,
  action: propTypes.func,
  className: propTypes.string,
};

Button.defaultProps = {
  children: 'Watch Now',
  className: '',
  action: /* istanbul ignore next */() => { },
  type: 'primary',
};
