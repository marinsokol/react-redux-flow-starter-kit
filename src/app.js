import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configStore from './store';
import routes from './routes';
import './index.css';

const store = configStore();

ReactDOM.render(
  <App store={store} routes={routes(store)} />,
  document.getElementById('root')
);
