import React, { useReducer } from "react";
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
    fetchSession().then((data) => {
      console.log(data);
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
        console.log(data);
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

  return (
    <div>
      {state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && (
        <FormLogin onLogin={onLogin} onLogout={onLogout} />
      )}
      {state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <WordPage />}
    </div>
  );
}

export default App;
