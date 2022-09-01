import { useState } from "react";
import Cooking from "./Cooking";
import { useSelector, useDispatch } from "react-redux";

export default function Menu() {
  // const [koreaFood, setKoreaFood] = useState([
  //   {
  //     foodName: "김치찌개",
  //     cookingTime: "3초",
  //     price: "7000원",
  //   },
  //   {
  //     foodName: "된장찌개",
  //     cookingTime: "10초",
  //     price: "8000원",
  //   },
  // ]);
  // const [japanFood, setJapanFood] = useState([
  //   {
  //     foodName: "초밥",
  //     cookingTime: "5초",
  //     price: "7000원",
  //   },
  // ]);
  // const [chineseFood, setChineseFood] = useState([]);
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.foods);
  console.log("Foodssss", foods);

  return (
    <div className='bg-gray-200'>
      <h2>메뉴</h2>
      {/* <Cooking foods={foods.koreaFood} />
      <Cooking foods={foods.japanFood} />
      <Cooking foods={foods.chineseFood} /> */}
    </div>
  );
}
