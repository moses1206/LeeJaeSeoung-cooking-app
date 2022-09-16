import "../styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/state/server/queryClient";
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
    <QueryClientProvider client={queryClient}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Component {...pageProps} />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
