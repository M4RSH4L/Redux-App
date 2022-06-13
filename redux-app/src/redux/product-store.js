import { configureStore } from 'redux';
import reducers from './reducers/index';

const prodStore = configureStore(reducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());; // 2nd parametro  is the state

export default prodStore;













