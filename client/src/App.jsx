import { useEffect, useReducer } from "react";

import reducer, { initialState } from "./reducer";
import { LOGIN_STATUS } from "./constants";
import { checkSession, onLogin, onLogout, updateWord } from "./utils";

import FormLogin from "./FormLogin";
import WordPage from "./wordPage";

import "./App.css";
import { fetchSession, fetchWord } from "./services";

import { ACTIONS } from "./constants";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // function checkSession() {
  //   fetchSession()
  //     .then((data) => {
  //       console.log(data);
  //       dispatch({ type: ACTIONS.LOG_IN, payload: data.username });
  //       return fetchWord();
  //     })
  //     .then((data) => {
  //       dispatch({ type: ACTIONS.DISPLAY_WORD, payload: data.storedWord });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  useEffect(() => {
    checkSession(dispatch)();
  }, []);

  return (
    <main>
      <div className="main-wrapper">
        {state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && (
          <FormLogin onLogin={onLogin(dispatch)} />
        )}
        {state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
          <WordPage
            updateWord={updateWord(dispatch)}
            word={state.word}
            onLogout={onLogout(dispatch)}
          />
        )}
      </div>
    </main>
  );
}

export default App;
