import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";
import { useState, useEffect, useReducer } from "react";
import produce from "immer";
import {
  reducer,
  INITIAL_STATE,
  StateContext,
  DispatchContext,
} from "../src/state";

export default function Home() {
  // F2 Rename 기능
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [foodType, setFoodType] = useState("한식");
  const [cookingList, setCookingList] = useState([]);
  const [maxCookingCount, setMaxCookingCount] = useState(2);
  const [menuList, setMenuList] = useState([
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

  const handleAddCooking = (item) => {
    const cooking = {
      id: Date.now(),
      menuId: item.id,
      remainingTime: item.cookingTime,
      price: item.price,
    };
    if (cookingList.length < maxCookingCount) {
      setCookingList([...cookingList, cooking]);
    }
  };

  useEffect(() => {
    // TODO: 불변으로 관리하기
    // 💥💥 return()=> clearInterval , clearInterval 차이는?? 💥💥
    const id = setInterval(() => {
      const newCookingList = produce(cookingList, (draft) => {
        for (const item of draft) {
          // 직접적으로 값을 바꾸면 안된다. 레퍼런스로 바꾸어야 한다.
          if (item.remainingTime > 0) {
            item.remainingTime -= 1;
          }
        }
      });
      setCookingList(newCookingList);
    }, 1000);
    return () => clearInterval(id);
  }, [cookingList]);

  // 등록과 해제의 페어가 있다. setInterval setTimeout addEventListener

  /**
   * 0초: 1개 등록
   * 1초: 1개 등록, 1개 실행
   * 2초: 1개 등록, 2개 실행
   */

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Header
          cookingList={cookingList}
          maxCookingCount={maxCookingCount}
          setMaxCookingCount={setMaxCookingCount}
          setCookingList={setCookingList}
        />
        <div className='flex'>
          <Category
            menuList={menuList}
            foodType={foodType}
            setFoodType={setFoodType}
          />
          <Menu
            setMenuList={setMenuList}
            menuList={menuList}
            foodType={foodType}
            handleAddCooking={handleAddCooking}
          />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// immer 사용법
// const person = {
//   name: "abc",
//   hobby: {
//     name: "soccer",
//     prop2: 12,
//   },
//   hobby2: {
//     name: "soccer2",
//     prop2: 12,
//   },
// };

// person.hobby.name = "aaa";
// const newPerson1 = produce(person, (draft) => {
//   draft.hobby.name = "aaa";
// });
// newPerson1 !== person
// newPerson1.hobby !== person.hobby
// newPerson1.hobby2 === person.hobby2
// const newPerson2 = {
//   ...person,
//   hobby: {
//     ...person.hobby,
//     name: "aaa",
//   },
// };
