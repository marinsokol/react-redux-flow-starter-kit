import Root from '../layout';
import Home from './home';
import gameRoute from './game';

export default store => ({
  path: '/',
  component: Root,
  indexRoute: { component: Home },
  childRoutes: [
    gameRoute(store),
  ],
});
