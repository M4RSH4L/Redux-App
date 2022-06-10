 import{combineReducer}from'redux';
 import { productReducer } from './product-reducer';

 const reducers = combineReducer  ({
     productReducer: productReducer
 })

 export default reducers;