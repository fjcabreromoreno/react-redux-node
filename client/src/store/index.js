import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import * as asyncInitialState from "redux-async-initial-state";

import { reducers, loadAsyncInitStore } from "./reducers";

let store,
  middlewares = [
    thunkMiddleware,
    asyncInitialState.middleware(loadAsyncInitStore),
  ];

store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
