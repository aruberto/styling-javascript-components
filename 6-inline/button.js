import React from 'react';

const styles = {
  root: {
    backgroundColor: 'transparent',
    padding: '10px',
    fontSize: '24px',
    border: '2px solid blue',
    color: 'blue',
  },
  error: {
    border: '2px solid red',
    color: 'red',
  },
};

const Button = ({ error, ...restProps }) => (
  <button
    {...restProps}
    style={{ ...styles.root, ...(error && styles.error) }}
  />
);

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
