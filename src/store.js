import { createStore, applyMiddleware } from 'redux';
import rotateReducer from './reducers/rotateReducer';
import logger from 'redux-logger';


function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer, state, applyMiddleware(logger));
}
export default configureStore;
