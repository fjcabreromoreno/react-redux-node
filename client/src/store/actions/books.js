import { URL_GET_BOOKS } from "../config";
import { launchRequest } from "../controllers/webService";

/**
 *     ------------------------------------------------------------------  PRIVATE API  -------------------------------------------------------------------
 */

/*
 *     ++++++++++++++++++++++++++++++++++++++++++++++ ACTIONS ++++++++++++++++++++++++++++++++++++++++++++++
 */
const changeRequestStatusBooks = (isFetching = false) => ({
  type: CHANGE_REQUEST_STATUS_BOOKS,
  isFetching,
});

const successGetBooks = (books) => ({
  type: ACTION_SUCCESS_GET_BOOKS,
  books,
});

/*
 *     ++++++++++++++++++++++++++++++++++++++++++++++    WS    ++++++++++++++++++++++++++++++++++++++++++++++
 */

async function getBooksWS() {
  var response = await launchRequest(URL_GET_BOOKS);

  if (response.statusText === "OK") {
    return response.data;
  } else {
    throw { code: "_ERROR_SYNCHRONIZE_METADATOS" };
  }
}

/**
 *     ------------------------------------------------------------------  PUBLIC API  -------------------------------------------------------------------
 */

export const CHANGE_REQUEST_STATUS_BOOKS = "CHANGE_REQUEST_STATUS_BOOKS";
export const ACTION_SUCCESS_GET_BOOKS = "ACTION_SUCCESS_GET_BOOKS";

export const getBooks = () => async (dispatch, getState) => {
  try {
    await dispatch(changeRequestStatusBooks(true));
    const books = await getBooksWS();
    dispatch(successGetBooks(books));
  } catch (e) {
    await dispatch(changeRequestStatusBooks(false));
    throw e;
  }
};
