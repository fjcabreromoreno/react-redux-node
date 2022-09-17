import * as asyncInitialState from "redux-async-initial-state";
import { combineReducers } from "redux";

import { books } from "./books";

export async function loadAsyncInitStore() {}

export const reducers = asyncInitialState.outerReducer(
  combineReducers({
    books,
    asyncInitialState: asyncInitialState.innerReducer,
  })
);
