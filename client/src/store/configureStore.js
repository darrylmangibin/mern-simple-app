import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {}
const reducer = rootReducer()

const configureStore = () => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
  );
  return store
}

export default configureStore;