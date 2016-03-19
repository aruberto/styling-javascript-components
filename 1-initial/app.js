import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

const Button = ({ error, ...restProps }) =>
  <button {...restProps} className={cx('button', { error })} />;

Button.propTypes = {
  error: PropTypes.bool,
};

const App = () => (
  <div>
    <div>
      <Button>Everything is normal ....</Button>
      &nbsp;&nbsp;
      <Button error>Oh no, there is an error!</Button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
