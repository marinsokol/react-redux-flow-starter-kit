import { injectReducer } from '../../reducers';
import memory from './reducers';
import Game from './containers/Game';

export default store => ({
  path: 'game',
  component: Game,
  onEnter: () => injectReducer(store, { key: 'memory', reducer: memory }),
});
