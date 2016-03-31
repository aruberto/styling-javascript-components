import React, { Component } from 'react';

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
  hover: {
    backgroundColor: 'lightgrey',
  },
};

class Button extends Component {
  state = { hover: false };

  handleMouseOver = () => this.setState({ hover: true });

  handleMouseOut = () => this.setState({ hover: false });

  render() {
    const { error, ...restProps } = this.props;

    return (
      <button
        {...restProps}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        style={{
          ...styles.root,
          ...(error && styles.error),
          ...(this.state.hover && styles.hover),
        }}
      />
    );
  }
}

Button.propTypes = {
  error: React.PropTypes.bool,
};

export default Button;
