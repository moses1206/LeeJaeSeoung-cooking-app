import { useState } from "react";
import Button from "./Button";
import Cooking from "./Cooking";

export default function Category({ foodType, setFoodType, foodMenu }) {
  console.log(foodMenu);

  // 과제 : 3개의 버튼의 코드 중복 없애기

  return (
    <div className="w-52 bg-black">
      <h2 className="my-4 text-white mx-5">카테고리</h2>
      <div className="flex flex-col mx-5 space-y-3">
        <Button
          disabled={foodType === "koreaFood"}
          onClick={() => {
            setFoodType("koreaFood");
          }}
        >
          한식 (
          {foodMenu.filter((item) => item.foodType === "koreaFood").length})
        </Button>

        <Button
          disabled={foodType === "japanFood"}
          onClick={() => {
            setFoodType("japanFood");
          }}
        >
          일식 (
          {foodMenu.filter((item) => item.foodType === "japanFood").length})
        </Button>
        <Button
          disabled={foodType === "chineseFood"}
          onClick={() => {
            setFoodType("chineseFood");
          }}
        >
          중식 (
          {foodMenu.filter((item) => item.foodType === "chineseFood").length})
        </Button>
      </div>
    </div>
  );
}
