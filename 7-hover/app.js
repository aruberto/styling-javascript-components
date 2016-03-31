import React from 'react';
import ReactDOM from 'react-dom';

import Button from './button';

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
