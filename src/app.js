import React from 'react';
import ReactDOM from 'react-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/app';
import configStore from './store';
import routes from './routes';
import './index.css';

const store = configStore();
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <App store={store} routes={routes(store)} />,
  document.getElementById('root')
);
