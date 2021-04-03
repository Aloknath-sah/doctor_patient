import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import {reducer} from './reducer'

let composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);