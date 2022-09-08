import React from "react";
import { useState } from "react";
import Button from "./Button";

export default function Cooking({
  foodType,
  foodMenu,
  setFoodMenu,
  handleAddCooking,
}) {
  const [foodName, setFoodName] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const foodFilter = foodMenu.filter((item) => item.category === foodType);

  const menuCreateHanlder = () => {
    if (!foodName || !cookingTime || !price || !category) {
      alert("모든 필드를 채워주세요!!");
      return;
    }

    const menuData = {
      id: Date.now(),
      foodName,
      cookingTime: Number(cookingTime),
      price: Number(price),
      category,
    };
    // 왜 push를 쓰면 안되는가?
    // 상태값이 변했을때 자동 렌더링이 된다. 왜 안되는가?
    // foodMenu 의 배열 레퍼런스가 바뀌지 않았다.

    setFoodMenu([...foodMenu, menuData]);
    setFoodName("");
    setCookingTime("");
    setPrice("");
    setCategory("");
  };

  const deleteMenuHandler = (id) => {
    const filteredData = foodMenu.filter((item) => item.id !== id);
    console.log("삭제된후 데이터  ", filteredData);
    setFoodMenu(filteredData);
  };

  const cookingList = foodFilter.map((item) => (
    <div key={item.id}>
      <div>{item.foodName}</div>
      <div>조리시간 : {item.cookingTime}초</div>
      <div>가격 : {item.price}원</div>
      <div>
        <Button onClick={() => handleAddCooking(item)}>조리 시작</Button>
        <Button onClick={() => deleteMenuHandler(item.id)}>메뉴 삭제</Button>
      </div>
    </div>
  ));

  return (
    <div>
      {cookingList}

      <div className="flex">
        <input
          type="text"
          placeholder="요리이름"
          className="bg-white"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          placeholder="조리시간"
          className="bg-white"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="가격"
          className="bg-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="카테고리"
          className="bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button onClick={menuCreateHanlder}>메뉴 추가</Button>
      </div>
    </div>
  );
}

// const a1 = [1,2,3];
// a1.push(4);
// a1.push(5);
// const a2 = a1.map(item => item+1);

/**
 * 0x0001 1 ==> a1
 * 0x0002 2
 * 0x0003 3
 * 0x0004 4
 * 0x0005 5
 * ...
 * 0x1234 1 ==> a2
 * 0x1234 2
 */
