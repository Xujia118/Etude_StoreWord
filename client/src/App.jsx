import React, { useEffect, useReducer } from "react";
import FormLogin from "./FormLogin";

import {
  fetchLogin,
  fetchLogout,
  fetchSession,
  fetchWord,
  fetchUpdateWord,
} from "./services";
import reducer, { initialState } from "./reducer";
import { ACTIONS, LOGIN_STATUS } from "./constants";
import WordPage from "./wordPage";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function checkSession() {
    fetchSession()
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
  }

  function onLogin(username) {
    dispatch({ type: ACTIONS.IS_LOADING });
    fetchLogin(username)
      .then((data) => {
        dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
        return fetchWord();
      })
      .then((data) => {
        console.log(data.storedWord);
        dispatch({ type: ACTIONS.DISPLAY_WORD, payload: data.storedWord });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogout() {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout().catch((err) => {
      console.log(err);
    });
  }

  function updateWord(newWord) {
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
  }

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div>
      {state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && (
        <FormLogin onLogin={onLogin} onLogout={onLogout} />
      )}
      {state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
        <WordPage updateWord={updateWord} word={state.word} />
      )}
    </div>
  );
}

export default App;
