import React from 'react';
import cxBind from 'classnames/bind';

import styles from './button.css';

const cx = cxBind.bind(styles);

const Button = ({ error, ...restProps }) => (
  <button
    {...restProps}
    className={cx('button', { error })}
  />
);

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
