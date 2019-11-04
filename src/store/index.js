// import React from 'react'; // из node_modules берем реакт, React.createElement('div', {}, 'hello w');
import { createStore, combineReducers, applyMiddleware } from "redux"
// import persistState from "react-localstorage"

import * as reducers from "./reducers"
import * as actions from "./actions"

const middleWare = store => dispatch => action => {
    dispatch(action);
    localStorage.setItem("App_store", JSON.stringify(store.getState()))
}

export { actions }

export default createStore(
    combineReducers(reducers), {}
);