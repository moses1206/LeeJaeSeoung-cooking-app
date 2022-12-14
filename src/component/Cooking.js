import React, { useEffect } from "react";
import { useState, useContext, useRef } from "react";
import Button from "./Button";
import { StateContext, DispatchContext } from "../state";
import Link from "next/link";
import produce from "immer";
import useMenus from "../state/server/useMenus";

export default function Cooking() {
  const [menus, { state, isLoading }] = useMenus();
  console.log(menus, { state, isLoading });

  const { menuList, foodType, maxCookingCount, cookingList } =
    useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [foodName, setFoodName] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // 랜더링과 관계없는 값들을 저장.
  // useCallback,useMemo 을 써서 레퍼런스의 변경없도록.. 성능최적화..
  // 느림을 느꼈을때 : 레퍼런스를 고정함으로
  const inputRef = useRef();

  // useEffect에서 함수를 리턴해야한다.리턴한 함수는 두번째
  // 리턴 된것을 unMount될때도 실행해 준다.(등록한 것을 해제하는 용도)
  // 페어 프로그램. 등록과 해제 setInterval , setTimeout
  useEffect(() => {
    const handleKeyup = (e) => {
      if (e.key === "a") {
        inputRef.current.focus();
      }
    };
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, []);

  const foodFilter = menuList.filter((item) => item.category === foodType);

  const handleMenuCreate = () => {
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
    // menuList 의 배열 레퍼런스가 바뀌지 않았다.

    dispatch({
      type: "addMenu",
      value: menuData,
    });

    // setMenuList([...menuList, menuData]);
    setFoodName("");
    setCookingTime("");
    setPrice("");
    setCategory("");
  };

  const deleteMenuHandler = (id) => {
    // const filteredData = menuList.filter((item) => item.id !== id);
    // console.log("삭제된후 데이터  ", filteredData);
    // setMenuList(filteredData);
    dispatch({ type: "deleteMenu", value: id });
  };

  const handleAddCooking = (item) => {
    const cooking = {
      id: Date.now(),
      menuId: item.id,
      remainingTime: item.cookingTime,
      price: item.price,
    };
    console.log("쿠킹", cooking);
    if (cookingList.length < maxCookingCount) {
      // setCookingList([...cookingList, cooking]);
      dispatch({ type: "addCooking", value: cooking });
    }
  };

  const newCookingList = foodFilter.map((item) => (
    <div key={item.id}>
      <div>{item.foodName}</div>
      <div>조리시간 : {item.cookingTime}초</div>
      <div>가격 : {item.price}원</div>
      <div>
        <Button onClick={() => handleAddCooking(item)}>조리 시작</Button>
        <Button onClick={() => deleteMenuHandler(item.id)}>메뉴 삭제</Button>
        <Link href={`/menu-detail/${item.id}`}>
          <Button>메뉴 상세</Button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div>
      {newCookingList}
      <div className="flex">
        <input
          ref={inputRef}
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
        <Button onClick={handleMenuCreate}>메뉴 추가</Button>
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
