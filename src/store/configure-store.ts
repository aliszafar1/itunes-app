import { createStore, applyMiddleware, Store } from "redux";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from './root-reducer';
import CombineEpic from './combine-epic';

const epicMiddleware = createEpicMiddleware();

export default function(): Store{
    const store = createStore(RootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(CombineEpic);

    return store;
}