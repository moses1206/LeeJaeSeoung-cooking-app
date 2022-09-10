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
  menuList: [
    {
      id: 1,
      foodName: "김치찌개",
      category: "한식",
      cookingTime: 8,
      price: 7000,
    },
    {
      id: 2,
      foodName: "된장찌개",
      category: "한식",
      cookingTime: 10,
      price: 8500,
    },
    {
      id: 3,
      foodName: "초밥",
      category: "일식",
      cookingTime: 5,
      price: 9000,
    },
  ],
  foodType: "한식",
  cookingList: [],
  maxCookingCount: 2,
};

export const StateContext = createContext(INITIAL_STATE);
export const DispatchContext = createContext();
