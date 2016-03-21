import React from 'react';
import cx from 'classnames';

import styles from './button.css';

const Button = ({ error, ...restProps }) => (
  <button
    {...restProps}
    className={cx(styles.button, { [styles.error]: error })}
  />
);

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
