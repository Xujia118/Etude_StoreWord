import React, { useReducer } from "react";
import FormLogin from "./FormLogin";

import { fetchLogin, fetchLogout, fetchSession } from "./services";
import reducer, { initialState } from "./reducer";
import { ACTIONS } from "./constants";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onLogin(username) {
    dispatch({ type: ACTIONS.IS_LOADING });
    fetchLogin(username)
      .then((data) => {
        dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogout() {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout()
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <FormLogin onLogin={onLogin} onLogout={onLogout}/>
    </div>
  );
}

export default App;
