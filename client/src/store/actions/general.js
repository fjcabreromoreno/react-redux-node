/**
 *     ------------------------------------------------------------------  PRIVATE API  -------------------------------------------------------------------
 */

/**
 *     ------------------------------------------------------------------  PUBLIC API  -------------------------------------------------------------------
 */

export const ACTION_CHANGE_ENVIRONMENT = "ACTION_CHANGE_ENVIRONMENT";
export const ACTION_INIT_APP = "ACTION_INIT_APP";

/*
 * 0 - No init app
 * 1 - Migration Old User
 * 2 - Start App
 */
export const initApp = (initApp) => ({
  type: ACTION_INIT_APP,
  initApp,
});
