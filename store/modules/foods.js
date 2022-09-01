import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  koreaFood: [
    {
      foodName: "김치찌개",
      cookingTime: "3초",
      price: "7000원",
    },
    {
      foodName: "된장찌개",
      cookingTime: "10초",
      price: "8000원",
    },
  ],
  japanFood: [
    {
      foodName: "초밥",
      cookingTime: "5초",
      price: "7000원",
    },
  ],
  chineseFood: [],
}; // 초기 상태 정의

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addKfood: (state) => {
      koreaFood.unshift(state);
    },
    addJfood: (state) => {
      japanFood.unshift(state);
    },
    addCfood: (state) => {
      chineseFood.unshift(state);
    },
  },
});

export const { addKfood, addJfood, addCfood } = foodsSlice.actions; // 액션 생성함수
export default foodsSlice.reducer; // 리듀서
