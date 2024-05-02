import {
  fetchLogin,
  fetchLogout,
  fetchSession,
  fetchWord,
  fetchUpdateWord,
} from "./services";

import { ACTIONS } from "./constants";

export function checkSession(dispatch) {
  return function () {
    fetchSession()
      .then((data) => {
        console.log(data)
        dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
        return fetchWord();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.DISPLAY_WORD, payload: data.storedWord });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function onLogin(dispatch) {
  return function (username) {
    dispatch({ type: ACTIONS.IS_LOADING });
    fetchLogin(username)
      .then((data) => {
        dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
        return fetchWord();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.DISPLAY_WORD, payload: data.storedWord });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function onLogout(dispatch) {
  return function () {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout().catch((err) => {
      console.log(err);
    });
  };
}

export function updateWord(dispatch) {
  return function (newWord) {
    fetchSession()
      .then((data) => {
        dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      })
      .then(() => {
        return fetchUpdateWord(newWord);
      })
      .then((data) => {
        dispatch({ type: ACTIONS.UPDATE_WORD, payload: data.newWord });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
