import Button from "./Button";

export default function Header({ cookingMenu, foodMenu }) {
  const countHanler = (time) => {};
  // TODO: item.menuId 를 메뉴 이름으로 변경하기

  return (
    <div className="bg-yellow-300 flex min-h-[110px] p-5">
      <div className="">
        <div className="flex">
          <div>이미지</div>
          <h2>조리현황</h2>
        </div>
        {cookingMenu.map((item) => {
          // Q 필터와 find의 차이는 무엇인가???
          // const findMenu = foodMenu.filter((menu) => menu.id === item.menuId);

          const findMenu = foodMenu.find((menu) => menu.id === item.menuId);

          console.log("FindMenu", findMenu);
          // const nm = foodMenu.forEach((element) => {
          //   if (element.id === cookingMenu.id) {
          //     return element.foodName;
          //   }
          // });

          return (
            <div key={item.id}>
              <div>😊😂🤣{findMenu.foodName}</div>
              <div>남은시간: {item.remainingTime}초</div>
              <div className="flex">
                <Button>pause</Button>
                <Button>stop</Button>
              </div>
            </div>
          );
        })}
        {cookingMenu.length === 0 && <h4>조리 중인 요리가 업습니다.</h4>}
      </div>

      <div className="flex w-full items-end flex-col ">
        <div className="flex space-x-3">
          <h4>최대 동시 조리:3</h4>
          <Button>증가</Button>
          <Button>감소</Button>
        </div>
        <div className="flex mr-36 ">
          <div>이미지</div>
          <div>매출:0원</div>
        </div>
      </div>
    </div>
  );
}
