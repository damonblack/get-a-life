import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';
import { initialStates } from '../reducers';

export default props => {
  const initialRoster = props.characters;
  const { rosterState } = initialStates;
  const initialState = {
    rosterStore: rosterState.merge({
      roster: initialRoster
    })
  };

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  // Sync dispatched route actions to the history
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )(createStore);

  return finalCreateStore(reducer, initialState);
};

