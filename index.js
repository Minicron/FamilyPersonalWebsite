import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

// import stylesheets
require('./sylesheets/main.scss');

ReactDOM.render(<App />, document.getElementById('app'));
