import React from 'react';
import cx from 'classnames';

const Button = ({ error, ...restProps }) =>
  <button {...restProps} className={cx('button', { error })} />;

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
