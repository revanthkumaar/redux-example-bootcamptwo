import { createStore, applyMiddleware } from 'redux';
import rotateReducer from './reducers/rotateReducer';
import logger from 'redux-logger';


function configureStore(initialstate = { rotating: true }) {
  return createStore(rotateReducer, initialstate, applyMiddleware(logger));
}
export default configureStore;
