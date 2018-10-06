import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import item from "../State/Reducer";

const composeDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default createStore(
  combineReducers({ item }),
  composeDevtools(),
  applyMiddleware(thunk)
);
