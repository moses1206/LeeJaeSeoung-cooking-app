import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";
import { useState, useEffect, useContext } from "react";
import { StateContext, DispatchContext } from "../src/state";

export default function Home() {
  const { cookingList } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  // 메뉴추가할때 a를 누르면 첫번째 input에 focus가 되도록 !!
  // F2 Rename 기능
  // index js useState 삭제 , detail 작업 , 헤더쪽 미비한점

  // useEffect(() => {
  //   // TODO: 불변으로 관리하기
  //   // 💥💥 return()=> clearInterval , clearInterval 차이는?? 💥💥
  //   const id = setInterval(() => {
  //     const newCookingList = produce(cookingList, (draft) => {
  //       for (const item of draft) {
  //         // 직접적으로 값을 바꾸면 안된다. 레퍼런스로 바꾸어야 한다.
  //         if (item.remainingTime > 0) {
  //           item.remainingTime -= 1;
  //         }
  //       }
  //     });
  //     dispatch({ type: "addCooking", value: newCookingList });
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [cookingList, dispatch]);

  // 등록과 해제의 페어가 있다. setInterval setTimeout addEventListener

  /**
   * 0초: 1개 등록
   * 1초: 1개 등록, 1개 실행
   * 2초: 1개 등록, 2개 실행
   */

  return (
    <div>
      <Header />
      <div className='flex'>
        <Category />
        <Menu />
      </div>
    </div>
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
