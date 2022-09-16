import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StateContext, DispatchContext } from "../../src/state";
import Button from "../../src/component/Button";

export default function MenuDetail({ id }) {
  const router = useRouter();
  const { menuList } = useContext(StateContext);
  const menuDetail = menuList.filter((item) => item.id === id);
  console.log("MenuDetail", menuDetail);

  const { foodName, cookingTime, price, category } = menuDetail[0];

  return (
    <div>
      <div>
        <Button onClick={() => router.push("/")} className='mb-10 '>
          뒤로가기
        </Button>
        <div className='ml-10 '>
          <div className='font-bold'>기본정보</div>

          <div>{id}</div>
          <div>메뉴이름 : {foodName}</div>
          <div className='flex mt-5'>
            <div>조리시간 : {cookingTime}</div>
            <Button>수정</Button>
          </div>
          <div className='mt-5'>가격 : {price}원</div>
          <div className='mt-5'>카테고리 : {category}</div>
        </div>
      </div>
      <div className='mt-10 ml-10 font-bold'>
        <div>변경내역</div>
      </div>
    </div>
  );
}
