import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';

import payment from '../containers/Payment/reducers';
import citySearch from '../containers/CitySearch/reducers';

function createStore(history, preloadedState = {}) {
  // enhancers
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [routerMiddleware(history), reduxThunk];

  const store = createReduxStore(
    connectRouter(history)(
      combineReducers({
        router: connectRouter(history),
        payment,
        citySearch,
      }),
    ),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return {
    store,
    history,
  };
}

export default createStore;
