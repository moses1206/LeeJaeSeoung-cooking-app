import { useState } from "react";
import Cooking from "./Cooking";

export default function Menu({ foodType, foodMenu, setFoodMenu }) {
  return (
    <div className="bg-gray-200">
      <h2>메뉴</h2>
      <Cooking
        foodType={foodType}
        setFoodMenu={setFoodMenu}
        foodMenu={foodMenu}
      />
    </div>
  );
}
