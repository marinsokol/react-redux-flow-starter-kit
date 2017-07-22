import Root from '../layout';
import Home from './home';
import gameRoute from './game';
import type { Store } from '../types';

export default (store: Store) => ({
  path: '/',
  component: Root,
  indexRoute: { component: Home },
  childRoutes: [
    gameRoute(store),
  ],
});
