import { injectReducer } from '../../reducers';
import type { Store } from '../../types';
import memory from './reducers';
import Game from './containers/Game';
import './index.css';

export default (store: Store) => ({
  path: 'game',
  component: Game,
  onEnter: () => injectReducer(store, { key: 'memory', reducer: memory }),
});
