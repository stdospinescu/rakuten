import createStore from './createStore';
import browserHistory from './history';

const { store, history } = createStore(browserHistory, {});

export { store, history };
