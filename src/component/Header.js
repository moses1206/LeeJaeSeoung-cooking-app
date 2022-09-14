import Button from "./Button";
import { useState, useContext } from "react";
import { StateContext, DispatchContext } from "../state";

export default function Header() {
  const [totalSales, setTotalSales] = useState(0);
  const { menuList, maxCookingCount, cookingList } = useContext(StateContext);
  console.log("쿠킹리스트", cookingList);

  const dispatch = useContext(DispatchContext);

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

  const handleCalculatePrice = (cooking) => {
    // const calculatePrice = cookingList.reduce((accumulator, currentObj) => {
    //   return accumulator + currentObj.price;
    // }, 0);
    // setFoodPrice(calculatePrice);
    totalSales += cooking.price;

    setTotalSales(totalSales);

    // 이름만으로 배열임을 표현해야한다. cookingList의 아이템 이름 List , s
    const newCookingList = cookingList.filter((item) => item.id !== cooking.id);
    setCookingList(newCookingList);
  };

  return (
    <div className='bg-yellow-300 flex min-h-[110px] p-5'>
      <div className=''>
        <div className='flex w-80'>
          <div>이미지</div>
          <h2>조리현황</h2>
        </div>
        {cookingList.map((item) => {
          // Q 필터와 find의 차이는 무엇인가???
          // const findMenu = menuList.filter((menu) => menu.id === item.menuId);

          const findMenu = menuList.find((menu) => menu.id === item.menuId);

          console.log("FindMenu", findMenu);
          // const nm = menuList.forEach((element) => {
          //   if (element.id === cookingList.id) {
          //     return element.foodName;
          //   }
          // });

          return (
            <div key={item.id}>
              <div>{findMenu && findMenu.foodName}</div>
              <div className='flex'>
                {item.remainingTime === 0 ? (
                  <div>
                    <Button onClick={() => handleCalculatePrice(item)}>
                      계산하기
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div>남은시간: {item.remainingTime}초</div>
                    <div className='flex'>
                      <Button>pause</Button>
                      <Button className='ml-1'>stop</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {cookingList.length === 0 && <h4>조리 중인 요리가 업습니다.</h4>}
      </div>

      <div className='flex w-full items-end flex-col '>
        <div className='flex space-x-3'>
          <h4>최대 동시 조리:{maxCookingCount}</h4>
          <Button onClick={() => dispatch({ type: "plusCookingCount" })}>
            증가
          </Button>
          <Button onClick={() => dispatch({ type: "minusCookingCount" })}>
            감소
          </Button>
        </div>
        <div className='flex mr-36 '>
          <div>이미지</div>
          <div>매출:{totalSales}원</div>
        </div>
      </div>
    </div>
  );
}
