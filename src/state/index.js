import produce from "immer";
import { createContext } from "react";

export function reducer(_state, action) {
  return produce(_state, (state) => {
    switch (action.type) {
      case "addTodo":
        state.todoList.push(action.todo);
        break;
      case "setFoodType":
        state.foodType = action.value;
        break;
      case "addMenu":
        state.menuList.push(action.value);
        break;
      case "deleteMenu":
        state.menuList = state.menuList.filter(
          (item) => item.id !== action.value
        );
        break;
      case "plusCookingCount":
        state.maxCookingCount += 1;
        break;
      case "minusCookingCount":
        // maxCookingCount 값 제한 설정
        if (state.maxCookingCount > 0) {
          state.maxCookingCount -= 1;
        }
        break;
      case "addCooking":
        state.cookingList.push(action.value);
        break;
      case "updateMenuDetail":
        console.log("StateValue", action.value);
        const index = state.menuList.findIndex(
          (item) => item.id === action.value.id
        );
        state.menuList[index] = action.value;
        // const newMenuList = state.menuList.map((item) => {
        //   if (item.id === action.value.id) {
        //     return action.value;
        //   } else {
        //     return item;
        //   }
        // });
        // state.menuList = newMenuList;
        break;
      case "setCookingList":
        state.cookingList = action.value;
        break;
      default:
        return state;
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
