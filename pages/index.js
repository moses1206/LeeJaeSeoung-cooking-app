import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";
import { useState } from "react";

export default function Home() {
  // 과제 : cookingTime , price type을 Number로 전환
  // 메뉴삭제 기능 구현
  // foodMenu에 숫자로된 ID 삽입
  // ID로 필터링 하기
  const [foodType, setFoodType] = useState("koreaFood");

  const [foodMenu, setFoodMenu] = useState([
    {
      id: 1,
      foodName: "김치찌개",
      foodType: "koreaFood",
      category: "한식",
      cookingTime: 8,
      price: 7000,
    },
    {
      id: 2,
      foodName: "된장찌개",
      foodType: "koreaFood",
      category: "한식",
      cookingTime: 10,
      price: 8500,
    },
    {
      id: 3,
      foodName: "초밥",
      foodType: "japanFood",
      category: "일식",
      cookingTime: 5,
      price: 9000,
    },
  ]);

  return (
    <div>
      <Header />
      <div className='flex'>
        <Category
          foodMenu={foodMenu}
          foodType={foodType}
          setFoodType={setFoodType}
        />
        <Menu
          setFoodMenu={setFoodMenu}
          foodMenu={foodMenu}
          foodType={foodType}
        />
      </div>
    </div>
  );
}
