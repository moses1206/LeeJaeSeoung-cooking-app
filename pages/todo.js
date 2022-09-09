import { useReducer } from "react";
import TodoMain from "../src/todo/component/TodoMain";
import {
  reducer,
  INITIAL_STATE,
  StateContext,
  DispatchContext,
} from "../src/todo/state";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <TodoMain />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
