import "../styles/globals.css";
import {
  reducer,
  INITIAL_STATE,
  StateContext,
  DispatchContext,
} from "../src/state";

import { useReducer } from "react";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default MyApp;
