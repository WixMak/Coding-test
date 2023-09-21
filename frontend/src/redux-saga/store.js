import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducer";
import Saga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

//Saga middleware setup
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Saga);
