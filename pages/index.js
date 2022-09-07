import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";
import { useState, useEffect } from "react";

export default function Home() {
  /**
   * * 함수 이름은 동사로 시작
   *   이름만으로 기능을 확인하기 쉽도록
   * context 문서 읽어보기: https://reactjs.org/docs/context.html
   * 시간 0 됐을 때 계산하기 버튼 보여주기
   * id로 foodMenu 이름 불러오기
   */
  const [foodType, setFoodType] = useState("한식");
  const [cookingMenu, setCookingMenu] = useState([]);

  const [foodMenu, setFoodMenu] = useState([
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
  ]);

  const handleCooking = (item) => {
    const cooking = {
      id: Date.now(),
      menuId: item.id,
      remainingTime: item.cookingTime,
    };
    setCookingMenu([...cookingMenu, cooking]);
  };

  useEffect(() => {
    // TODO: 불변으로 관리하기
    const id = setInterval(() => {
      for (const item of cookingMenu) {
        // 직접적으로 값을 바꾸면 안된다. 레퍼런스로 바꾸어야 한다.
        item.remainingTime -= 1;
      }
      // 리액트에서 변경감지는 레퍼런스의 변경유무로 판단
      setCookingMenu([...cookingMenu]);
      // setCookingMenu([cookingMenu[0],cookingMenu[1],cookingMenu[2],]);
      // setCookingMenu([cookingMenu]);
    }, 1000);
    return () => clearInterval(id);
  }, [cookingMenu]);

  // 등록과 해제의 페어가 있다. setInterval setTimeout addEventListener

  /**
   * 0초: 1개 등록
   * 1초: 1개 등록, 1개 실행
   * 2초: 1개 등록, 2개 실행
   */

  return (
    <div>
      <Header foodMenu={foodMenu} cookingMenu={cookingMenu} />
      <div className="flex">
        <Category
          foodMenu={foodMenu}
          foodType={foodType}
          setFoodType={setFoodType}
        />
        <Menu
          setFoodMenu={setFoodMenu}
          foodMenu={foodMenu}
          foodType={foodType}
          handleCooking={handleCooking}
        />
      </div>
    </div>
  );
}
