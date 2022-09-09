import produce from "immer";
import { createContext } from "react";

export function reducer(_state, action) {
  return produce(_state, (state) => {
    switch (action.type) {
      case "addTodo":
        state.todoList.push(action.todo);
        break;
    }
  });
}
export const INITIAL_STATE = {
  todoList: [
    {
      id: 1,
      desc: "todo1",
      createdAt: "2012-12-12",
    },
    {
      id: 2,
      desc: "todo2",
      createdAt: "2012-12-12",
    },
  ],
};

export const StateContext = createContext(INITIAL_STATE);
export const DispatchContext = createContext();
