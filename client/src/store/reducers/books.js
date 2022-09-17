import {
  CHANGE_REQUEST_STATUS_BOOKS,
  ACTION_SUCCESS_GET_BOOKS,
} from "../actions/books";
// import { ACTION_CLEAN } from '../actions';

/**
 *     ------------------------------------------------------------------  PRIVATE API  -------------------------------------------------------------------
 */

function getInitialState() {
  return {
    isFetching: false,
    books: [],
  };
}

/**
 *     ------------------------------------------------------------------  PUBLIC API  -------------------------------------------------------------------
 */

export const books = (state = getInitialState(), action) => {
  switch (action.type) {
    case CHANGE_REQUEST_STATUS_BOOKS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ACTION_SUCCESS_GET_BOOKS:
      return { items: action.books };
    // case ACTION_CLEAN:
    //     return {};

    default:
      return state;
  }
};
