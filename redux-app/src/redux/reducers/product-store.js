import {createStore} from 'redux';
import reducers from './reducers/index';

const prodStore =   createStore(reducers, {});; // 2nd parametro  is the state

export default prodStore;