import React from 'react';
import cx from 'classnames';

const Button = ({ error, ...restProps }) => (
  <button
    {...restProps}
    className={cx(
      'my-namespace-button',
      { 'my-namespace-button-error': error }
    )}
  />
);

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
