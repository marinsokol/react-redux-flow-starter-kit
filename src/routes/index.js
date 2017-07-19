import App from '../layout';
import Home from './home';
import Game from './game';

export default [
  {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/game', component: Game },
    ],
  }];
