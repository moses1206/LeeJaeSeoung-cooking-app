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
      foodName: "김치찌개",
      foodType: "koreaFood",
      cookingTime: "3초",
      price: "7000원",
    },
    {
      foodName: "된장찌개",
      foodType: "koreaFood",
      cookingTime: "10초",
      price: "8000원",
    },
    {
      foodName: "초밥",
      foodType: "japanFood",
      cookingTime: "5초",
      price: "7000원",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="flex">
        <Category
          foodMenu={foodMenu}
          foodType={foodType}
          setFoodType={setFoodType}
          set
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
