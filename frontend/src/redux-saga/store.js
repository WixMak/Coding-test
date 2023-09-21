import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducer";
import Saga from "./sagas";

//Saga middleware setup
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);
