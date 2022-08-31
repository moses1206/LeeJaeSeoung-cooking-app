import React from "react";
import Button from "./Button";

export default function Cooking({ foods }) {
  console.log("foods Type", typeof foods);

  const cookingList = foods.map((item, index) => {
    return (
      <div key={index}>
        <div>{item.foodName}</div>
        <div>조리시간 : {item.cookingTime}</div>
        <div>가격 : {item.price}</div>
      </div>
    );
  });

  return (
    <div>
      {cookingList}{" "}
      <div className="flex">
        <input placeholder="요리이름" className="bg-white" />
        <input placeholder="요리이름" className="bg-white" />
        <input placeholder="요리이름" className="bg-white" />
        <Button>메뉴 추가</Button>
      </div>
    </div>
  );
}
