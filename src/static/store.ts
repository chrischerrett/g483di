import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { StoreState } from "../models/state";
import { filesReducer } from "../reducers";
import thunk from "redux-thunk";

const reducer = combineReducers<StoreState>({
    files: filesReducer,
});

declare let window: Window & {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);
